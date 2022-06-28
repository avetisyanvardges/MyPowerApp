import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import VerticalAudio from '../../../../components/AudioComponents/VerticalAudio';
import {useSelector} from 'react-redux';

const AudioActive = ({setScreen}) => {
  const phrases = useSelector(store => store.lesson_6.Phrases);
  const [current_phrase, setCurrentPhrase] = useState(phrases.hey);
  const navigation = useNavigation();
  const next_audio = () => {
    switch (current_phrase) {
      case phrases.hey:
        return setCurrentPhrase(phrases.home);
      case phrases.home:
        return setCurrentPhrase(phrases.explain);
      case phrases.explain:
        return setCurrentPhrase(phrases.done);
      case phrases.done:
        return setCurrentPhrase(phrases.leaving);
      case phrases.leaving:
        return setCurrentPhrase(phrases.let_me);
      case phrases.let_me:
        return setCurrentPhrase(phrases.LET_ME_GO);
    }
  };
  return (
    <VerticalAudio
      interactive={true}
      filepath={current_phrase.audio}
      screen_title={current_phrase.sub_text}
      next_audio={next_audio}
      next_page={() => navigation.navigate('RepeatWarmup')}
      title_style={{color: '#0B2B3E', fontSize: 16, textAlign: 'left'}}
      screen_content={current_phrase.text}
      closePress={() => navigation.navigate('RepeatWarmup')}
      subtitle_style={{
        marginHorizontal: 20,
        textAlign: 'center',
        marginTop: 80,
        fontSize: 30,
        paddingTop: 30,
        lineHeight: 56,
      }}
    />
  );
};

export default AudioActive;
