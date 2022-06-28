import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import Orientation from 'react-native-orientation-locker';

const Welcome_lesson3 = ({navigation}) => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  const {
    top_content,
    bottom_content,
    title,
    subtitle,
    background,
    center_content,
  } = styles();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson3/lesson3Bg.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={top_content}>
        <View style={{alignItems: 'center'}}>
          <Text style={title}>Welcome to Lesson 3</Text>
          <Text style={subtitle}>Building on the tools you already have</Text>
        </View>
      </View>
      <View style={center_content}>
        <Image
          source={require('../../../../assets/Image/lessons/lesson3/lesson3img.png')}
          style={{
            width: fullScreen.width - 40,
            height: deviceInfo.small_screen ? Sizes.size300 : Sizes.size350,
            marginTop: Sizes.size50,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={bottom_content}>
        <Button
          text="Start"
          onPress={() => navigation.navigate('IntroScreen3')}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome_lesson3;
