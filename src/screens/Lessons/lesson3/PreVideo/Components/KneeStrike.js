import React from 'react';
import VideoPlayer from '../../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const KneeStrike = () => {
  const knee_strike = useSelector(
    store => store.lesson_3.Workout_room.knee_strike,
  );
  const navigation = useNavigation();

  return (
    <VideoPlayer
      closePress={() =>
        navigation.navigate('RecordSelf3', {screen: 'kneeStrike1'})
      }
      backPress={() =>
        navigation.navigate('RecordSelf3', {screen: 'kneeStrike1'})
      }
      onPress={() =>
        navigation.navigate('RecordSelf3', {screen: 'kneeStrike1'})
      }
      source={knee_strike}
      sheet_text={'Got it? Now you do it!'}
      video_name={'Knee Strike'}
      description={
        'Start in your safety stance.\n' +
        '\n' +
        'Slide forward with your front leg.\n' +
        '\n' +
        'Bring your rear knee up to deliver a thigh strike to the head through their groin. Clothesline "No!"\n' +
        '\n' +
        'Set the striking leg down in front. '
      }
      sub_title={true}
    />
  );
};

export default KneeStrike;
