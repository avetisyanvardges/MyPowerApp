import React, {useEffect, useState} from 'react';
import FaqScreen from './Components/FaqScreen';
import FaqNextScreen from './Components/FaqNextScreen';
import FaqKnowScreen from './Components/FaqKnowScreen';

const FAQ = ({route}) => {
  const [current_screen, setScreen] = useState('faq');
  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, []);
  const screens = {
    faq: <FaqScreen setScreen={setScreen} />,
    next: <FaqNextScreen setScreen={setScreen} />,
    know: <FaqKnowScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default FAQ;
