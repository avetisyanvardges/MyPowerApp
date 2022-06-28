import React from 'react';
import VerticalVideo from '../../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';

const PowerfullStrike = ({setScreen}) => {
  const powerFul_strike = useSelector(
    state => state.lesson_3.Non_exercise.powerful_strikes,
  );
  const welcomeText =
    'You are about to learn some powerful strikes. \n' +
    '\n' +
    'When we yell "NO" like this while striking it adds many benefits.\n' +
    '\n' +
    'Forces us to breathe.\n' +
    '\n' +
    'Helps break us out of a freeze.\n' +
    '\n' +
    'Gives us more power.\n' +
    '\n' +
    'Startles the attacker.\n' +
    '\n' +
    'Alerts others that we are in trouble.\n' +
    '\n' +
    'Make sure to include a deep, loud "No" with all of the strikes that you are about to learn.\n';
  return (
    <VerticalVideo
      videoUrl={powerFul_strike}
      sheetTitle="Powerful Strikes"
      sheetContent={welcomeText}
      closePress={() => setScreen('technique')}
      sheetHeight="70%"
      resizeMode="cover"
      progressbar={true}
    />
  );
};

export default PowerfullStrike;
