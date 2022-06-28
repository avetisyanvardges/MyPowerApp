import React, {useState} from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';
import RadioForm from 'react-native-simple-radio-button';

import {ImageBackground, Text} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {View} from 'react-native-animatable';
import {Button} from '../../../components/Button';
import {useDispatch} from 'react-redux';
import {makeAction} from '../../../store/makeAction';
import {SET_SUPPORT_CYCLE} from '../../../types/USER_ACTIONS';

const ImportantScreen = ({setScreen}) => {
  const dispatch = useDispatch();
  const {
    background,
    title,
    subtitle,
    top_content,
    center_content,
    bottom_content,
  } = styles();
  const text =
    'The MyPwr App consists of two separate but important parts. \n' +
    '\n' +
    'The first part is a 21 lesson ESD course. \n' +
    'The second part is an ongoing lifelong learning process, where members form an online community for growth, a Support Circle.';
  const [sel_value, setSelectedValue] = useState(0);
  const radio_props = [
    {label: 'Please enroll me in a Support Circle', value: 0},
    {label: 'Not at this time', value: 1},
  ];

  const next_press = () => {
    if (sel_value === 0) {
      dispatch(makeAction(SET_SUPPORT_CYCLE, true));
    }
    setScreen('thanks');
  };
  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>
          The MyPwr App consists of 2 equally important parts
        </Text>
        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={center_content}>
        <RadioForm
          style={{height: 100, justifyContent: 'space-around', marginTop: 60}}
          radio_props={radio_props}
          initial={0}
          onPress={setSelectedValue}
          buttonColor={'#AAAAAA'}
          selectedButtonColor={'#BD3150'}
          buttonSize={10}
          buttonOuterSize={20}
          wrapStyle={{paddingTop: 100000}}
        />
      </View>
      <View style={bottom_content}>
        <Button text={'Next'} onPress={next_press} />
      </View>
    </ImageBackground>
  );
};

export default ImportantScreen;
