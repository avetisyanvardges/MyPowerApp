import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ElbowStrike = () => {
  const elbow_rear = useSelector(
    store => store.lesson_3.Workout_room.elbow_rear,
  );
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Elbow Strike - Rear Low'}
      closePress={() =>
        navigation.navigate('RecordSelf3', {screen: 'ElbowStrike'})
      }
      backPress={() =>
        navigation.navigate('RecordSelf3', {screen: 'ElbowStrike'})
      }
      onPress={() =>
        navigation.navigate('RecordSelf3', {screen: 'ElbowStrike'})
      }
      source={elbow_rear}
      sheet_text={'Your turn!'}
      description={
        'Stretch your arm out in front of you.\n' +
        '\n' +
        'Pull it straight back and turn your body slightly in the direction on the strike.\n' +
        '\n' +
        'Hit with the area right above your elbow. Don’t forget a nice loud "No!"'
      }
    />
  );
};

export default ElbowStrike;
