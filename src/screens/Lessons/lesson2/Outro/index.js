import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Outro = ({navigation}) => {
  const outro = useSelector(state => state.lesson_2.Intro_Outro.outro);
  const welcomeText =
    'You finished lesson 2. Good job!You’ve taken an important step in learning to listen to your inner voice.  Next you will see how powerful you already are. See you in lesson 3.';

  return (
    <VerticalVideo
      videoUrl={outro}
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT')}
      sheetHeight="25%"
      resizeMode="cover"
    />
  );
};

export default Outro;
