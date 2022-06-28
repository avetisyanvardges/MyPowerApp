import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Padding, Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';

const Challenge3 = ({navigation}) => {
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
      source={require('../../../../assets/Image/background/lesson3/challengeBg.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={top_content}>
        <Text style={title}>Let’s start with an empowering affirmation!</Text>
        <Text style={subtitle}>Repeat the following 5 times.</Text>
      </View>
      <View style={center_content}>
        <View
          style={{
            width: '100%',
            height: 200,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'rgba(0, 0, 0, 0.13)',
            borderWidth: 0.5,
            borderRadius: 8,
          }}>
          <Text style={challenge_text}>
            Some of this is new, some of this is old, whatever it is, I got
            this!
          </Text>
        </View>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('Voice')} />
      </View>
    </ImageBackground>
  );
};

export default Challenge3;
