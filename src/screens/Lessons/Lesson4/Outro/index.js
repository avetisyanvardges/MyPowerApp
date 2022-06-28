import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Outro = ({navigation}) => {
  const outro = useSelector(state => state.lesson_4.Intro_Outro.outro);
  const welcomeText =
    'You have worked on 3 very important parts of THINK. \n' +
    '\n' +
    'Alertness, awareness and intuition. \n' +
    '\n' +
    'While many dangers can be avoided just by raising our awareness, no matter what, responsibility for the perpetration of violence is in the hands of the person who perpetrates! \n' +
    '\n' +
    'And it is good for us to listen to our intuition, or inner voice, when it is trying to tell us something. \n' +
    '\n' +
    'And, it is important for us to keep our eye on the perpetrator. We can learn a lot by assessing their behaviors and reactions. \n' +
    '\n' +
    'In the next lesson you will dive into the of principle YELL.  ';

  return (
    <VerticalVideo
      videoUrl={outro}
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT4')}
      sheetHeight="25%"
      resizeMode="cover"
    />
  );
};

export default Outro;
