import React, {useState} from 'react';
import Record_1Screen from './Components/Record_1_Screen';
import FindeRecordScreen from './Components/FindeRecord';
import RecordEndScreen from './Components/Record_end';

const RECORD = () => {
  const [current_screen, setScreen] = useState('record');
  const screens = {
    record: <Record_1Screen setScreen={setScreen} />,
    findrecord: <FindeRecordScreen setScreen={setScreen} />,
    recordEnd: <RecordEndScreen setScreen={setScreen} />,
  };

  return screens[current_screen];
};

export default RECORD;
