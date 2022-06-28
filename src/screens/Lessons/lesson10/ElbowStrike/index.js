import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import Warmup10 from './Components/Warmup';
import WarmupNext10 from './Components/WarmupNext';

const ElbowStrike10 = ({navigation}) => {
  const [current_screen, setScreen] = useState('warmup10');
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const screens = {
    warmup10: <Warmup10 setScreen={setScreen} />,
    nextWarmup: <WarmupNext10 setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default ElbowStrike10;
