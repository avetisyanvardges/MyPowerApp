import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';

const PalmHeelStrike = () => {
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={"What's Going on Here? \n" + 'With Palm-heel Strike'}
      closePress={() => navigation.navigate('Story')}
      backPress={() => navigation.navigate('Story')}
      onPress={() => navigation.navigate('Story')}
      source={
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%204%2FWorkout%20Room%2FLesson%204%20-%20Workout%20Room%20-%20What_s%20Going%20on%20Here%20-%20Palm-heel%20Strike.mp4?alt=media&token=3b62dd11-070b-42cd-93e7-5bd2e0543725'
      }
      sheet_text={
        "You'll learn more about that strike to the face soon. Promise. "
      }
      description={
        'When a situation is unclear, take a moment to ask, “What’s going on here?"\n' +
        '\n' +
        'If you feel unsafe, get in your safety stance and set a verbal boundary.\n' +
        ' \n' +
        'He grabs her hand; the situation has escalated.\n' +
        '\n' +
        'Palm heel to the nose.\n' +
        '\n' +
        'Finish in safety stance.'
      }
    />
  );
};

export default PalmHeelStrike;
