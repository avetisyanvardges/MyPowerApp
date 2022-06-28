import React, {useEffect} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from '../../PreVideo/styles';
import {fullScreen, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Orientation from 'react-native-orientation-locker';

const FirstTechnique = ({setScreen}) => {
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
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <View style={top_content}>
        <Text style={title}>Time to learn your first technique.</Text>
        <Text style={subtitle}>
          {'When learning any new skill, watch the video as many times as you need. Copy the technique. Do it until it feels natural. \n' +
            '\n' +
            'The first technique is called a knee strike. In reality, your thigh is much more powerful than your knee. Therefore, everytime you do a "knee strike" you will actually be hitting with your thigh.'}
        </Text>
      </View>
      <View style={center_content}>
        <Text style={title}>Remember!</Text>
        <Text style={subtitle}>
          You might want to find a private space where you can make noise during
          these lessons. This symbol will let you know when you will be using
          your loud voice. We hope you learn to enjoy making noise!
        </Text>
        <Image
          source={require('../../../../../assets/Image/lessons/lesson3/Voice.png')}
          style={{
            width: fullScreen.width - 40,
            height: Sizes.size100,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('kneeStrike')} />
      </View>
    </ImageBackground>
  );
};

export default FirstTechnique;
