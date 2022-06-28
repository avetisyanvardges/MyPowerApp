import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';

import {styles} from '../../EmproweringAffirmation10/styles';
import Header from '../../../../../components/Header';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const WarmupNext = ({setScreen}) => {
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
    'Did you move your shoulders back and straightened your body, your eyes looked forward?\n' +
    '\n' +
    'Discover your ability to "put on" a strong posture, that projects self-confidence, even if that might not be what you feel inside at the moment. \n' +
    '\n' +
    'Believe it or not, once you do this, it will only take a few minutes for you to feel more courageous and self-assured.\n' +
    '\n' +
    'That is the magic of practicing power poses! ';
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson10/leson10Bg.png')}>
      <Header
        onPress={() => {
          setScreen('affirmation');
        }}
        rightIcon={true}
      />
      <View style={top_content}>
        <Text style={title}>
          Notice the difference in your body when you walked strong as opposed
          to weak.{' '}
        </Text>
        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button
          text="Pick-a-pose"
          onPress={() => navigation.navigate('PowerPoses10')}
        />
      </View>
    </ImageBackground>
  );
};

export default WarmupNext;
