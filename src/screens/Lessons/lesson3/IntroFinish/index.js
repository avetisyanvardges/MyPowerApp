import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const IntroFinish = ({navigation}) => {
  const outro = useSelector(state => state.lesson_3.Intro_Outro.outro);
  const welcomeText =
    'You now recognize what self defense tools you already have. Next we are going to start introducing each of the five principles, starting with the power of Think!. See you then.';

  return (
    <VerticalVideo
      videoUrl={outro}
      sheetTitle="Wow. You have completed 3 full lessons"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT3')}
      sheetHeight="30%"
      resizeMode="cover"
    />
  );
};

export default IntroFinish;
