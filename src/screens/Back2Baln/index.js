import React, {useState} from 'react';
import Back2Screen1 from './Components/Back2Screen1';
import Back2Screen2 from './Components/Back2Screen2';
import Back2Screen3 from './Components/Back2Screen3';
import CheckIn from './Components/ChekIn';

const Back2Baln = () => {
  const [current_screen, setScreen] = useState('back2_1');
  const screens = {
    back2_1: <Back2Screen1 setScreen={setScreen} />,
    back2_2: <Back2Screen2 setScreen={setScreen} />,
    back2_3: <Back2Screen3 setScreen={setScreen} />,
    check: <CheckIn setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Back2Baln;
