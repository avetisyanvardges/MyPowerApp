import React, {useEffect, useState} from 'react';
import AffirmationScreen from './Components/Affirmation';
import Orientation from 'react-native-orientation-locker';
import WarmupScreen9 from './Components/Warmup';
import WarmupNext from './Components/WarmupNext';

const EmpoweringAffirmation10 = ({navigation}) => {
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
    warmupNext: <WarmupNext setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default EmpoweringAffirmation10;
