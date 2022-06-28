import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from '../../EmproweringAffirmation/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';

const AffirmationScreen = ({setScreen}) => {
  const {container, challenge_text, title, subtitle, background, content} =
    styles();
  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}>
        <View style={{alignItems: 'center'}}>
          <Text style={title}>Empowering Affirmation</Text>
          <Text style={subtitle}>Repeat the following 5 times.</Text>
        </View>
        <View style={content}>
          <View
            style={{
              width: '100%',
              height: deviceInfo.small_screen ? 150 : 150,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'rgba(0, 0, 0, 0.13)',
              borderWidth: 0.5,
              borderRadius: 8,
              zIndex: 1,
              paddingHorizontal: 20,
            }}>
            <Text style={challenge_text}>I have the courage to say “No.”</Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: deviceInfo.small_screen
              ? Sizes.size70
              : Sizes.size40,
            flex: 1,
            justifyContent: 'flex-end',
            zIndex: 999,
          }}>
          <Button text="Next" onPress={() => setScreen('warmup5')} />
        </View>
        <Image
          style={{
            height: Sizes.size440,
            width: Sizes.size350,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          source={require('../../../../../assets/Image/lessons/lesson5/affirationImg.png')}
        />
      </ImageBackground>
    </View>
  );
};

export default AffirmationScreen;
