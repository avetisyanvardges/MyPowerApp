import React, {useEffect} from 'react';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';

const RoundRecord = ({navigation, route}) => {
  const video = useSelector(store => store.lesson_10.Non_exercise.roundElbow);

  return (
    <VideoCamera
      source={video}
      backPress={() => navigation.goBack()}
      sheet_text={'Excellent!'}
      onPress={() => navigation.navigate('FeedBack')}
      closePress={() => navigation.navigate('FeedBack', {screen: 'answer'})}
    />
  );
};

export default RoundRecord;
