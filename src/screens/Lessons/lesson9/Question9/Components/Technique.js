import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from '../../Record9/styles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Technique = ({setScreen}) => {
  const navigation = useNavigation();

  const {
    top_content,
    center_content,
    text_content,
    subtitle,
    background,
    bottom_content,
  } = styles();
  const text =
    'In this technique, there is an action and a clear reaction. \n' +
    '\n' +
    'While retrieving your arm is not always the most important thing to do, as strange as that might sound, this technique works. \n' +
    '\n' +
    'If you are worried that they are bigger, stronger or more committed to holding on to you, try a good kick to the shin before doing the wrist release. \n' +
    '\n' +
    'Nothing like a bit of pain to get their mind off of what they are holding onto.\n' +
    '\n' +
    "Just remember, the pain, or the surprise of the pain, doesn't last that long, so commit to doing the release as soon after the kick as possible. I mean, immediately.\n" +
    '\n' +
    'This is a great example of why we tell you not to practice on people you know and love. ';
  const backAction = () => {
    setScreen('recordEnd');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson9/Lesson9Bg.png')}>
      <Header onPress={() => setScreen('recordEnd')} />
      <ScrollView>
        <View style={text_content}>
          <Text style={subtitle}>{text}</Text>
        </View>
        <View style={bottom_content}>
          <Button text="Next" onPress={() => setScreen('wrist')} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Technique;
