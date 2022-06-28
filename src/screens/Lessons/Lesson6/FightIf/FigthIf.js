import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const FightIf = () => {
  const FightIf = useSelector(store => store.lesson_6.Video_Defoult.fightIf);

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Fight if...'}
      closePress={() => navigation.navigate('GameInstructions')}
      backPress={() => navigation.navigate('GameInstructions')}
      onPress={() => navigation.navigate('GameInstructions')}
      source={FightIf}
      sheet_text={
        'You are here because you believe you are worth fighting for!'
      }
      description={
        'Fight if...\n' +
        '\n' +
        'FIGHT if anyone tries to tie you up or bind you.\n' +
        '\n' +
        'FIGHT if anyone tries to drug you.\n' +
        '\n' +
        'FIGHT if anyone tries to take you to another location.\n' +
        '\n' +
        'In the majority of cases, where you are at the moment is far safer than anywhere they want to take you!\n' +
        '\n' +
        'And there is no way to test that theory.\n' +
        '\n' +
        'FIGHT if someone is actively trying to kill you.\n' +
        '\n' +
        'Anything else, if you can run, RUN!!!!\n'
      }
    />
  );
};

export default FightIf;
