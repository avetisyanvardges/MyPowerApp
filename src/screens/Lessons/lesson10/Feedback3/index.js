import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import Answer from './Components/Answer';
import BetterAnswer from './Components/BetterAnswer';
import SecondAnswer from './Components/SecondAnswer';
import AudioQuestion from './Components/AudioQuestion';
import Arrow from './Components/Arrow';
import Matter from './Components/Matter';

const FeedBack3 = ({navigation, route}) => {
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
    audioQuestion: <AudioQuestion setScreen={setScreen} />,
    arrow: <Arrow setScreen={setScreen} />,
    matter: <Matter setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default FeedBack3;
