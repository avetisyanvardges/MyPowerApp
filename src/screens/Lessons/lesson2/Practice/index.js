import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useSelector} from 'react-redux';

const PracticeVideo = ({navigation}) => {
  const workout = useSelector(store => store.lesson_2.Workout_room);
  return (
    <VideoPlayer
      source={workout.safety_silent}
      onPress={() => {
        navigation.navigate('RecordVoice');
      }}
      closePress={() => {
        navigation.navigate('RecordVoice');
      }}
    />
  );
};

export default PracticeVideo;
