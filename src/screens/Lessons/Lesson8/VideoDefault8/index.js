import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const VideoDefault8 = () => {
  const muscle = useSelector(store => store.lesson_8.Non_exercise.muscle);

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Embarrassment Muscle'}
      closePress={() => navigation.navigate('RecordSelf8')}
      backPress={() => navigation.navigate('RecordSelf8')}
      onPress={() => navigation.navigate('RecordSelf8')}
      source={muscle}
      sheet_text={'Now you try it! '}
    />
  );
};

export default VideoDefault8;
