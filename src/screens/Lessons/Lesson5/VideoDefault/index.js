import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const VideoDefault = () => {
  const shake_it_out = useSelector(store => store.lesson_5.defoult_video);

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Moving in Safety Stance'}
      closePress={() => navigation.navigate('Question5')}
      backPress={() => navigation.navigate('Question5')}
      onPress={() => navigation.navigate('Question5')}
      source={shake_it_out}
      sheet_text={
        'Great exercise to practice while you are waiting for a bus! '
      }
      description={
        'Start in your safety stance.\n' +
        '\n' +
        'When you move be careful not to cross your feet.\n' +
        '\n' +
        'Step forward, return.\n' +
        '\n' +
        'Step forward, return.\n' +
        '\n' +
        'Step back, return.\n' +
        '\n' +
        'Step back, return.\n' +
        '\n' +
        'Step to the side, return.\n' +
        '\n' +
        'Step to the side, return.\n' +
        '\n' +
        'Other side, return.\n' +
        '\n' +
        'Other side, return.'
      }
    />
  );
};

export default VideoDefault;
