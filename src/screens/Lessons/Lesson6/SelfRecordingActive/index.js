import React, {useEffect, useState} from 'react';
import SelfRecordingActive from './Components/SelfRecordingActive';
import YourSelfCta from './Components/YourSelfCta';
import RecordEndScreen from './Components/Record_end';
import WarmupFinish from './Components/WarmupFinish';

const SelfRecording = ({route}) => {
  const [current_screen, setScreen] = useState('selfActive');
  const [key, setKey] = useState('');

  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, [route]);
  const screens = {
    selfActive: (
      <SelfRecordingActive setScreen={setScreen} setKey={setKey} key={key} />
    ),
    cta: <YourSelfCta setScreen={setScreen} key={key} />,
    rec_end: <RecordEndScreen setScreen={setScreen} />,
    finish: <WarmupFinish setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default SelfRecording;
