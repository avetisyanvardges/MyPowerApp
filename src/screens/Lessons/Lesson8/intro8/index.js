import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const IntroScreen8 = ({navigation}) => {
  const intro = useSelector(store => store.lesson_8.Intro_Outro.intro);
  const welcomeText =
    'Welcome back. Lesson 8 is your first lesson about TELL.\n' +
    ' \n' +
    'TELL means not only reporting to the authorities, which you may or may not wish to do. \n' +
    '\n' +
    'TELL is about sharing your experiences with people you have determined to be your support group. \n' +
    '\n' +
    'By sharing your story you can get support, release emotions, and many times ground yourself. \n' +
    '\n' +
    'Whatever has happened to you, you don’t have to bear it alone! \n' +
    '\n' +
    'And if you don’t have that special someone? Let us know.   ';

  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="TELL: Sharing, Releasing, and Grounding"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('EmproweringAffirmation8')}
      sheetHeight="50%"
      resizeMode="cover"
    />
  );
};

export default IntroScreen8;
