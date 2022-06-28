import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';

const Wgoh = () => {
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'What’s going on here?'}
      closePress={() => navigation.navigate('WhatsGoing2')}
      backPress={() => navigation.navigate('WhatsGoing2')}
      onPress={() => navigation.navigate('WhatsGoing2')}
      source={
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%204%2FNon-exercise%20videos%2FLesson%204%20-%20Whats%20Going%20On%20Here.mp4?alt=media&token=afa27b22-64a9-4441-bf18-7cc0887608a4'
      }
      sheet_text={
        "Now let's see how that might play out if someone is behaving in a threatening manner. "
      }
    />
  );
};

export default Wgoh;
