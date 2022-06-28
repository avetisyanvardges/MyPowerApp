import React, {useEffect, useState} from 'react';
import Question1 from './Components/Question1';
import Question2 from './Components/Question2';
import Orientation from 'react-native-orientation-locker';
import Question3 from './Components/Question3';
import SayA_Z from './Components/SayA_Z';
import {View} from 'react-native';

const Question5 = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  const [current_screen, setScreen] = useState('question1');
  const screens = {
    question1: <Question1 setScreen={setScreen} />,
    question2: <Question2 setScreen={setScreen} />,
    question3: <Question3 setScreen={setScreen} />,
    sayA_z: <SayA_Z setScreen={setScreen} />,
  };

  return (
    <View>
      <View>{screens[current_screen]}</View>
    </View>
  );
};

export default Question5;
