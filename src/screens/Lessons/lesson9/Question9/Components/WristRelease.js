import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';
import {styles} from '../../Record9/styles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const WristRelease = ({setScreen}) => {
  const navigation = useNavigation();

  const {
    top_content,
    center_content,
    title,
    subtitle,
    background,
    bottom_content,
  } = styles();
  const text =
    'In the following video, you will learn how to do a sequence of the "Mine" Wrist Release, Palm Heel Strike to the face, Knee Strike to the groin, Knee Strike to the head.';
  const backAction = () => {
    setScreen('recordEnd');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson9/Lesson9Bg.png')}>
      <Header onPress={() => setScreen('recordEnd')} />
      <View style={top_content}>
        <Text style={title}>
          Wrist Release - Palm Heel, Knee2Groin, Knee2Head
        </Text>

        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('WristStrike')}
        />
      </View>
    </ImageBackground>
  );
};

export default WristRelease;
