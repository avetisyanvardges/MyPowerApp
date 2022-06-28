import React from 'react';
import VoiceRecord from '../../../../components/AudioComponents/VoiceRecord';
import {FontStyle} from '../../../../assets/RootStyles';
import {UploadFile} from '../../../../Services/firebase';

const RecordAudio = ({navigation}) => {
  const uploadRecord = async res => {
    const body = {
      lesson_name: 'Lesson_8',
      file_path: res,
      file_name: 'Easy_story',
      file_format: 'wav',
      file_type: 'Audio',
      cb: () => {
        navigation.navigate('Yes_No');
      },
    };
    await UploadFile(body);
  };
  return (
    <VoiceRecord
      background_source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}
      screen_subtitle={'Record yourself'}
      finish_title={'Good Job, Yudit!'}
      subtitle_style={{...FontStyle.headline_5}}
      next_press={res => uploadRecord(res)}
      text_while_recording={'Recording in Progress...'}
      recording_while_style={{
        color: '#EF7D90',
        textAlign: 'center',
        fontSize: 24,
      }}
    />
  );
};

export default RecordAudio;
