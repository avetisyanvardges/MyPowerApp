import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Welcome9 = ({navigation}) => {
  const {
    sub_header,
    title,
    subtitle,
    background,
    top_content,
    center_content,
    bottom_content,
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
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} />
      {/*<ScrollView scrollEnabled={fullScreen.height < 800 ? true : false}>*/}
      <View style={top_content}>
        <Text style={title}>Welcome to Lesson 9</Text>
        <Text style={subtitle}>TELL: Sharing, Releasing, and Grounding</Text>
      </View>
      <View style={center_content}>
        <Image
          source={require('../../../../assets/Image/background/lesson9/welcomeImg.png')}
          style={{
            width: fullScreen.width - 40,
            height: deviceInfo.small_screen ? Sizes.size300 : Sizes.size350,
          }}
          resizeMode="contain"
        />
      </View>

      {/*</ScrollView>*/}
      <View style={bottom_content}>
        <Button
          text="Start"
          onPress={() => navigation.navigate('IntroScreen9')}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome9;
