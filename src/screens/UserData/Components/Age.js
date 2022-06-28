import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Background from '../../../assets/Image/background/age_bg.png';
import {vScale} from '../../../assets/RootStyles/Scale';
import {Button} from '../../../components/Button';
import {styles} from '../styles';
import ScrollPicker from '../../../components/ScrollPicker';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts, Sizes} from '../../../assets/RootStyles';
import {useDispatch} from 'react-redux';
import {makeAction} from '../../../store/makeAction';
import {SET_USER_AGE} from '../../../types/USER_ACTIONS';

const AgeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const age = [
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
    75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
    94, 95, 96, 97, 98, 99,
  ];
  const [selected, setSelected] = useState(17);
  const {background, content, title, age_subtitle, select_container} = styles();

  const renderPicker = (data, index) => {
    if (selected === index) {
      return (
        <Text
          style={{
            color: Colors.white,
            fontWeight: '700',
            fontSize: Sizes.size30,
            lineHeight: 45,
          }}>
          {data}
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: Colors.bright_gray,
            opacity: 0.2,
            fontSize: Sizes.size30,
            lineHeight: 45,
            fontFamily: Fonts.medium,
          }}>
          {data}
        </Text>
      );
    }
  };

  const next_press = () => {
    dispatch(makeAction(SET_USER_AGE, age[selected]));
    navigation.navigate('Welcome');
  };

  return (
    <ImageBackground style={background} source={Background}>
      <View style={content}>
        <Text style={title}>My age</Text>
        <Text style={age_subtitle}>(Biological age, not how you feel.) </Text>
        <View style={select_container}>
          <View style={{height: vScale(300), paddingBottom: vScale(45)}}>
            <ScrollPicker
              dataSource={age}
              selectedIndex={selected}
              renderItem={renderPicker}
              onValueChange={(data, selectedIndex) => {
                setSelected(selectedIndex);
              }}
              wrapperColor="transparent"
              itemHeight={vScale(50)}
              highlightColor="transparent"
              highlightBorderWidth={2}
            />
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Button text={'NEXT'} onPress={next_press} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default AgeScreen;
