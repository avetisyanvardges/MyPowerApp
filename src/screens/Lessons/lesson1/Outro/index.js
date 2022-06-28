import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const OutroScreen = ({navigation}) => {
  const outro = useSelector(store => store.lesson_1.Intro_Outro.outro);
  const welcomeText =
    'I hope you enjoyed your first lesson. Throughout this course you will encounter these principles, THINK, YELL, RUN, FIGHT, TELL in all different formats. See you in lesson 2! ';

  return (
    <VerticalVideo
      videoUrl={outro}
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT')}
      sheetHeight="30%"
      resizeMode="cover"
    />
  );
};

export default OutroScreen;
