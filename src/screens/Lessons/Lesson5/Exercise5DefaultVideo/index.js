import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ExerciseDefaultVideo5 = () => {
  const Shoulder_grab = useSelector(store => store.lesson_5.Shoulder_grab);
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Shoulder Grab to Boundary'}
      closePress={() => navigation.navigate('S_G_T_B')}
      backPress={() => navigation.navigate('S_G_T_B')}
      onPress={() => navigation.navigate('S_G_T_B')}
      require={require('../../../../assets/Image/video/Lesson5.mp4')}
      sheet_text={'Good job!'}
      description={
        'As the attacker grabs your shoulder, turn to face them.\n' +
        'See how the instructor’s hands are up in the safety stance. Put your hands up just like that.\n' +
        ' Look directly at the attacker, and yell “Back Off:.'
      }
    />
  );
};

export default ExerciseDefaultVideo5;
