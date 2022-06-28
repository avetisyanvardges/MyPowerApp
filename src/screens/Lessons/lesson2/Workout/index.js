import React, {useEffect, useState} from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useSelector} from 'react-redux';

const Workout = ({navigation, route}) => {
  const workout = useSelector(store => store.lesson_2.Workout_room);
  const [current_screen, setScreen] = useState(route.params.screen);

  useEffect(() => {
    setScreen(route.params.screen);
  }, [navigation, route]);
  const screens = {
    safety: (
      <VideoPlayer
        source={workout.safety_silent}
        sheet_text={'You did great! Now see how it looks'}
        video_name="Taking your Safety Stance"
        description={
          'from a neutral position step forward and bring your open hands up in front of your face.\n' +
          '\n' +
          'Repeat until you feel comfortable with how your legs support your body, both standing upright, and in your safety stance.\n' +
          '\n' +
          'Now you can throw in a strong “NO!” as you step forward as that is going to be your default throughout the rest of this course. That would look like this!'
        }
        onPress={() => {
          navigation.navigate('RecordSelf', {screen: 'safety'});
        }}
        closePress={() => {
          navigation.navigate('RecordSelf', {screen: 'safety'});
        }}
      />
    ),
    no: (
      <VideoPlayer
        source={workout.safety_no}
        video_name='Safety Stance with "NO!"'
        description={
          'Step forward and bring your hands up in front of your face.\n' +
          '\n' +
          'Clothesline, “No”'
        }
        onPress={() => {
          navigation.navigate('RecordSelf', {screen: 'no'});
        }}
        closePress={() => {
          navigation.navigate('RecordSelf', {screen: 'no'});
        }}
      />
    ),
  };

  return screens[current_screen];
};

export default Workout;
