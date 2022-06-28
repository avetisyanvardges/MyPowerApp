import React, {useEffect, useState} from 'react';
import Instructions1Screen from './Components/Instruction1Screen';
import Orientation from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';
import Instructions2Screen from './Components/Instruction2Screen';
import Instructions3Screen from './Components/Instruction3Screen';
import Instructions4Screen from './Components/Instruction4Screen';

const GameInstructions = () => {
  const [current_screen, setScreen] = useState('Screen1');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const screens = {
    Screen1: <Instructions1Screen setScreen={setScreen} />,
    Screen2: <Instructions2Screen setScreen={setScreen} />,
    Screen3: <Instructions3Screen setScreen={setScreen} />,
    Screen4: <Instructions4Screen setScreen={setScreen} />,
  };
  return screens[current_screen];
};

export default GameInstructions;
