import React from 'react';
import VoiceRecord from '../../../../components/AudioComponents/VoiceRecord';
import {FontStyle} from '../../../../assets/RootStyles';
import {UploadFile} from '../../../../Services/firebase';

const RecordAudio_2 = ({navigation}) => {
  const uploadRecord = async res => {
    const body = {
      lesson_name: 'Lesson_8',
      file_path: res,
      file_name: 'Share_story',
      file_format: 'wav',
      file_type: 'Audio',
      cb: () => {
        navigation.navigate('Formula');
      },
    };
    await UploadFile(body);
  };
  return (
    <VoiceRecord
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
      skip_press={() => navigation.navigate('Formula')}
    />
  );
};

export default RecordAudio_2;
