import React from 'react';
import VerticalAudio from '../../../../components/AudioComponents/VerticalAudio';

import {useNavigation} from '@react-navigation/native';

const ExAudio2 = ({setScreen}) => {
  const navigation = useNavigation();

  return (
    <VerticalAudio
      sheet_title={'Now listen to this:'}
      sheet_content={
        'This is the lower and slower method.\n' +
        '\n' +
        'And it is about keeping the message simple and clear.'
      }
      background_source={require('../../../../assets/Image/background/lesson5/affirmationBg.png')}
      filepath={
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FAudios%2FLesson%205%20-%20Please%20leave%20me%20alone%20%20-%20Lower%20and%20slower%20(Yudit).mp4?alt=media&token=afdee537-63b9-462e-a81c-9be4ff6fc590'
      }
      closePress={() => navigation.navigate('Exercise', {screen: 'giveIt'})}
      sheetVisible={true}
      progressVisible={true}
      onPress={() => navigation.navigate('Exercise', {screen: 'giveIt'})}
    />
  );
};

export default ExAudio2;
