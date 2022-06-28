import React from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';

import {ImageBackground, Text} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {View} from 'react-native-animatable';
import {Button} from '../../../components/Button';

const ThanksScreen = ({setScreen}) => {
  const {background, title, subtitle, top_content, bottom_content} = styles();
  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Thank you!</Text>
        <Text style={subtitle}>
          Now that we know you better, we’ll do our best to customize content
          just for you.{' '}
        </Text>
        <Text style={subtitle}>
          Don’t worry. We will never share this information outside the app.
        </Text>
      </View>
      <View style={bottom_content}>
        <Button text={'Next'} onPress={() => setScreen('white')} />
      </View>
    </ImageBackground>
  );
};

export default ThanksScreen;
