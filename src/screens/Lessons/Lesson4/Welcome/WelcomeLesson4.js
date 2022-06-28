import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Padding, Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import Orientation from 'react-native-orientation-locker';

const Welcome_lesson4 = ({navigation}) => {
  const {
    top_content,
    center_content,
    bottom_content,
    title,
    subtitle,
    background,
  } = styles();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson4/lesson4_3xBg.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={top_content}>
        <Text style={title}>Welcome to Lesson 4</Text>
        <Text style={subtitle}>THINK: Alertness, Awareness, Intuition</Text>
      </View>
      <View style={center_content}>
        <Image
          source={require('../../../../assets/Image/lessons/lesson4/Lesson4.png')}
          style={{
            width: deviceInfo.small_screen - 40,
            height: deviceInfo.small_screen ? Sizes.size300 : Sizes.size350,
            marginTop: deviceInfo.small_screen ? Sizes.size20 : Sizes.size100,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={bottom_content}>
        <Button
          text="Start"
          onPress={() => navigation.navigate('IntroScreen4')}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome_lesson4;
