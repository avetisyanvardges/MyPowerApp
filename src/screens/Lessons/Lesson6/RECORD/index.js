import React, {useEffect} from 'react';
import VoiceRecord from '../../../../components/AudioComponents/VoiceRecord';
import {useSelector} from 'react-redux';
import {FontStyle} from '../../../../assets/RootStyles';
import {UploadFile} from '../../../../Services/firebase';
import {BackHandler} from 'react-native';

const RECORD = ({navigation, route}) => {
  const backAction = () => {
    navigation.navigate('GameInitial');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const path_name = 'lesson_6_phrases';
  const phrases = useSelector(store => store.lesson_6.Phrases);
  const uploadRecord = async res => {
    const body = {
      lesson_name: 'Lesson_6',
      file_path: res,
      file_name: path_name,
      file_format: 'wav',
      file_type: 'Audio',
      cb: () => {
        navigation.navigate('SelfRecording', {screen: 'finish'});
      },
    };
    await UploadFile(body);
  };
  return (
    <VoiceRecord
      screen_subtitle={'Record yourself'}
      screen_content={phrases.hey.text}
      finish_title={'Good Job, Yudit!'}
      text_while_recording={phrases.hey.text}
      subtitle_style={{...FontStyle.headline_5}}
      next_press={uploadRecord}
      path_name={`${path_name}.wav`}
    />
  );
};

export default RECORD;
