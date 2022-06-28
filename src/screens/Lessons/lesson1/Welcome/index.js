import React, {useEffect} from 'react';
import {BackHandler, Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Sizes} from '../../../../assets/RootStyles';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {Button} from '../../../../components/Button';
import Header from '../components/header';
import {deviceInfo} from '../../../../assets/deviceInfo';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome_lesson = ({navigation}) => {
  const {
    top_content,
    bottom_content,
    title,
    subtitle,
    background,
    center_content,
  } = styles();
  const backAction = () => {
    navigation.navigate('Welcome');
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
      source={require('../../../../assets/Image/background/lesson1/vector.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={top_content}>
        <Text style={title}>Welcome to Lesson 1</Text>
        <Text style={subtitle}>The 5 Principles of ESD</Text>
      </View>
      <View style={center_content}>
        <Image
          source={require('../../../../assets/Image/lessons/lesson1/principes.png')}
          style={{
            width: fullScreen.width - 40,
            height: deviceInfo.small_screen ? Sizes.size300 : Sizes.size325,
            marginTop: vScale(40),
          }}
          resizeMode="contain"
        />
      </View>
      <View style={bottom_content}>
        <Button
          text="Start"
          onPress={() => navigation.navigate('IntroScreen')}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome_lesson;
