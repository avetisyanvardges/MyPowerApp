import React, {useEffect} from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import Orientation from 'react-native-orientation-locker';
import {useSelector} from 'react-redux';

const BreatheIn = ({navigation}) => {
  const breathe_in = useSelector(
    store => store.lesson_3.Non_exercise.breathe_in,
  );
  const welcomeText =
    'Hold it.\n' +
    'Take in a little more.\n' +
    'A little more.\n' +
    'A little more. \n' +
    'Let it out.\n' +
    'Great!\n ';

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <VerticalVideo
      videoUrl={breathe_in}
      sheetTitle="Take a deep breath. "
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('BreatheOut')}
      sheetHeight="30%"
      resizeMode="cover"
      visibleContent={true}
      screen_title={'Breathe in More\n' + 'Warmup'}
      rightIcon={true}
      progressbar={true}
    />
  );
};

export default BreatheIn;
