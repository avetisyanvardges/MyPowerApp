import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const IntroScreen5 = ({navigation}) => {
  const intro = useSelector(store => store.lesson_5.Intro_Outro.intro);

  const welcomeText =
    'Welcome to lesson 5. Today we are going to warm up those vocal cords and teach you as much we can about the principle of YELL. \n' +
    '\n' +
    'Using your voice is a particularly important self-defense tool. Whether it is a soft and clear “Enough. I don’t want to continue this conversation.” or it is a loud proud and clear “NOOO!!!!” it is good to practice saying what you want, and how you want it, so that when you need, you are ready.  \n' +
    '\n' +
    'Just a suggestion but due to the nature of this material, we suggest you do this lesson in a place you can practice yelling with full power. So, maybe not when you are using public transportation. And if at work, you might want to give security a heads up first! ';

  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="YELL: The Spectrum of Voice"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('EmproweringAffirmation5')}
      sheetHeight="30%"
      resizeMode="cover"
    />
  );
};

export default IntroScreen5;
