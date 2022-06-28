import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Background from '../../../assets/Image/background/questionBg.png';
import {styles} from '../styles';
import {Button} from '../../../components/Button';
import * as RootNavigation from '../../../RootNavigation';

const YesScreen = () => {
  const {
    container,
    top_content,
    background,
    bottom_content,
    title,
    subtitle,
    sub_title,
    center_content,
  } = styles();

  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Are you feeling safe?</Text>
        <Text style={subtitle}>You answered YES.</Text>
        <Text style={sub_title}>
          We are glad to hear that. If this changes, let us know.{' '}
        </Text>
      </View>
      <View style={center_content}>
        <View style={bottom_content}>
          <Button
            text={'Ok, Got it'}
            onPress={() => RootNavigation.navigate('ExperienceQuestionData')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default YesScreen;
