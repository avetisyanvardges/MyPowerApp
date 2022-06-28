import React from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';

import {ImageBackground, Text} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {View} from 'react-native-animatable';
import {Button} from '../../../components/Button';

const UnderstandScreen = ({setScreen}) => {
  const {background, title, subtitle, top_content, bottom_content} = styles();
  const text =
    'that the material discussed in the MyPwr App can be emotionally difficult. We will challenge you to assess your feelings and your behavior, educating you to think and act differently in the future.\n' +
    '\n' +
    'To help you process your emotions, there will be 24 hours between lessons. ';
  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>We understand. . .</Text>
        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button text={'Next'} onPress={() => setScreen('time')} />
      </View>
    </ImageBackground>
  );
};

export default UnderstandScreen;
