import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';

import {styles} from '../../EmproweringAffirmation9/styles';
import Header from '../../../../../components/Header';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const WarmupScreen9 = ({setScreen}) => {
  const {
    top_content,
    challenge_text,
    title,
    subtitle,
    background,
    center_content,
    bottom_content,
  } = styles();
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
    'In the following game you will be looking for a window of opportunity. \n' +
    '\n' +
    'It is similar to the vulnerable targets game you played in lesson 7 but this time the goal is to poke the target as it becomes available. ';
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
        <Text style={title}>Warmup</Text>
        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('BodyParts')} />
      </View>
    </ImageBackground>
  );
};

export default WarmupScreen9;
