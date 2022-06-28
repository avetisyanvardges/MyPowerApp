import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Outro10 = ({navigation}) => {
  const outro = useSelector(state => state.lesson_10.Intro_Outro.outro);
  const welcomeText =
    'You completed lesson 10. Amazing. \n' +
    'You used your voice and body language more assertively and added some strong boundary setting phrases to your arsenal. Next lesson you will develop some more fight skills. See you then. ';

  return (
    <VerticalVideo
      videoUrl={outro}
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT10')}
      sheetHeight="25%"
      resizeMode="cover"
    />
  );
};

export default Outro10;
