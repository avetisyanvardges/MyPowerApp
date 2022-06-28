import React from 'react';
import Background from '../../../assets/Image/background/questionBg.png';

import {ImageBackground, Text} from 'react-native';
import {styles} from '../../Login/styles';
import {View} from 'react-native-animatable';
import {Button} from '../../../components/Button';

const EsdScreen = ({setScreen}) => {
  const {background, title, top_content, subtitle, bottom_content} = styles();
  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Empowerment Self Defense{'\n'}(ESD) skills</Text>
        <Text style={subtitle}>
          {'Here is a short introduction to Empowerment Self Defense (ESD).\n \n' +
            'The 21 lessons in this app are based on principles and methods that have been' +
            'proven to reduce violence. Let’s get started!'}
        </Text>
      </View>
      <View style={bottom_content}>
        <Button text={'Next'} onPress={() => setScreen('esdVideo')} />
      </View>
    </ImageBackground>
  );
};

export default EsdScreen;
