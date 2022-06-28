import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Intro = ({navigation}) => {
  const intro = useSelector(store => store.lesson_7.Intro_Outro.intro);

  const welcomeText =
    'Welcome to lesson 7. Your first official lesson on FIGHT. \n' +
    '\n' +
    'We are going to take the strikes you have learned in previous lessons and make them better and stronger.\n' +
    '\n' +
    'You are also going to identify your body’s natural self-defense tools and an attacker’s vulnerable targets.';

  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="FIGHT: Physical Responses to Violence"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('EmpoweringAffirmation')}
      sheetHeight="40%"
      resizeMode="cover"
    />
  );
};

export default Intro;
