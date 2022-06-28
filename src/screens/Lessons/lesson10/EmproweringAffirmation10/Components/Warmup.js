import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';

import {styles} from '../../EmproweringAffirmation10/styles';
import Header from '../../../../../components/Header';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const WarmupScreen9 = ({setScreen}) => {
  const {top_content, title, subtitle, background, bottom_content} = styles();
  const backAction = () => {
    setScreen('affirmation');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const text =
    'Get up and walk around the room. \n' +
    '\n' +
    'First make yourself feel tired then afraid then powerless. \n' +
    '\n' +
    'Stop for a second. \n' +
    '\n' +
    'Take a deep breath. \n' +
    '\n' +
    'Walk around the room again. \n' +
    '\n' +
    'Make yourself feel strong then powerful then fearless. \n' +
    '\n' +
    'Then sit back down.';
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson9/Lesson9Bg.png')}>
      <Header
        onPress={() => {
          setScreen('affirmation');
        }}
        rightIcon={true}
      />
      <View style={top_content}>
        <Text style={title}>Body Language</Text>
        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('warmupNext')} />
      </View>
    </ImageBackground>
  );
};

export default WarmupScreen9;
