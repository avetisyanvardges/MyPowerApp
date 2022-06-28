import React, {useState} from 'react';
import VideoScreen from './Components/Video';
import WelcomeScreen from './Components/WelcomeScreen';

const Welcome = () => {
  const [current_screen, setScreen] = useState('welcome');
  const screens = {
    play_video: <VideoScreen setScreen={setScreen} />,
    welcome: <WelcomeScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Welcome;
