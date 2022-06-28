import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Impact = () => {
  const muscle = useSelector(store => store.lesson_8.Non_exercise.impact);

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'What is IMPACT'}
      closePress={() => navigation.navigate('Pt_2')}
      backPress={() => navigation.navigate('Pt_2')}
      onPress={() => navigation.navigate('Pt_2')}
      source={muscle}
      description={
        'IMPACT is a unique self-defense training program, using adrenaline-based learning. IMPACT was developed to combat and prevent sexual violence. Many graduates have defined it as a life-changing and powerful experience that positively influenced all areas of their lives. Like all Empowerment Self Defense programs, IMPACT is trauma-informed and addresses a spectrum of scenarios including known and unknown-assailants. \n' +
        'The team consists of women and men, working together to end sexual violence. IMPACT training is an intensive training which involves simulated fights with instructors in full-body protective gear.'
      }
      sheet_text={'That was a good one!'}
    />
  );
};

export default Impact;
