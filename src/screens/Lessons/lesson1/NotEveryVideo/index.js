import React, {useEffect} from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useSelector} from 'react-redux';
import {BackHandler} from 'react-native';

const NotEveryVideo = ({navigation}) => {
  const Non_exercise = useSelector(store => store.lesson_1.Non_exercise);
  const backAction = () => {
    navigation.navigate('EXPERT');
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
    <VideoPlayer
      source={Non_exercise.not_every_skill}
      backPress={() => navigation.navigate('FAQ', {screen: 'know'})}
      closePress={() => navigation.navigate('EXPERT')}
      onPress={() => navigation.navigate('EXPERT')}
      video_name={' Not Every Skill'}
      description={
        'Not every skill -- verbal, physical or other -- will feel comfortable or accessible to everyone. \n' +
        '\n' +
        'Your body is the only thing you have with you everywhere you go, and therefore, it is the most important thing to learn how to use for self-defense. \n' +
        '\n' +
        'In addition, only you know your body and what it is capable of doing. If there is a technique that you need to modify for your body, do it!  If you’d like help thinking about how to modify a technique, feel free to ask us or post in the community space.'
      }
    />
  );
};

export default NotEveryVideo;
