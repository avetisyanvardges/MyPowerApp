import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Challenge = ({navigation}) => {
  const {
    top_content,
    center_content,
    challenge_text,
    title,
    subtitle,
    background,
    bottom_content,
  } = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson1/vector.png')}>
      <Header onPress={() => navigation.goBack()} />

      <View style={top_content}>
        <Text style={title}>Let’s start with an empowering affirmation!</Text>
        <Text style={subtitle}>Repeat the following 5 times.</Text>
      </View>
      <View style={center_content}>
        <View
          style={{
            width: '100%',
            height: deviceInfo.small_screen ? Sizes.size150 : Sizes.size250,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'rgba(0, 0, 0, 0.13)',
            borderWidth: 0.5,
            borderRadius: 8,
            elevation: 5,
          }}>
          <Text style={challenge_text}>
            I am ready to take on a new challenge.
          </Text>
        </View>
      </View>
      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('StartWarmup')}
        />
        <Image
          source={require('../../../../assets/Image/lessons/lesson2/trafic.png')}
          style={{
            width: fullScreen.width - 40,
            height: deviceInfo.small_screen ? Sizes.size270 : Sizes.size300,
            position: 'absolute',
            top: '10%',
            zIndex: -1,
          }}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

export default Challenge;
