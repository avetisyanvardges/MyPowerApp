import React, {useEffect} from 'react';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';

const RecordRising = ({navigation, route}) => {
  const video = useSelector(store => store.lesson_10.Non_exercise.risingElbow);

  return (
    <VideoCamera
      source={video}
      backPress={() => navigation.goBack()}
      sheet_text={'That was awesome!!'}
      onPress={() => navigation.navigate('FeedBack2')}
      closePress={() => navigation.navigate('FeedBack2', {screen: 'answer'})}
    />
  );
};

export default RecordRising;
