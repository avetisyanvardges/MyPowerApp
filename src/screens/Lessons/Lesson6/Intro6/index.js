import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const IntroScreen6 = ({navigation}) => {
  const intro = useSelector(store => store.lesson_6.Intro_Outro.intro);

  const welcomeText =
    'Welcome to Lesson 6. \n' +
    '\n' +
    'When a situation becomes uncomfortable or unsafe. You are not obligated to stay. If you can get away safely, then leave, RUN. \n' +
    '\n' +
    'In this lesson we will help you identify when might be the right time to leave and the types of things that get in people’s way when they want to leave and just can’t find the right words.';

  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="RUN: When and How to Leave"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('EmpoweringAffirmation6')}
      sheetHeight="30%"
      resizeMode="cover"
    />
  );
};

export default IntroScreen6;
