import React, {useState} from 'react';
import BitCautionScreen from './Components/BitCautionScrenn';
import ThingsScreen from './Components/ThingsScreen';

const BitCaution = () => {
  const [current_screen, setScreen] = useState('bit');
  const screens = {
    bit: <BitCautionScreen setScreen={setScreen} />,
    things: <ThingsScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default BitCaution;
