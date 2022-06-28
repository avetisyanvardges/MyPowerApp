import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Padding, Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import Orientation from 'react-native-orientation-locker';

const Welcome_lesson6 = ({navigation}) => {
  const {container, title, subtitle, background} = styles();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={container}>
      <View
        style={{
          height: fullScreen.height,
        }}>
        <View style={{paddingHorizontal: Padding.horizontal}}>
          <Header onPress={() => navigation.goBack()} />
        </View>
        <ImageBackground
          style={background}
          source={require('../../../../assets/Image/background/lesson4/lesson4_3xBg.png')}>
          <View style={{alignItems: 'center'}}>
            <Text style={title}>Welcome to Lesson 6</Text>
            <Text style={subtitle}>RUN: When and How to Leave</Text>
          </View>
          <Image
            source={require('../../../../assets/Image/lessons/lesson6/Lesson6.png')}
            style={{
              width: deviceInfo.small_screen - 40,
              height: deviceInfo.small_screen ? Sizes.size320 : Sizes.size350,
              marginTop: deviceInfo.small_screen ? Sizes.size20 : Sizes.size150,
            }}
            resizeMode="contain"
          />
          <View
            style={{
              height: deviceInfo.ios ? Sizes.size80 : Sizes.size200,
              justifyContent: 'center',
            }}>
            <Button
              text="Start"
              onPress={() => navigation.navigate('IntroScreen6')}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Welcome_lesson6;
