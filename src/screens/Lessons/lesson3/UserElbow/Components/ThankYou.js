import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import {styles} from '../../UserElbow/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ThankYou = ({setScreen}) => {
  const {
    bottom_content,
    subtitle,
    title,
    background,
    center_content,
    top_content,
  } = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/bitBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content} />

      <View style={center_content}>
        <Image
          source={require('../../../../../assets/Image/lessons/lesson3/goodJobImg.png')}
          style={{width: 100, height: 100, zIndex: 999}}
        />
        <Text style={title}>Thank you!</Text>
        <Text style={subtitle}>
          Thanks for reaching out. Your input helps us improve this app.{' '}
        </Text>
      </View>

      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => {
            navigation.navigate('BitCaution');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default ThankYou;
