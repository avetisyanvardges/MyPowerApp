import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ShakeIt = () => {
  const shake_it_out = useSelector(
    store => store.lesson_4.Non_exercise.shake_it_out,
  );

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Shake it Out'}
      closePress={() => navigation.navigate('WhatsGoing1')}
      backPress={() => navigation.navigate('WhatsGoing1')}
      onPress={() => navigation.navigate('WhatsGoing1')}
      source={shake_it_out}
      sheet_text={'You did great!'}
      description={
        'Shake right leg for 10 seconds.\n' +
        '\n' +
        'Shake left leg for 10 seconds.\n' +
        '\n' +
        'Shake right arm for 10 seconds.\n' +
        '\n' +
        'Shake left arm for 10 seconds.\n' +
        '\n' +
        'Now just shake your body altogether for as long as you like. \n' +
        '\n' +
        'Don’t forget to breathe while you do it! \n' +
        '\n' +
        'If you forgot, do it again. '
      }
    />
  );
};

export default ShakeIt;
