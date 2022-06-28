import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const LowElbows = () => {
  const Low_elbows = useSelector(
    store => store.lesson_7.Workout_room.low_elbows,
  );

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Rear Hug - Low Elbows'}
      closePress={() => navigation.navigate('NameInit')}
      backPress={() => navigation.navigate('NameInit')}
      onPress={() => navigation.navigate('NameInit')}
      source={Low_elbows}
      sheet_text={'Great!'}
      description={
        'Turn your palms up.\n' +
        '\n' +
        'Thrust your elbows into the attacker. Turn your body with each strike.\n' +
        '\n' +
        'Turn to face them in your safety stance.\n' +
        '\n' +
        'Palm-heel to the nose.\n' +
        '\n' +
        'Keep your hands up. Step forward with your front foot. Your back leg will deliver the strike.\n' +
        'Knee strike to the groin.\n' +
        'After you strike. That leg stays forward. Use it to move in closer. Your other leg will deliver the next strike.\n' +
        'Knee strike to the head.'
      }
    />
  );
};

export default LowElbows;
