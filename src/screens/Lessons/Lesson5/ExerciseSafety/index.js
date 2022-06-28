import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import {View} from 'react-native';
import HowFell from './Components/HowFell';
import SafetyPreVideo1 from './Components/SafetyPreVideo1';
import SafetyPreVideo2 from './Components/SafetyPreVideo2';

const ExerciseSafety = ({navigation, route}) => {
  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, [route]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);

  const [current_screen, setScreen] = useState('howFell');

  const screens = {
    howFell: <HowFell setScreen={setScreen} />,
    safetyPreVideo1: <SafetyPreVideo1 setScreen={setScreen} />,
    safetyPreVideo2: <SafetyPreVideo2 setScreen={setScreen} />,
  };

  return (
    <View>
      <View>{screens[current_screen]}</View>
    </View>
  );
};

export default ExerciseSafety;
