import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const RoundElbow = () => {
  const roundElbow = useSelector(
    store => store.lesson_10.Non_exercise.roundElbow,
  );
  const description =
    'Bring your elbow up.\n' +
    'Keep your hand close to your body.\n' +
    'Turn your body into the strike.\n' +
    'Hit with the part of your forearm right next to your elbow.';
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Front RoundHouse Elbow Strike'}
      closePress={() => navigation.navigate('Cta')}
      backPress={() => navigation.navigate('Cta')}
      onPress={() => navigation.navigate('Cta')}
      source={roundElbow}
      description={description}
      sheet_text={'Now it’s your turn!'}
    />
  );
};

export default RoundElbow;
