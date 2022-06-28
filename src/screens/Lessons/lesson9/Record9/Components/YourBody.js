import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../Record9/styles';
import {Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';

const YourBody = ({setScreen}) => {
  const {
    top_content,
    challenge_text,
    title,
    subtitle,
    background,
    center_content,
    bottom_content,
  } = styles();
  const sub_text =
    'Your right to decide who touches it and when. \n' +
    '\n' +
    'Have you ever said that out loud? \n' +
    '\n' +
    'How about doing that now. ';
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
      <View style={top_content}>
        <Text style={title}>Your body!</Text>
        <Text style={subtitle}>{sub_text}</Text>
        <Text style={title}>
          What about going to the mirror and telling yourself that?
        </Text>
      </View>
      <View style={bottom_content}>
        <Button text="Did it!" onPress={() => setScreen('recordAudio')} />
        <TouchableOpacity
          style={{alignItems: 'center', marginVertical: Sizes.size30}}
          onPress={() => setScreen('recordAudio')}>
          <Text>Not right now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default YourBody;
