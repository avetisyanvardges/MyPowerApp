import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Outro9 = ({navigation}) => {
  const outro = useSelector(state => state.lesson_9.Intro_Outro.outro);
  const welcomeText =
    'Lesson 9 is complete. You improved your ability to think about and find windows of opportunity so you can use your physical tools in the most effective manner. Good job. Next lesson will be learning more about yell. See you then.  ';

  return (
    <VerticalVideo
      videoUrl={outro}
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT9')}
      sheetHeight="25%"
      resizeMode="cover"
    />
  );
};

export default Outro9;
