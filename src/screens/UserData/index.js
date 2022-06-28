import React, {useState} from 'react';
import NameScreen from './Components/Name';
import AgeScreen from './Components/Age';

const UserData = () => {
  const [current_screen, setScreen] = useState('name');
  const screens = {
    name: <NameScreen setScreen={setScreen} />,
    age: <AgeScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default UserData;
