import React, {useEffect, useState} from 'react';
import Promo1 from './Components/Promo1';
import Promo2 from './Components/Promo2';
import Promo3 from './Components/Promo3';
import FinishPromo from './Components/FinishPromo';
import Orientation from 'react-native-orientation-locker';

const PROMO = ({navigation, route}) => {
  const [current_screen, setScreen] = useState('promo2');

  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
    Orientation.lockToPortrait();
  }, [navigation, route]);

  const screens = {
    promo1: <Promo1 setScreen={setScreen} />,
    promo2: <Promo2 setScreen={setScreen} />,
    promo3: <Promo3 setScreen={setScreen} />,
    finish: <FinishPromo setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default PROMO;
