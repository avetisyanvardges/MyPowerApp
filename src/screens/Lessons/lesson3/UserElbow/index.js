import React, {useEffect, useState} from 'react';
import ElbowScreen from './Components/ElbowScreen';
import TriggeretScreen from './Components/TriggeretScreen';
import NotHappy from './Components/NotHappy';
import ThankYou from './Components/ThankYou';

const Elbow = ({route}) => {
  const [current_screen, setScreen] = useState('elbow');
  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, [route]);
  const screens = {
    elbow: <ElbowScreen setScreen={setScreen} />,
    triggeret: <TriggeretScreen setScreen={setScreen} />,
    notHappy: <NotHappy setScreen={setScreen} />,
    thankYou: <ThankYou setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Elbow;
