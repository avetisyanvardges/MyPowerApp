import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../PreVideo/styles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {Sizes} from '../../../../../assets/RootStyles';

const NotSure = ({setScreen}) => {
  const {
    top_content,
    bottom_content,
    title,
    background,
    subtitle,
    skip_content,
  } = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <View style={top_content}>
        <Text style={title}> You answered Not sure... </Text>
        <Text style={subtitle}>Why don't you repeat the exercise?</Text>
      </View>

      <View style={bottom_content}>
        <Button text="Repeat" onPress={() => setScreen('secondTechnique')} />
        <View style={skip_content}>
          <TouchableOpacity
            onPress={() => {
              setScreen('secondTechnique');
            }}>
            <Text style={subtitle}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default NotSure;
