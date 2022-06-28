import React, {useEffect} from 'react';
import Background from '../../../assets/Image/background/questionBg.png';
import Success from '../../../assets/Image/background/successImage.png';

import {Image, ImageBackground, Text} from 'react-native';
import {styles} from '../../Login/styles';
import {hScale, vScale} from '../../../assets/RootStyles/Scale';
import {View} from 'react-native-animatable';

const SuccessScreen = ({setScreen}) => {
  const {background, successTitle} = styles();
  useEffect(() => {
    setTimeout(() => {
      setScreen('esd');
    }, 5000);
  }, []);
  return (
    <ImageBackground style={background} source={Background}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 200,
        }}>
        <Image
          source={Success}
          resizeMode={'contain'}
          style={{width: hScale(260), height: vScale(220)}}
        />
        <Text style={successTitle}>You’re In!</Text>
      </View>
    </ImageBackground>
  );
};

export default SuccessScreen;
