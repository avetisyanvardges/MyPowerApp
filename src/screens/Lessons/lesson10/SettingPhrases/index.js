import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const SettingPhrases = () => {
  const phrases = useSelector(store => store.lesson_10.Non_exercise.phrases);
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Boundary Setting Phrases'}
      closePress={() => navigation.navigate('RecordYourSelf10')}
      backPress={() => navigation.navigate('RecordYourSelf10')}
      onPress={() => navigation.navigate('RecordYourSelf10')}
      source={phrases}
      sheet_text={'Great! '}
    />
  );
};

export default SettingPhrases;
