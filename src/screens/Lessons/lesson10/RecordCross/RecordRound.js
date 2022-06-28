import React, {useEffect} from 'react';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';

const RecordCross = ({navigation, route}) => {
  const video = useSelector(store => store.lesson_10.Non_exercise.risingElbow);

  return (
    <VideoCamera
      source={video}
      backPress={() => navigation.goBack()}
      sheet_text={'Super!'}
      onPress={() => navigation.navigate('FeedBack3')}
      closePress={() => navigation.navigate('FeedBack3', {screen: 'answer'})}
    />
  );
};

export default RecordCross;
