import React, {useState} from 'react';
import SafeScreen from './Components/Safe';
import YesScreen from './Components/Yes';
import NoScreen from './Components/No';
import NoSure from './Components/NoSure';

const QuestionData = () => {
  const [current_screen, setScreen] = useState('safe');
  const screens = {
    yes: <YesScreen setScreen={setScreen} />,
    no: <NoScreen setScreen={setScreen} />,
    noSure: <NoSure setScreen={setScreen} />,
    safe: <SafeScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default QuestionData;
