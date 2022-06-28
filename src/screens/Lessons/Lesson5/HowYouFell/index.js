import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import {View} from 'react-native';

import FellScreen from './Components/FellScrenn';
import Fellscreen2 from './Components/FellScreen2';
import AskExpert from './Components/AskExpert';

const HowYouFell = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);

  const [current_screen, setScreen] = useState('fellYou');

  const screens = {
    fellYou: <FellScreen setScreen={setScreen} />,
    fellYou2: <Fellscreen2 setScreen={setScreen} />,
    akExpert: <AskExpert setScreen={setScreen} />,
  };

  return (
    <View>
      <View>{screens[current_screen]}</View>
    </View>
  );
};

export default HowYouFell;
