import React, {useEffect, useState} from 'react';
import PosesContentScreen from './Components/PosesContent';
import GoodJobScreen from './Components/goodJob';
import Orientation from 'react-native-orientation-locker';

const Poses = ({navigation, route}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, [route]);
  const [current_screen, setScreen] = useState('poses_content');
  const screens = {
    poses_content: <PosesContentScreen setScreen={setScreen} />,
    job: <GoodJobScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Poses;
