import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Outro6 = ({navigation}) => {
  const outro = useSelector(state => state.lesson_6.Intro_Outro.outro);
  const welcomeText =
    'Lesson 6 in the bag! \n' +
    'This is the only lesson completely focused on the principle of RUN.  Why? Well, many dangerous situations can be avoided by running away. But, running is not always easy, and not always possible. \n' +
    '\n' +
    'Also, only you will know when and if you can run. What you will see is that RUN begins with the ability to think about and assess a situation,' +
    ' to know what you want, need and feel is right for you, and the courage to disengage from a situation or relationship that is not in your best interest.';

  return (
    <VerticalVideo
      videoUrl={outro}
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT6')}
      sheetHeight="50%"
      resizeMode="cover"
    />
  );
};

export default Outro6;
