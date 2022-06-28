import React from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const IntroScreen9 = ({navigation}) => {
  const intro = useSelector(store => store.lesson_9.Intro_Outro.intro);
  const welcomeText =
    'Welcome to lesson 9. \n' +
    '\n' +
    'Experiencing a physical assault is scary. It is also scary just thinking about it. While we all would want to react immediately, many of us live with the fear of freezing. \n' +
    '\n' +
    'Practicing what can be done in a difficult situation is one of the best ways to reduce this fear. \n' +
    '\n' +
    'In this lesson, we will learn a few more physical defense skills. An important concept to keep in mind is that physical defense is most effective when we find an opening. We call them windows of opportunity. In this lesson we will work on identifying windows of opportunity and what needs to be done when you find them.\n' +
    '\n' +
    ' Ready, set, go. ';
  return (
    <VerticalVideo
      videoUrl={intro}
      sheetTitle="FIGHT: Windows of Opportunity"
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('EmproweringAffirmation9')}
      sheetHeight="30%"
      resizeMode="cover"
    />
  );
};

export default IntroScreen9;
