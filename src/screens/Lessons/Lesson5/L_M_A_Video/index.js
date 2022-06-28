import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const L_M_A_Video = () => {
  const L_M_A = useSelector(store => store.lesson_5.L_M_A);

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Leave Me Alone!'}
      closePress={() => navigation.navigate('L_M_A_2')}
      backPress={() => navigation.navigate('L_M_A_2')}
      onPress={() => navigation.navigate('L_M_A_2')}
      source={L_M_A}
      sheet_text={'Good job!'}
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

export default L_M_A_Video;
