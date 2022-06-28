import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import VerticalAudio from '../../../../components/AudioComponents/VerticalAudio';
import {Vibration} from 'react-native';

import {fullScreen} from '../../../../assets/RootStyles';
import {SET_CURRENT_AUDIO} from '../../../../types/LESSON_10';
import {makeAction} from '../../../../store/makeAction';

const Game10 = ({navigation}) => {
  const dispatch = useDispatch();
  const audios = useSelector(store => store.lesson_10.Audios);
  const current_audio = useSelector(store => store.lesson_10.current_audio);
  const count = useSelector(store => store.lesson_10.render_count);
  const nextScreen = () => {
    setTimeout(() => {
      navigation.navigate('Balance');
    }, 4000);
  };
  const next_scene = () => {
    switch (audios[current_audio]) {
      case audios.call1:
        return dispatch(makeAction(SET_CURRENT_AUDIO, 'call2'));
      case audios.call2:
        return dispatch(makeAction(SET_CURRENT_AUDIO, 'call3'));
      case audios.call3:
        return dispatch(makeAction(SET_CURRENT_AUDIO, 'call4'));
      case audios.call4:
        return;
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      Vibration.cancel();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <VerticalAudio
      background_source={require('../../../../assets/Image/background/lesson10/answeredBg.png')}
      filepath={audios[current_audio]}
      onPress={() => navigation.navigate('CallEnded')}
      closePress={() => navigation.navigate('CallEnded')}
      progressVisible={true}
      image_style={{width: fullScreen.width, height: 300}}
      endCall={true}
      endCallText={'Incoming call'}
      partText={count + ' ' + 'of 4'}
      next_audio={next_scene}
    />
  );
};

export default Game10;
