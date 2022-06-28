import React, {useEffect, useState} from 'react';
import CommitmenFirstScreen from './Components/CommitmentFirst';
import CommitmentSecondScreen from './Components/CommintmentSecond';
import UnderstandScreen from './Components/Understand';
import TimeScreen from './Components/Time';
import InitialScreen from './Components/Initials';
import ImportantScreen from './Components/ImportantParts';
import ThanksScreen from './Components/Thansk';
import WhiteScreen from './Components/White';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../assets/deviceInfo';

const PersonalCommintment = () => {
  useEffect(() => {
    deviceInfo.android && Orientation.lockToPortrait();
    deviceInfo.ios && Orientation.lockToAllOrientationsButUpsideDown();
  }, []);
  const [current_screen, setScreen] = useState('PersonalCommintment');
  const screens = {
    PersonalCommintment: <CommitmenFirstScreen setScreen={setScreen} />,
    commintment_second: <CommitmentSecondScreen setScreen={setScreen} />,
    understand: <UnderstandScreen setScreen={setScreen} />,
    time: <TimeScreen setScreen={setScreen} />,
    initial: <InitialScreen setScreen={setScreen} />,
    important: <ImportantScreen setScreen={setScreen} />,
    thanks: <ThanksScreen setScreen={setScreen} />,
    white: <WhiteScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default PersonalCommintment;
