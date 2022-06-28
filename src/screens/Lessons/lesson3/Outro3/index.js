import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Outro3 = ({navigation}) => {
  const outro = useSelector(state => state.lesson_3.Intro_Outro.outro);
  const welcomeText =
    'You now recognize what self defense tools you already have. Next we are going to start introducing each of the five principles, starting with the power of Think!. See you then.';
  return (
    <VerticalVideo
      videoUrl={outro}
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT3')}
      sheetHeight="25%"
      resizeMode="cover"
    />
  );
};

export default Outro3;
