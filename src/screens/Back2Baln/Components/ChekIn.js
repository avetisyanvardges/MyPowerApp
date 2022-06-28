import React from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';
import {ImageBackground, Text} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {Button} from '../../../components/Button';
import {View} from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

const CheckIn = ({setScreen}) => {
  const {background, title, subtitle, top_content, bottom_content} = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Check-in Questionnaire</Text>
        <Text style={subtitle}>
          {
            'We will be asking a few questions throughout the learning process. While you will always be given the opportunity to opt out of doing the surveys, recording audio and/or video, we strongly encourage you to participate as fully as it feels comfortable to you.'
          }
        </Text>
        <Text style={subtitle}>
          {
            'This app is based on a course called "The Freedom to Choose" and the goal is to help you analyze situations and make decisions based on your needs and boundaries. '
          }
        </Text>
      </View>
      <View style={bottom_content}>
        <Button
          text={'Next'}
          onPress={() => navigation.navigate('Questionnaire')}
        />
      </View>
    </ImageBackground>
  );
};

export default CheckIn;
