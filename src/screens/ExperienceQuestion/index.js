import React, {useState} from 'react';
import ExperienceScreen from './Components/Experience';
import PizzaScreen from './Components/pizza';
import PetScreen from './Components/Pet';
import ColorScreen from './Components/Color';
import AbsolutelyScreen from './Components/Absolutely';

const ExperienceQuestionData = () => {
  const [current_screen, setScreen] = useState('experience');
  const screens = {
    color: <ColorScreen setScreen={setScreen} />,
    pet: <PetScreen setScreen={setScreen} />,
    pizza: <PizzaScreen setScreen={setScreen} />,
    absolutely: <AbsolutelyScreen setScreen={setScreen} />,
    experience: <ExperienceScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default ExperienceQuestionData;
