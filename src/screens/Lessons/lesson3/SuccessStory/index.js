import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const SuccessStory10 = () => {
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
    'When I was much younger, but old enough to be left alone, my father’s friend came to my house when I was the only one home. \n' +
    '\n' +
    'He came inside and to my surprise scooped me up in his arms. \n' +
    '\n' +
    "I don't remember thinking about what I should do, I just did it. \n" +
    '\n' +
    'I spit in his face. \n' +
    '\n' +
    'He immediately put me down, turned, and left. \n' +
    '\n' +
    'I know I did the right thing.';
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={background}
        source={require('../../../../assets/Image/lessons/lesson3/lesson3Story.png')}>
        <Header
          onPress={() => navigation.goBack()}
          back_text_style={{color: '#fff'}}
        />
        <View style={top_content}>
          <Text style={title}>Not That Kind of Surprise!</Text>
        </View>
      </ImageBackground>
      <View style={center_content}>
        <Text style={sub_title}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('Outro3')} />
      </View>
    </View>
  );
};

export default SuccessStory10;
