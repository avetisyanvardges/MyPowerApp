import React from 'react';
import VerticalAudio from '../../../../components/AudioComponents/VerticalAudio';
import {useNavigation} from '@react-navigation/native';

const FewPhrases = () => {
  const navigation = useNavigation();

  return (
    <VerticalAudio
      background_source={require('../../../../assets/Image/background/lesson5/affirmationBg.png')}
      screen_title={'Here are a few more phrases to practice. '}
      filepath={
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FAudios%2FLesson%205%20-%20Single%20Audio%20Files%20-%20boundary%20setting.mp3?alt=media&token=4e3dce58-457e-4144-a3da-cb4615c93f9d'
      }
      progressVisible={true}
      sheet_title={'Here are a few more phrases to practice. '}
      sheet_content={
        'Do this a few more times until you feel more comfortable with saying these phrases.  If you are really brave, do it standing in front of a mirror! '
      }
      sheetVisible={true}
      screen_content={
        'Do this a few more times until you feel more comfortable with saying these phrases.  If you are really brave, do it standing in front of a mirror! '
      }
      closePress={() =>
        navigation.navigate('ExerciseSafety', {screen: 'safetyPreVideo1'})
      }
    />
  );
};

export default FewPhrases;
