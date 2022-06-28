import React, {useEffect} from 'react';
import {BackHandler, Image, ImageBackground, Text, View} from 'react-native';
import {styles} from '../../EmproweringAffirmation/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';

const AffirmationScreen = ({setScreen}) => {
  const {top_content,center_content, bottom_content,challenge_text, title, subtitle, background, content} =
    styles();
    const backAction = () => {
        navigation.goBack()
        return true;
    };
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
  return (
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson4/affirmationBg3x.png')}>
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
              I have the ability to make my own choices and I listen to my inner
              voice.
            </Text>
          </View>
        </View>
        <View
          style={bottom_content}>
          <Button text="Next" onPress={() => setScreen('warmup')} />
        </View>
        <Image
          style={{
            height:deviceInfo.small_screen? Sizes.size490:Sizes.size440,
            width: deviceInfo.small_screen? Sizes.size235:Sizes.size230,
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
          source={require('../../../../../assets/Image/lessons/lesson4/affirmationImg.png')}
        />
      </ImageBackground>
  );
};

export default AffirmationScreen;
