import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import Help9 from './Components/Help9';
import Opportunity_9 from './Components/Opportunity_9';
import Warmup_last from './Components/Warmup_last';

const Warmup_9 = ({navigation}) => {
  const [current_screen, setScreen] = useState('help');
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const screens = {
    help: <Help9 setScreen={setScreen} />,
    opportunity: <Opportunity_9 setScreen={setScreen} />,
    warmup_last: <Warmup_last setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Warmup_9;
