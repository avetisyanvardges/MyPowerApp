import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';

const WgohPalm = () => {
  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={"What's Going on Here? \n" + 'He Wolks Away'}
      closePress={() => navigation.navigate('WhatsGoing3')}
      backPress={() => navigation.navigate('WhatsGoing3')}
      onPress={() => navigation.navigate('WhatsGoing3')}
      source={
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%204%2FWorkout%20Room%2FLesson%204%20-%20Workout%20Room%20-%20What_s%20Going%20On%20Here%20-%20He%20walks%20away.mp4?alt=media&token=fc0da66e-53cd-4b6e-8506-5157b5eddd8b'
      }
      sheet_text={'She set her boundary and it worked. Great!'}
      description={
        'She asks herself, “What’s going on here?"\n' +
        '\n' +
        'He is standing too close. \n' +
        '\n' +
        'He is looking at my body. \n' +
        '\n' +
        "It's making me uncomfortable.\n" +
        ' \n' +
        'Get in your safety stance and set a strong verbal boundary. \n' +
        '\n' +
        '"Take a step back."\n' +
        '\n' +
        '"I said, take a step back!"\n' +
        '\n' +
        'He understood and stepped back.\n'
      }
    />
  );
};

export default WgohPalm;
