import React, {useEffect} from 'react';
import VideoWithoutController from '../../../../components/VideoComponents/VideoWithoutController';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';
import {BackHandler} from 'react-native';

const Video_init = ({navigation, route}) => {
  const Non_exercise = useSelector(store => store.lesson_1.Non_exercise);
  const backAction = () => {
    navigation.navigate('Warmup');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const screens = {
    init: (
      <VerticalVideo
        videoUrl={Non_exercise.TYRFT}
        resizeMode="cover"
        closePress={() => {
          navigation.navigate('Warmup_2');
        }}
        progressbar={true}
      />
    ),
    louder: (
      <VideoWithoutController
        videoUrl={Non_exercise.louder}
        pause={true}
        resizeMode="cover"
        onEnd={() => {
          navigation.navigate('Warmup_6');
        }}
      />
    ),
    softer: (
      <VideoWithoutController
        videoUrl={Non_exercise.softer}
        pause={true}
        resizeMode="cover"
        onEnd={() => {
          navigation.navigate('Warmup_5');
        }}
      />
    ),
  };

  return screens[route.params.screen];
};

export default Video_init;
