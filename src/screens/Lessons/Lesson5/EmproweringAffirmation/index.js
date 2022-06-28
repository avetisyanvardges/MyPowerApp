import React, {useState} from 'react';
import AffirmationScreen from './Components/Affirmation';
import ThinkScreen4 from './Components/Think';
import WarmupScreen5 from './Components/Warmup';

const EmproweringAffirmation6 = () => {
  const [current_screen, setScreen] = useState('affirmation');
  const screens = {
    affirmation: <AffirmationScreen setScreen={setScreen} />,
    warmup5: <WarmupScreen5 setScreen={setScreen} />,
    think: <ThinkScreen4 setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default EmproweringAffirmation6;
