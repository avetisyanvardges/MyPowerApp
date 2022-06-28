import React, {useEffect, useState} from 'react';
import AffirmationScreen from './Components/Affirmation';
import Orientation from 'react-native-orientation-locker';
import WarmupScreen9 from './Components/Warmup';

const EmproweringAffirmation9 = ({navigation}) => {
  const [current_screen, setScreen] = useState('affirmation');
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const screens = {
    affirmation: <AffirmationScreen setScreen={setScreen} />,
    warmup: <WarmupScreen9 setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default EmproweringAffirmation9;
