import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Outro = ({navigation}) => {
  const outro = useSelector(state => state.lesson_7.Intro_Outro.outro);
  const welcomeText =
    'You just completed your first official FIGHT lesson. Here is hoping that you feel really good about that. If not, know that you can repeat this lesson until you are feeling comfortable with the material. In this lesson you learned self-defense combinations, found your body’s natural self-defense tools and identified where to aim when using them and you have now completed one-third of the course! Great job.';

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
