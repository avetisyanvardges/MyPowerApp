import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {styles} from '../../Help/styles';
import Header from '../../../../../components/Header';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Warmup_last = () => {
  const {
    background,
    subtitle,
    title,
    top_content,
    center_content,
    bottom_content,
  } = styles();
  const navigation = useNavigation();
  const text =
    '1. Abuser left for a time period\n' +
    '2. New resources become available\n' +
    '3. Kids get older\n' +
    '4. Moving homes\n' +
    '\n' +
    'Finding the window to leave a toxic work environment might look like one of these:\n' +
    '1. Use vacation leave to find new job\n' +
    '2. Say yes to a job offer\n' +
    '3. Learn a new skill or trade for growth\n' +
    '4. Network to find resources to help leave';

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson9/MirrorchallengeBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={center_content}>
        <ScrollView>
          <Text style={subtitle}>
            The window of opportunity can relate to non-physical scenarios as
            well. Finding the Window to leave an abusive relationship….there
            will be certain openings that make it easier to leave for example:
          </Text>
          <Text style={subtitle}>{text}</Text>
        </ScrollView>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('Know9')} />
      </View>
    </ImageBackground>
  );
};

export default Warmup_last;
