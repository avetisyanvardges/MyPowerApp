import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';

const StartWarmup = () => {
  const {container, title, subtitle, background, top_content, bottom_content} =
    styles();
  const text =
    'And it is also true that every BODY does self-defense differently. This means that some of the exercises in the MyPwr App may not be right for you, and that is ok. \n' +
    '\n' +
    'If you’d like help figuring out how to adapt this exercise, or any other, to your body, feel free to reach out to one of our ESD Professionals through MyCircles and they will be thrilled to help out.';
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson1/vector.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={top_content}>
        <Text style={title}>Everybody does self-defense differently...</Text>
        <Text style={subtitle}>{text}</Text>
      </View>

      <View style={bottom_content}>
        <Button
          text="Start the warmup"
          onPress={() => navigation.navigate('SafetyStance')}
        />
        <Image
          source={require('../../../../assets/Image/lessons/lesson2/greenTraffic.png')}
          style={{
            width: fullScreen.width - 40,
            height: deviceInfo.small_screen ? Sizes.size250 : Sizes.size300,
            position: 'absolute',
            top: deviceInfo.small_screen ? '32%' : '33%',
            zIndex: -1,
          }}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

export default StartWarmup;
