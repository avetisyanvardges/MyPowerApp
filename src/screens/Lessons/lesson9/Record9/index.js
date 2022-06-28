import React, {useState} from 'react';
import RecordEnd9 from './Components/RecordEnd9';
import YourBody from './Components/YourBody';
import RecordAudio_9 from './Components/AudioRecord9';
import Physical from './Components/Physical';

const Record9 = ({navigation}) => {
  const [current_screen, setScreen] = useState('recordEnd');
  // useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //         Orientation.lockToPortrait();
  //     });
  //
  //     return unsubscribe;
  // }, [navigation]);
  const screens = {
    recordEnd: <RecordEnd9 setScreen={setScreen} />,
    yourBody: <YourBody setScreen={setScreen} />,
    recordAudio: <RecordAudio_9 setScreen={setScreen} />,
    physical: <Physical setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default Record9;
