import React from 'react';
import VoiceRecord from '../../../../../components/AudioComponents/VoiceRecord';

import {styles} from '../../SelfRecordingActive/styles';
import {useNavigation} from '@react-navigation/native';

const YourSelfCta = ({setScreen}) => {
  const {container, title, background, skip_content, redTitle} = styles();
  const navigation = useNavigation();
  return (
    <VoiceRecord
      screen_subtitle={'Record yourself'}
      screen_content={'[Display the USERS Choice here]'}
      finish_modal={false}
      onPress={setScreen('finish')}
    />
  );
};

export default YourSelfCta;
