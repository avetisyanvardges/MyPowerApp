import React, {useState} from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';

import {ImageBackground, Text} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {View} from 'react-native-animatable';
import {hScale, vScale} from '../../../assets/RootStyles/Scale';
import {Button} from '../../../components/Button';
import ScrollPicker from '../../../components/ScrollPicker';
import {Colors, Fonts} from '../../../assets/RootStyles';
import {makeAction} from '../../../store/makeAction';
import {SET_LESSON_START_TIME} from '../../../types/USER_ACTIONS';
import {useDispatch} from 'react-redux';

const TimeScreen = ({setScreen}) => {
  const dispatch = useDispatch();
  const time = [
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00',
  ];
  const {
    background,
    title,
    subtitle,
    select_container,
    top_content,
    center_content,
    bottom_content,
  } = styles();
  const [selected, setSelected] = useState(1);

  const renderPicker = (data, index) => {
    if (selected === index) {
      return (
        <Text
          style={{
            color: Colors.white,
            fontWeight: '700',
            fontSize: hScale(30),
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
            fontSize: hScale(30),
            lineHeight: 45,
            fontFamily: Fonts.medium,
          }}>
          {data}
        </Text>
      );
    }
  };

  const next_press = () => {
    dispatch(makeAction(SET_LESSON_START_TIME, time[selected]));
    setScreen('initial');
  };

  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Choose the best time to start the lesson</Text>
        <Text style={subtitle}>
          When you set time in your schedule things work a lot better.
        </Text>
      </View>
      <View style={center_content}>
        <View style={select_container}>
          <View style={{height: vScale(300), paddingBottom: vScale(45)}}>
            <ScrollPicker
              dataSource={time}
              selectedIndex={1}
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
      </View>
      <View style={bottom_content}>
        <Button text={'Next'} onPress={next_press} />
      </View>
    </ImageBackground>
  );
};

export default TimeScreen;
