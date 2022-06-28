import React, {useState} from 'react';
import HomeScreen from './Components/Home';

const Home = () => {
  const [current_screen, setScreen] = useState('Home');
  const screens = {
    Home: <HomeScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Home;
