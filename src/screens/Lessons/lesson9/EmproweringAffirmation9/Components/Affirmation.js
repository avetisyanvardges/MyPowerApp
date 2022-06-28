import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../EmproweringAffirmation9/styles';
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
      source={require('../../../../../assets/Image/background/lesson9/Lesson9Bg.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={top_content}>
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
            I look for windows of opportunity and use them.
          </Text>
        </View>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('warmup')} />
      </View>
      {/*<Image*/}
      {/*style={{*/}
      {/*height: Sizes.size440,*/}
      {/*width: Sizes.size229,*/}
      {/*position: 'absolute',*/}
      {/*bottom: 0,*/}
      {/*right: 0,*/}
      {/*zIndex: 0,*/}
      {/*}}*/}
      {/*source={require('../../../../../assets/Image/lessons/lesson4/affirmationImg.png')}*/}
      {/*/>*/}
    </ImageBackground>
  );
};

export default AffirmationScreen;
