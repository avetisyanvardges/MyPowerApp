import React from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';

import {ImageBackground, Text} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {View} from 'react-native-animatable';
import {Button} from '../../../components/Button';

const CommitmenFirstScreen = ({setScreen}) => {
  const {background, title, subtitle, top_content, bottom_content} = styles();
  const text =
    'Many of us start things with enthusiasm, but don’t always find the energy to reach the finish line. \n' +
    '\n' +
    'We are asking you to make a commitment to yourself, so you get the maximum benefit from the process.';
  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Personal Commitment </Text>
        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button text={'Next'} onPress={() => setScreen('commintment_second')} />
      </View>
    </ImageBackground>
  );
};

export default CommitmenFirstScreen;
