import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Welcome_lesson2 = ({navigation}) => {
  const {
    top_content,
    title,
    subtitle,
    background,
    bottom_content,
    center_content,
  } = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson1/vector.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={top_content}>
        <Text style={title}>Welcome to Lesson 2</Text>
        <Text style={subtitle}>Traffic Light for Safer Living</Text>
      </View>
      <View style={center_content}>
        <Image
          source={require('../../../../assets/Image/lessons/lesson2/traficLight.png')}
          style={{
            width: fullScreen.width - 40,
            height: deviceInfo.small_screen ? Sizes.size300 : Sizes.size335,
            marginTop: deviceInfo.small_screen ? Sizes.size10 : Sizes.size100,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={bottom_content}>
        <Button
          text="Start"
          onPress={() => navigation.navigate('IntroScreen2')}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome_lesson2;
