import React, {useState} from 'react';
import AffirmationScreen from './Components/Affirmation';
import WarmupInstructions from './Components/WarmupInstructions';

const EmpoweringAffirmation6 = () => {
  const [current_screen, setScreen] = useState('affirmation');
  const screens = {
    affirmation: <AffirmationScreen setScreen={setScreen} />,
    warmupInstructions: <WarmupInstructions setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default EmpoweringAffirmation6;
