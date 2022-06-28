import React, {useState} from 'react';
import WarmupScreen from './Components/WarmupScreen';
import GoodJob from './Components/GoodJob';

const WarmupS = () => {
  const [current_screen, setScreen] = useState('warmupScreen');
  const screens = {
    warmupScreen: <WarmupScreen setScreen={setScreen} />,
    goodJob: <GoodJob setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default WarmupS;
