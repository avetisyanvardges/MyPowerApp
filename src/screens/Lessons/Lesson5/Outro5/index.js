import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Outro5 = ({navigation}) => {
  const outro = useSelector(state => state.lesson_5.Intro_Outro.outro);
  const welcomeText =
    'You have completed your first lesson on YELL. \n' +
    '\n' +
    'You started learning how to set strong verbal boundaries. \n' +
    '\n' +
    'One thing I can share with you is that the remarkable thing about boundaries is that they are addictive. \n' +
    '\n' +
    'Once you start setting them, you can’t stop! And does that feel good! \n' +
    '\n' +
    'Next lesson you will learn about the principle of RUN.';

  return (
    <VerticalVideo
      videoUrl={outro}
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT5')}
      sheetHeight="25%"
      resizeMode="cover"
    />
  );
};

export default Outro5;
