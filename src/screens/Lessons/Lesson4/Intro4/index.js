import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const IntroScreen4 = ({navigation}) => {
  const intro = useSelector(store => store.lesson_4.Intro_Outro.intro);

  const welcomeText =
    'The first principle of ESD is THINK. This lesson will focus on alertness, awareness and intuition, on being aware of your surroundings and listening to your inner voice. THINK is about paying attention to what is happening without, as well as within.';

  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="THINK: Alertness, Awareness, Intuition"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('EmproweringAffirmation')}
      sheetHeight="30%"
      resizeMode="cover"
    />
  );
};

export default IntroScreen4;
