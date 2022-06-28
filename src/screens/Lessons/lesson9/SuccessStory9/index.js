import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const SuccessStory9 = () => {
  const {
    center_content,
    title,
    top_content,
    sub_title,
    bottom_content,
    background,
  } = styles();
  const navigation = useNavigation();
  const text =
    'I had a really good job, with a great team and a good salary. The boss, however, had a reputation for yelling at employees. One day my team was in a meeting with him, and he spoke to me really inappropriately. \n' +
    '\n' +
    'When we walked out of the meeting my co-worker said, "I wouldn\'t let anyone talk to me like that." \n' +
    'I realized I could not let myself be abused at work. \n' +
    '\n' +
    'That night I applied for three jobs, and a week later I started at a much better company, with a higher salary.';
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={background}
        source={require('../../../../assets/Image/background/lesson9/lesson9success.png')}>
        <View style={top_content}>
          <Header onPress={() => navigation.goBack()} />
          <Text style={title}>I Promise I will Tell!</Text>
        </View>
      </ImageBackground>
      <View style={center_content}>
        <Text style={sub_title}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('Outro9')} />
      </View>
    </View>
  );
};

export default SuccessStory9;
