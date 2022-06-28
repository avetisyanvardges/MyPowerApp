import React, {useEffect} from 'react';
import VideoWithoutController from '../../../../components/VideoComponents/VideoWithoutController';
import {useSelector} from 'react-redux';
import {BackHandler} from 'react-native';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';

const IntroScreen = ({navigation}) => {
  const intro = useSelector(store => store.lesson_1.Intro_Outro.intro);
  const backAction = () => {
    navigation.navigate('Welcome_lesson');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const welcomeText =
    'Hi! Welcome to Lesson 1. In this lesson you will be introduced to the core principles of ESD: \n' +
    '\n' +
    'THINK, YELL, RUN, FIGHT, TELL! \n' +
    '\n' +
    'You may have done each of these at some point in your life, and that’s a great thing. \n' +
    '\n' +
    'Now, we are going to show you how each of these actions is a key step on your empowerment journey. \n' +
    '\n' +
    'Here we go! You got this! ';

  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="The 5 Principles of ESD"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('Warmup', {page: 1})}
      sheetHeight="60%"
      resizeMode="cover"
    />
  );
};

export default IntroScreen;
