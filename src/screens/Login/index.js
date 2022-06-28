import React, {useState} from 'react';
import LoginScreen from './Components/Login';
import WhiteBildingScreen from './Components/WhiteBuilding';
import SuccessScreen from './Components/Success';
import EsdScreen from './Components/ESD';
import EsdVideoScreen from './Components/EsdVideo';

const Login = () => {
  const [current_screen, setScreen] = useState('login');
  const screens = {
    building: <WhiteBildingScreen setScreen={setScreen} />,
    success: <SuccessScreen setScreen={setScreen} />,
    login: <LoginScreen setScreen={setScreen} />,
    esd: <EsdScreen setScreen={setScreen} />,
    esdVideo: <EsdVideoScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Login;
