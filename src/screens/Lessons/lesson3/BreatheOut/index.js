import React, {useEffect} from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import Orientation from 'react-native-orientation-locker';
import {useSelector} from 'react-redux';

const BreatheOut = ({navigation}) => {
  const breathe_out = useSelector(
    store => store.lesson_3.Non_exercise.breathe_out,
  );
  const welcomeText =
    'A little more. \n' +
    'A little more. \n' +
    'A little more.\n' +
    'Good.\n' +
    'Relax.\n';

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <VerticalVideo
      videoUrl={breathe_out}
      sheetTitle="Ok, now blow out all of the air in your lungs. "
      sheetContent={welcomeText}
      closePress={() => navigation.navigate('MidQuestion')}
      sheetHeight="30%"
      resizeMode="cover"
      screen_title={'Breathe Out\n' + 'Warmup'}
      visibleContent={true}
      rightIcon={true}
      progressbar={true}
    />
  );
};

export default BreatheOut;
