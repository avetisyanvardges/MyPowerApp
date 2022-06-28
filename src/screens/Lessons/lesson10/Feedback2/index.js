import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import Answer from './Components/Answer';
import BetterAnswer from './Components/BetterAnswer';
import SecondAnswer from './Components/SecondAnswer';

const FeedBack2 = ({navigation, route}) => {
  const [current_screen, setScreen] = useState('answer');
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
  const screens = {
    answer: <Answer setScreen={setScreen} />,
    betterAnswer: <BetterAnswer setScreen={setScreen} />,
    secondAnswer: <SecondAnswer setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default FeedBack2;
