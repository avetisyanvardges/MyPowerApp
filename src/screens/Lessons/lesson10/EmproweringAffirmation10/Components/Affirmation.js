import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../EmproweringAffirmation10/styles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';

const AffirmationScreen = ({setScreen}) => {
  const {
    top_content,
    challenge_text,
    title,
    subtitle,
    background,
    center_content,
    bottom_content,
  } = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson10/leson10Bg.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={center_content}>
        <Text style={title}>Empowering Affirmation</Text>
        <Text style={subtitle}>Repeat the following 5 times.</Text>
      </View>
      <View style={center_content}>
        <View
          style={{
            width: '100%',
            height: deviceInfo.small_screen ? 150 : 200,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'rgba(0, 0, 0, 0.13)',
            borderWidth: 0.5,
            borderRadius: 8,
            zIndex: 1,
          }}>
          <Text style={challenge_text}>
            I have every right to set a boundary. I do not need to apologize.
          </Text>
        </View>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('warmup')} />
      </View>
    </ImageBackground>
  );
};

export default AffirmationScreen;
