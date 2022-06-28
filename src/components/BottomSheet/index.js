import React, {useCallback, useMemo, useRef} from 'react';
import {Text, View} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {Colors, FontStyle} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const VideoSheet = ({sheetTitle, sheetContent, height, index, icon}) => {
  const sheetRef = useRef(null);

  const snapPoints = useMemo(
    () => [deviceInfo.small_screen ? '9%' : '8%', height || '60%'],
    [],
  );

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);

  return (
    <BottomSheet
      ref={sheetRef}
      index={index ? index : 0}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      style={{marginHorizontal: 10, position: 'absolute', zIndex: 9999}}>
      <BottomSheetScrollView contentContainerStyle={{backgroundColor: 'white'}}>
        <View
          style={{
            alignItems: 'flex-start',
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
            {icon ? icon : null}
            <Text
              style={{
                ...FontStyle.subtitle_1,
                color: '#0B2B3E',
                paddingBottom: 10,
              }}>
              {sheetTitle}
            </Text>
          </View>

          <Text style={{...FontStyle.body_1, color: Colors.bright_gray}}>
            {sheetContent}
          </Text>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default VideoSheet;
