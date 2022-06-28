import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const VideoMine = () => {
  const mine = useSelector(store => store.lesson_9.Non_exercise.mine);
  const description =
    'Rotate the hand that has been grabbed so that your palm is facing down.\n' +
    '\n' +
    'Rotate your free hand so that the palm is facing up.\n' +
    'Bring your free hand up to meet your grabbed hand and grasp it. As if you are shaking your own hand, do not interlock your fingers.\n' +
    '\n' +
    'Pull both hands towards the shoulder of your free hand while turning your body in that direction.\n' +
    'Say ‘Mine’, then step back into your safety stance.';
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Mine'}
      closePress={() => navigation.navigate('Question9')}
      backPress={() => navigation.navigate('Question9')}
      onPress={() => navigation.navigate('Question9')}
      source={mine}
      description={description}
      sheet_text={
        'Restart: “Say ‘Mine’, then step back into your safety stance.”'
      }
    />
  );
};

export default VideoMine;
