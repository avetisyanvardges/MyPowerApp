import React, {useEffect, useState} from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useSelector} from 'react-redux';

const Videos = ({navigation, route}) => {
  const Non_exercise = useSelector(store => store.lesson_7.Non_exercise);
  const Workout_room = useSelector(store => store.lesson_7.Workout_room);
  const [current_screen, setScreen] = useState('Palm_heel_Strike');

  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, [route]);
  const screens = {
    Hips: (
      <VideoPlayer
        source={Non_exercise.i_love_my_hips}
        backPress={() => navigation.goBack()}
        video_name={'I love my hips'}
        onPress={() =>
          navigation.navigate('GameInstructions', {screen: 'Screen3'})
        }
        closePress={() =>
          navigation.navigate('GameInstructions', {screen: 'Screen3'})
        }
        description={
          'I love my hips! \n' +
          '\n' +
          'I love my hips! \n' +
          '\n' +
          'I love my hips! \n' +
          '\n' +
          'I love my hips! \n' +
          '\n' +
          'I love my hips! '
        }
        sheet_text={
          'Did you say "I love my hips" loudly and proudly? If not, do it again.'
        }
      />
    ),
    Palm_heel_Fist: (
      <VideoPlayer
        source={Workout_room.Palm_heel_Fist}
        backPress={() => navigation.goBack()}
        video_name={' Palm-heel vs Fist'}
        onPress={() => setScreen('Palm_heel_Strike')}
        closePress={() => setScreen('Palm_heel_Strike')}
        description={
          'When setting a physical boundary, the first thing we do is stand in our safety stance and set the boundary not to come closer.\n' +
          ' \n' +
          'If that doesn’t work, and the assailant moves closer, threatens me, or tries to grab me, it is better to hit with the heel of my palm instead of a fist. \n' +
          '\n' +
          'This move is called a palm-heel.\n' +
          '   \n' +
          'A palm-heel is better than a punch for three reasons:\n' +
          ' \n' +
          'One, it is easier to learn a correct palm-heel than a correct punch.\n' +
          ' \n' +
          'Two, it protects the joints.  Fingers, wrist, elbow, and shoulder, all of these joints, are in a straight line. The palm-heel comes straight up with no need for a twist.  \n' +
          '\n' +
          'The third reason is that, keeping my wrist, elbow and shoulder straight, and my palm-heel open creates a bigger surface for hitting than the fist. And that keeps me as safe as possible. \n\n'
        }
        sheet_text={'Now practice the palm-heel strike'}
      />
    ),
    Palm_heel_Strike: (
      <VideoPlayer
        source={Workout_room.Palm_heel_Strike}
        backPress={() => navigation.goBack()}
        video_name={'Palm-heel Strike'}
        onPress={() => navigation.navigate('RecordYourSelf')}
        closePress={() => navigation.navigate('RecordYourSelf')}
        description={
          'Get into your safety stance. The hand on the side of your back leg will do the strike. \n' +
          '\n' +
          "Extend your arm out at a slight upward angle. Strike with the heel of your palm to the attacker's nose. \n" +
          '\n' +
          'Then bring your hand back to starting position.\n'
        }
        sheet_text={
          'Did you say "I love my hips" loudly and proudly? If not, do it again.'
        }
      />
    ),
  };
  return screens[current_screen];
};

export default Videos;
