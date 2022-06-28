import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../EmpoweringAffirmation/styles';
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
              height: deviceInfo.small_screen ? 220 : 250,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'rgba(0, 0, 0, 0.13)',
              borderWidth: 0.5,
              borderRadius: 8,
              zIndex: 1,
              paddingHorizontal: 20,
            }}>
            <Text style={challenge_text}>
              I am learning to trust myself to know if a situation is safe and I
              have the power to leave if it isn’t.
            </Text>
          </View>
        </View>
        <View
          style={{
            height: deviceInfo.ios ? Sizes.size80 : Sizes.size200,
            justifyContent: 'flex-end',
            zIndex: 1,
          }}>
          <Button text="Next" onPress={() => setScreen('warmupInstructions')} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default AffirmationScreen;
