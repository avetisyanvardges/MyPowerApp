import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Welcome10 = ({navigation}) => {
  const {
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
      source={require('../../../../assets/Image/background/lesson10/leson10Bg.png')}>
      <Header onPress={() => navigation.goBack()} />
      {/*<ScrollView scrollEnabled={fullScreen.height < 800 ? true : false}>*/}
      <View style={top_content}>
        <Text style={title}>Welcome to Lesson 10</Text>
        <Text style={subtitle}>YELL - Body Language and Assertiveness</Text>
      </View>
      <View style={center_content}>
        <Image
          source={require('../../../../assets/Image/background/lesson10/welcome10.png')}
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
          onPress={() => navigation.navigate('IntroScreen10')}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome10;
