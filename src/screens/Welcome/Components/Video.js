import React, {useEffect} from 'react';
import * as RootNavigation from '../../../RootNavigation';
import VerticalVideo from '../../../components/VideoComponents/VerticalVideo';
import {BackHandler} from 'react-native';

const VideoScreen = ({setScreen}) => {
  const welcomeText =
    'We’re so glad you joined us!\n' +
    'Congratulations on making the brave move to meet your most powerful self.\n \n' +
    'MyPwrApp is comprised of 21 compact,interactive and dynamic lessons designed to introduce you to basic Empowerment Self Defense so you can feel safer in the world.\n \n\n' +
    'We will help you deepen your understanding of what it feels like\n' +
    'to be empowered, and translate that feeling into action.\n Over\n' +
    'the course of the next 21 lessons, we will introduce you to the\n' +
    'five principles of empowerment self-defense, and include physical,\n' +
    'mental and verbal techniques and exercises.\n \n What I can tell\n' +
    'you is that the more you put into this course, the more you will\n' +
    'get out of it. Yes, watch the lessons and also, make your own! Read\n' +
    'the stories, and tell yours too. \n There will be many\n' +
    'opportunities to create your personal safety system. Take the time\n' +
    'to dive in. \n So, let’s get started. You got this!';
  const backAction = () => {
    console.log('sss');
    setScreen('welcome');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <VerticalVideo
      videoUrl={
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/OnBoarding%2Fvideo_00.mp4?alt=media&token=e080b34e-3e44-4914-a318-4663275e607f'
      }
      sheetTitle="Welcome to MyPwr!"
      sheetContent={welcomeText}
      skipPress={() => RootNavigation.navigate('QuestionData')}
      showMuted={true}
      sheetHeight="50%"
      resizeMode="cover"
    />
  );
};

export default VideoScreen;
