import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useSelector} from 'react-redux';

const FightIsAbout = ({navigation}) => {
  const room_belly_breathing = useSelector(
    state => state.lesson_3.Workout_room.belly_breathing,
  );
  return (
    <VideoPlayer
      closePress={() => navigation.navigate('PreVideo3')}
      backPress={() => navigation.navigate('PreVideo3')}
      onPress={() => navigation.navigate('PreVideo3')}
      source={room_belly_breathing}
      sheet_text={
        'Hope you got it! If not, you can always go back and give it another go.'
      }
    />
  );
};

export default FightIsAbout;
