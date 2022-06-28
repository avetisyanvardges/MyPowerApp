import React from 'react';
import VoiceRecord from '../../../../../components/AudioComponents/VoiceRecord';
import {FontStyle} from '../../../../../assets/RootStyles';

const RecordAudio_9 = ({setScreen}) => {
  return (
    <VoiceRecord
      background_source={require('../../../../../assets/Image/background/lesson9/Lesson9Bg.png')}
      screen_subtitle={'Record yourself'}
      finish_title={'Good Job, Yudit!'}
      subtitle_style={{...FontStyle.headline_5}}
      next_press={() => setScreen('physical')}
      text_while_recording={'Recording in Progress...'}
      recording_while_style={{
        color: '#EF7D90',
        textAlign: 'center',
        fontSize: 24,
      }}
      skip_press={() => setScreen('physical')}
    />
  );
};

export default RecordAudio_9;
