import React, {useState} from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';
import RadioForm from 'react-native-simple-radio-button';

import {ImageBackground, Text} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {View} from 'react-native-animatable';
import {Button} from '../../../components/Button';
import {useDispatch} from 'react-redux';
import {makeAction} from '../../../store/makeAction';
import {SET_LESSON_PER_DAY} from '../../../types/USER_ACTIONS';

const CommitmentSecondScreen = ({setScreen}) => {
  const dispatch = useDispatch();
  const {
    background,
    title,
    subtitle,
    top_content,
    center_content,
    bottom_content,
  } = styles();
  const [sel_value, setSelValue] = useState(0);
  const radio_props = [
    {label: '1 lesson a day for 21 days.', value: 0},
    {label: 'At my own pace for a month', value: 1},
  ];

  const next_press = () => {
    if (sel_value === 0) {
      dispatch(makeAction(SET_LESSON_PER_DAY, true));
    }
    setScreen('understand');
  };
  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>My Personal Commitment </Text>
        <Text style={subtitle}>
          How would you like to commit to completing the 21-lesson course?{' '}
        </Text>
        <View style={{flex: 0}}>
          <RadioForm
            style={{height: 100, justifyContent: 'space-around', marginTop: 60}}
            radio_props={radio_props}
            initial={sel_value}
            onPress={value => setSelValue(value)}
            buttonColor={'#BD3150'}
            selectedButtonColor={'#BD3150'}
            buttonSize={10}
            buttonOuterSize={20}
          />
        </View>
      </View>
      <View style={bottom_content}>
        <Button text={'Next'} onPress={next_press} />
      </View>
    </ImageBackground>
  );
};

export default CommitmentSecondScreen;
