import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const CrossElbow = () => {
  const upElbow = useSelector(store => store.lesson_10.Non_exercise.upElbow);
  const description =
    'Glance over your shoulder. Reach your hand down in front of you. Pull it back. \n' +
    '\n' +
    'Keep your elbow up. Turn your body in the direction of the strike. \n' +
    '\n' +
    'Strike their face with the part of your arm right above your elbow.';
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Cross Elbow Strike'}
      closePress={() => navigation.navigate('Cta3')}
      backPress={() => navigation.navigate('Cta3')}
      onPress={() => navigation.navigate('Cta3')}
      source={upElbow}
      description={description}
      sheet_text={'Now it’s your turn!'}
    />
  );
};

export default CrossElbow;
