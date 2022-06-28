import React from 'react';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';

const VideoRecord10 = ({navigation, route}) => {
  const video = useSelector(store => store.lesson_10.Non_exercise.phrases);
  return (
    <VideoCamera
      closePress={() => navigation.navigate('Yes_No10')}
      source={video}
      backPress={() => navigation.goBack()}
      sheet_text={'Nice!'}
      onPress={() => navigation.navigate('Yes_No10')}
    />
  );
};

export default VideoRecord10;
