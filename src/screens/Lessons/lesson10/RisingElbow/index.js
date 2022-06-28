import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const RisingElbow = () => {
  const roundElbow = useSelector(
    store => store.lesson_10.Non_exercise.risingElbow,
  );
  const description =
    "Bend your knees. Bring your elbow straight up to the attacker's chin.\n" +
    '\n' +
    "Hit with the part of your forearm right next to your elbow. Keep your hand close to your head, as if you're combing your hair.\n" +
    '\n' +
    'Bring your elbow down onto their clavicle.\n' +
    '\n' +
    'Hit with your tricep, just above your elbow.';
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Rising Elbow Strike'}
      closePress={() => navigation.navigate('Cta2')}
      backPress={() => navigation.navigate('Cta2')}
      onPress={() => navigation.navigate('Cta2')}
      source={roundElbow}
      description={description}
      sheet_text={'Now it’s your turn!'}
    />
  );
};

export default RisingElbow;
