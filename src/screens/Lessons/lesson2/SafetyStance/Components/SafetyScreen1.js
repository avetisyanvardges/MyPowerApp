import React from 'react';
import {useSelector} from 'react-redux';
import VerticalAudio from '../../../../../components/AudioComponents/VerticalAudio';

const SafetyScreen1 = ({setScreen}) => {
  const safety_audio = useSelector(
    store => store.lesson_2.Audios.safety_stance,
  );
  const text =
    'Stand tall and relax. Feel your weight on your feet.\n' +
    'Look down and see if your feet are shoulder width apart.\n' +
    "Here's another way to align your feet:\n" +
    'Relax and jump up slightly. The more relaxed you are the more your legs will find the right place to land and that natural landing pad is, for most people, shoulder length apart. Jump a few times to just relax and let your feet go where they feel sturdy.\n' +
    'Now, can you feel the weight of your body between your feet. Not to the left. Not to the right.\n' +
    'Just comfortably in the center. Great.\n' +
    'You can repeat this until you feel comfortable with having found your center.\n' +
    'Now lean forward gently until one foot wants to step out to keep you from falling.\n' +
    '\n' +
    'Now lean forward gently until one foot wants to step out to keep you from falling.\n' +
    '\n' +
    'Let it catch you!\n' +
    'This should be your dominant foot. Nice!\n' +
    'If you are not sure, do it again.\n' +
    '\n' +
    'When you listen to your body it will learn how to tell you what it feels.\n' +
    '\n' +
    'Great!\n' +
    'In this warmup that strong foot is going to be the one that leads when you step forward.\n' +
    'And this position, with one foot forward and your weight in the center, is called a safety stance.\n' +
    '\n' +
    'Now we add hands.\n' +
    'Bring your hands up while keeping your elbows strongly at your side.\n' +
    'If it helps, imagine that you need to direct traffic. The front hand is a clear STOP! And the other hand is reinforcing the message.';
  return (
    <VerticalAudio
      filepath={safety_audio}
      onPress={() => setScreen('pre')}
      screen_title="Safety Stance Warmup"
      screen_content={
        'In the following exercise you will be listening to instructions and moving your body. You might want to find a private espace before continuing'
      }
      progressVisible={true}
      sheet_title={'Taking your Safety Stance'}
      sheet_content={text}
      background_source={require('../../../../../assets/Image/background/lesson2/safetyBG.png')}
      image_source={require('../../../../../assets/Image/lessons/lesson2/safetyimg.png')}
    />
  );
};

export default SafetyScreen1;
