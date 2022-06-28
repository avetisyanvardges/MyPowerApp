import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const IntroScreen3 = ({navigation}) => {
  const intro = useSelector(store => store.lesson_3.Intro_Outro.intro);
  const welcomeText =
    'Everyone is born with basic survival skills.  The goal of this lesson is to show you how you can use those skills, add to them, improve upon them and recognize how they can help you in dangerous situations. Ok, off you go! ';

  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="My Toolbox"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('Challenge3')}
      sheetHeight="30%"
      resizeMode="cover"
    />
  );
};

export default IntroScreen3;
