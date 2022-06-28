import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import StoryScreen1 from './Components/StoryScreen1';
import StoryScreen2 from './Components/StoryScreen2';
import StoryScreen3 from './Components/StoryScreen3';
import StoryScreen4 from './Components/StoryScreen4';
import StoryScreen5 from './Components/StoryScreen5';
import Challenge from './Components/Challenge';
import ReadAgain from './Components/ReadAgain';
import ClothesLine from './Components/Clothesline';

const Story = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const [current_screen, setScreen] = useState('story1');
  const screens = {
    story1: <StoryScreen1 setScreen={setScreen} />,
    story2: <StoryScreen2 setScreen={setScreen} />,
    story3: <StoryScreen3 setScreen={setScreen} />,
    story4: <StoryScreen4 setScreen={setScreen} />,
    story5: <StoryScreen5 setScreen={setScreen} />,
    challenge: <Challenge setScreen={setScreen} />,
    readAgain: <ReadAgain setScreen={setScreen} />,
    clothesline: <ClothesLine setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Story;
