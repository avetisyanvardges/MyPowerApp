import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const PalmHellKnee = () => {
  const Palm_hell_knee = useSelector(
    store => store.lesson_7.Workout_room.palm_hell_knee,
  );

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Palm-heel, Knee, Knee\n'}
      closePress={() => navigation.navigate('Challenging')}
      backPress={() => navigation.navigate('Challenging')}
      onPress={() => navigation.navigate('Challenging')}
      source={Palm_hell_knee}
      sheet_text={'Got it? Now you try it'}
      description={
        'Step in towards the attacker using the leg on the same side that was grabbed. Bring your other hand up.\n' +
        '\n' +
        'Palm-heel to the nose.\n' +
        '\n' +
        'Keep your hands up. Step forward with your front foot. Your back leg will deliver the strike.\n' +
        '\n' +
        'Knee strike to the groin.\n' +
        'After you strike. That leg stays forward. Use it to move in closer. Your other leg will deliver the next strike.\n' +
        'Knee strike to the head.'
      }
    />
  );
};

export default PalmHellKnee;
