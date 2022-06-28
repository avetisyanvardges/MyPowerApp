import React from 'react';
import {useSelector} from 'react-redux';
import VerticalAudio from '../../../../components/AudioComponents/VerticalAudio';

const MarchInPlace = ({navigation}) => {
  const Audios = useSelector(store => store.lesson_3.Audios);
  return (
    <VerticalAudio
      screen_title="Warmup"
      screen_content="March in Place"
      sheet_title="March in Place"
      sheet_content={
        'March in place for 30 seconds.\n \n' +
        'See how high you can raise your knees.\n \n' +
        'Now add your elbows.\n \n' +
        'Swing them back and forth.\n \n' +
        'All the way up in front!\n \n' +
        'As far as you can go up in the back.'
      }
      sheet_height="45%"
      sheetVisible={true}
      background_source={require('../../../../assets/Image/background/videoBg.png')}
      filepath={Audios.march_in_place}
      onPress={() => navigation.navigate('BreatheIn')}
      closePress={() => navigation.navigate('BreatheIn')}
    />
  );
};

export default MarchInPlace;
