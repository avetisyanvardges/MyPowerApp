import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import {styles} from '../../Warmup/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const GoodJob = ({setScreen}) => {
  const {top_content, title, background, bottom_content} = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/bitBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content} />

      <View style={{marginVertical: vScale(100), alignItems: 'center'}}>
        <Image
          source={require('../../../../../assets/Image/lessons/lesson3/goodJobImg.png')}
          style={{width: 100, height: 100, zIndex: 999}}
        />
        <Text style={title}>Good Job!</Text>
      </View>

      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('Know')} />
      </View>
    </ImageBackground>
  );
};

export default GoodJob;
