import React, {useEffect} from 'react';
import {Image, ImageBackground, PixelRatio, Text, View} from 'react-native';
import {styles} from '../../PreVideo/styles';
import {fullScreen, Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';
import Orientation from 'react-native-orientation-locker';

const SafetyStance3 = ({setScreen}) => {
  const {
    top_content,
    center_content,
    bottom_content,
    title,
    background,
    subtitle,
  } = styles();
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  console.log(Sizes.size100, PixelRatio.get());
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <View style={top_content}>
        <Text style={title}>Time for practicing your loud voice. </Text>
        <Image
          source={require('../../../../../assets/Image/lessons/lesson3/Voice.png')}
          style={{
            width: fullScreen.width - 40,
            height: Sizes.size100,
            marginTop: Sizes.size20,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={center_content}>
        <Text style={title}>Remember!</Text>
        <Text style={subtitle}>
          {'You might want to find a private space where you can make noise during these lessons. \n' +
            '\n' +
            'This symbol will let you know when you will be using your loud voice. \n' +
            '\n' +
            'We hope you learn to enjoy making noise!'}
        </Text>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('powerfullStrike')} />
      </View>
    </ImageBackground>
  );
};

export default SafetyStance3;
