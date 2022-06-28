import React from 'react';
import {useNavigation} from '@react-navigation/native';
import VideoPlayer from '../../../components/VideoComponents/VideoPlayer';

const EsdVideoScreen = () => {
  const navigation = useNavigation();

  return (
    <VideoPlayer
      source={
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/OnBoarding%2Fvideo_01.mp4?alt=media&token=77a6d275-d914-47ea-a85a-d0bab57df76f'
      }
      closePress={() => navigation.navigate('PersonalCommintment')}
      video_name={'What is ESD?'}
      sheet_text={'Great! Click next when you are ready to continue'}
      onPress={() => navigation.navigate('PersonalCommintment')}
    />
  );
};

export default EsdVideoScreen;
