import React from 'react';
import {useNavigation} from '@react-navigation/native';
import VoiceRecord from '../../../../../components/AudioComponents/VoiceRecord';
import {Colors, FontStyle, Sizes} from '../../../../../assets/RootStyles';
import {UploadFile} from '../../../../../Services/firebase';

const GiveIt = () => {
  const navigation = useNavigation();
  const uploadRecord = async res => {
    const body = {
      lesson_name: 'Lesson_5',
      file_path: res,
      file_name: 'YELL',
      file_format: 'wav',
      file_type: 'Audio',
      cb: () => {
        navigation.navigate('ExerciseSafety');
      },
    };
    await UploadFile(body);
  };
  return (
    <VoiceRecord
      background_source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}
      screen_subtitle={'How about you give that a try?'}
      subtitle_style={{
        ...FontStyle.headline_6,
        color: Colors.secondary_pink,
        marginBottom: Sizes.size18,
      }}
      screen_content={
        'Press the record button below whenever you’re ready and start your recording'
      }
      skip_press={() => navigation.navigate('ExerciseSafety')}
      next_press={res => uploadRecord(res)}
      path_name={'YELL.wav'}
    />
  );
};

export default GiveIt;
