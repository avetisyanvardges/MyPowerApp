import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const Outro8 = ({navigation}) => {
  const outro = useSelector(state => state.lesson_8.Intro_Outro.outro);
  const welcomeText =
    'Great job, you completed the first lesson on tell. Tell is a tool that is always available. It is never too late to tell, even about something that happened years ago. Can you think of something you want to share and who you would like to share it with? Next lesson we take a deeper look into think. See you then. ';

  return (
    <VerticalVideo
      videoUrl={outro}
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('ACHIEVEMENT8')}
      sheetHeight="35%"
      resizeMode="cover"
    />
  );
};

export default Outro8;
