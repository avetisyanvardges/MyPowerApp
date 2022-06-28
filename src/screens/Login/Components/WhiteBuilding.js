import React, {useEffect} from 'react';
import Background from '../../../assets/Image/background/builfBg.png';
import Logo from '../../../assets/Image/icon.png';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from '../styles';
import LottieView from 'lottie-react-native';
import {Sizes} from '../../../assets/RootStyles';

const WhiteBildingScreen = ({setScreen}) => {
  const {successBackground, title} = styles();
  useEffect(() => {
    setTimeout(() => {
      setScreen('success');
    }, 5000);
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={Logo} style={{width: 100, height: 100}} />
        <Text style={title}>We are building your profile</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <LottieView
          style={{width: Sizes.size100, height: Sizes.size100}}
          source={require('../../../assets/loader.json')}
          autoPlay
          loop
        />
      </View>
      <View style={{flex: 1}}>
        <ImageBackground style={successBackground} source={Background} />
      </View>
    </View>
  );
};

export default WhiteBildingScreen;
