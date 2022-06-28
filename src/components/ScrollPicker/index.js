import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {hScale, vScale} from '../../assets/RootStyles/Scale';
import {Colors, FontStyle} from '../../assets/RootStyles';

function ScrollPicker({itemHeight = 30, style, ...props}) {
  const [initialized, setInitialized] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(
    props.selectedIndex && props.selectedIndex >= 0 ? props.selectedIndex : 0,
  );
  const sView = useRef(null);
  const [isScrollTo, setIsScrollTo] = useState(false);
  const [dragStarted, setDragStarted] = useState(false);
  const [momentumStarted, setMomentumStarted] = useState(false);
  const [timer, setTimer] = useState(null);
  const wrapperHeight = props.wrapperHeight || itemHeight * 5;

  useEffect(
    function initialize() {
      if (initialized) {
        return;
      }
      setInitialized(true);

      setTimeout(() => {
        const y = itemHeight * selectedIndex;
        sView?.current?.scrollTo({y: y});
      }, 0);
      return () => {
        timer && clearTimeout(timer);
      };
    },
    [initialized, itemHeight, selectedIndex, sView],
  );

  const renderPlaceHolder = () => {
    const h = wrapperHeight - itemHeight + vScale(10);
    const header = <View style={{height: h, flex: 1}} />;
    const footer = <View style={{height: h, flex: 1}} />;
    return {header, footer};
  };

  const renderItem = (data, index) => {
    const isSelected = index === selectedIndex;
    const item = props.renderItem ? (
      props.renderItem(data, index, isSelected)
    ) : (
      <Text
        style={
          isSelected
            ? [styles.itemText, styles.itemTextSelected]
            : styles.itemText
        }>
        {data}
      </Text>
    );

    return (
      <View style={[styles.itemWrapper, {height: itemHeight}]} key={index}>
        {item}
      </View>
    );
  };
  const scrollFix = useCallback(
    e => {
      let y = 0;
      const h = itemHeight;
      if (e.nativeEvent.contentOffset) {
        y = e.nativeEvent.contentOffset.y;
      }
      const _selectedIndex = Math.round(y / h);

      const _y = _selectedIndex * h;
      if (_y !== y) {
        // using scrollTo in ios, onMomentumScrollEnd will be invoked
        if (Platform.OS === 'ios') {
          setIsScrollTo(true);
        }
        sView?.current?.scrollTo({y: _y});
      }
      if (selectedIndex === _selectedIndex) {
        return;
      }
      // onValueChange
      if (props.onValueChange) {
        const selectedValue = props.dataSource[_selectedIndex];
        setSelectedIndex(_selectedIndex);
        props.onValueChange(selectedValue, _selectedIndex);
      }
    },
    [itemHeight, props, selectedIndex],
  );

  const onScrollBeginDrag = () => {
    setDragStarted(true);

    if (Platform.OS === 'ios') {
      setIsScrollTo(false);
    }
    timer && clearTimeout(timer);
  };

  const onScrollEndDrag = e => {
    setDragStarted(false);

    const _e = {...e};
    timer && clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        if (!momentumStarted) {
          scrollFix(_e);
        }
      }, 50),
    );
  };
  const onMomentumScrollBegin = () => {
    setMomentumStarted(true);
    timer && clearTimeout(timer);
  };

  const onMomentumScrollEnd = e => {
    setMomentumStarted(false);

    if (!isScrollTo && !dragStarted) {
      scrollFix(e);
    }
  };

  const {header, footer} = renderPlaceHolder();

  const wrapperStyle = {
    width: hScale(144),
    height: wrapperHeight,
    flex: 1,
    backgroundColor: props.wrapperColor || '#fafafa',
    overflow: 'hidden',
    alignItems: 'center',
  };

  return (
    <View style={[wrapperStyle]}>
      <View
        style={{
          position: 'absolute',
          width: hScale(144),
          height: vScale(50),
          backgroundColor: '#77CAE5',
          borderRadius: vScale(8),
          paddingBottom: vScale(50),
        }}
      />
      <ScrollView
        ref={sView}
        bounces={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        onMomentumScrollBegin={_e => onMomentumScrollBegin()}
        onMomentumScrollEnd={e => onMomentumScrollEnd(e)}
        onScrollBeginDrag={_e => onScrollBeginDrag()}
        onScrollEndDrag={e => onScrollEndDrag(e)}>
        {props.dataSource.map(renderItem)}
        {footer}
      </ScrollView>
    </View>
  );
}

export default ScrollPicker;

const styles = StyleSheet.create({
  itemWrapper: {
    height: vScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#999',
  },
  itemTextSelected: {
    ...FontStyle.title,
    color: Colors.white,
  },
});
