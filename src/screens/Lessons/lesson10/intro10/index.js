import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const IntroScreen10 = ({navigation}) => {
  const intro = useSelector(store => store.lesson_10.Intro_Outro.intro);
  const welcomeText =
    'Welcome to lesson 10. This lesson is about yell. Using your voice and body language assertively can help you set and enforce clear boundaries. And while being assertive or not, at any given point in time, is a choice, and no matter whether you are or aren’t, no one should abuse you, it is a great tool to develop. \n' +
    '\n' +
    'Also, using our voice forces us to breathe, can help us break out of a freeze response, puts more power behind our strikes and can startle the attacker. \n' +
    '\n' +
    'More than one success story has been told where using the power of YELL alerted others so that they helped intervene. The more you exercise your assertiveness muscle, the more you connect to your inner roar, the better your chance of being able to use it when you need it. Let’s get started. ';
  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="YELL: Body Language and Assertiveness"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('EmpoweringAffirmation10')}
      sheetHeight="30%"
      resizeMode="cover"
    />
  );
};

export default IntroScreen10;
