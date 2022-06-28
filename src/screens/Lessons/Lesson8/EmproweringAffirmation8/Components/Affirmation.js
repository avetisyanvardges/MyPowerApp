import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../EmproweringAffirmation8/styles';
import {Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';

const AffirmationScreen = ({setScreen}) => {
  const {container, challenge_text, title, subtitle, background, content} =
    styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={{alignItems: 'center'}}>
        <Text style={title}>Empowering Affirmation</Text>
        <Text style={subtitle}>Repeat the following 5 times.</Text>
      </View>
      <View style={content}>
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
            My story is a success story because I am here to tell it!
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginVertical: deviceInfo.small_screen ? Sizes.size60 : Sizes.size40,
          zIndex: 2,
        }}>
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
