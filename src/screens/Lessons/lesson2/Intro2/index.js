import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const IntroScreen2 = ({navigation}) => {
  const intro = useSelector(store => store.lesson_2.Intro_Outro.intro);
  const welcomeText =
    'Welcome back. Your body has the ability to tell you when something isn’t ok. In this lesson the traffic light is going to help you listen to the instincts that you already have. The traffic light helps you identify levels of danger. You got this. Let’s go.';

  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="Traffic Light for Safer Living"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('Challenge')}
      sheetHeight="30%"
      resizeMode="cover"
    />
  );
};

export default IntroScreen2;
