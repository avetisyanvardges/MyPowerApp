import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import {View} from 'react-native';
import WarmupSayA_Z from './Components/WarmupSayA_Z';
import Angrier from './Components/Angrier';
import Fantastic from './Components/Fantastic';

const WarmupGreateScreens = ({navigation, route}) => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  const [current_screen, setScreen] = useState('warmupA_Z');
  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, [navigation]);
  const screens = {
    warmupA_Z: <WarmupSayA_Z setScreen={setScreen} />,
    angrier: <Angrier setScreen={setScreen} />,
    fantastic: <Fantastic setScreen={setScreen} />,
  };

  return (
    <View>
      <View>{screens[current_screen]}</View>
    </View>
  );
};

export default WarmupGreateScreens;
