import React, {useEffect, useState} from 'react';
import SafeScreen9 from './Components/Safe';
import Orientation from 'react-native-orientation-locker';
import Technique from './Components/Technique';
import WristRelease from './Components/WristRelease';
import Help from './Components/Help';

const Question9 = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const [current_screen, setScreen] = useState('safe');
  const screens = {
    safe: <SafeScreen9 setScreen={setScreen} />,
    technique: <Technique setScreen={setScreen} />,
    wrist: <WristRelease setScreen={setScreen} />,
    help: <Help setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Question9;
