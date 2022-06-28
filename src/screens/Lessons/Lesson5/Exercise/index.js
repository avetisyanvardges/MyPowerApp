import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import {View} from 'react-native';
import ExScreen1 from './Components/ExScreen1';
import ExAudio from './Components/ExAudio1';
import GiveIt from './Components/GiveIt';

const Exercise = ({navigation, route}) => {
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
  const [current_screen, setScreen] = useState('exScreen1');
  const screens = {
    exScreen1: <ExScreen1 setScreen={setScreen} />,
    exAudio: <ExAudio setScreen={setScreen} />,
    giveIt: <GiveIt setScreen={setScreen} />,
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>{screens[current_screen]}</View>
    </View>
  );
};

export default Exercise;
