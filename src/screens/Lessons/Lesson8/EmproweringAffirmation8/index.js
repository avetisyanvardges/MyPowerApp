import React, {useEffect, useState} from 'react';
import AffirmationScreen from './Components/Affirmation';
import WarmupScreen4 from './Components/Warmup';
import Orientation from 'react-native-orientation-locker';

const EmproweringAffirmation8 = ({navigation}) => {
  const [current_screen, setScreen] = useState('affirmation');
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const screens = {
    affirmation: <AffirmationScreen setScreen={setScreen} />,
    warmup: <WarmupScreen4 setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default EmproweringAffirmation8;
