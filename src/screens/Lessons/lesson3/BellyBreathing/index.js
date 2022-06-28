import React from 'react';
import VerticalAudio from '../../../../components/AudioComponents/VerticalAudio';
import {useSelector} from 'react-redux';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Colors, Sizes} from '../../../../assets/RootStyles';
import Vertical from '../../../../components/AudioComponents/Vertical';
import Audio from '../../../../assets/Lesson3-Audio-BellyBreathing.mp3';

const BellyBreathing = ({navigation}) => {
  const Audios = useSelector(store => store?.lesson_3.Audios);

  return (
    <VerticalAudio
      filepath={Audio}
      screen_title={'Belly Breathing'}
      image_source={require('../../../../assets/Image/lessons/lesson3/bellyImg.png')}
      image_style={{
        position: 'absolute',
        right: deviceInfo.small_screen ? Sizes.size135 : Sizes.size150,
        top: deviceInfo.small_screen ? Sizes.size350 : Sizes.size350,
      }}
      sheet_title={'Stand up straight.'}
      sheet_content={
        'Place your hands on your abdomen. \n' +
        '\n' +
        'Take a deep breath. Feel the air fill your belly.\n' +
        '\n' +
        'Force the air out through your mouth while making a deep "Huh" sound.\n' +
        '\n' +
        'Do it again. \n' +
        '\n' +
        'This time when you breath out, yell "No!"\n' +
        '\n' +
        'Make sure the sound comes from your belly, not your throat.'
      }
      finished_screen_title="Great Job!"
      title_style={{color: Colors.primary_red}}
      sheetVisible={true}
      progressVisible={true}
      closePress={() => navigation.navigate('FightIsAbout')}
      onPress={() => navigation.navigate('FightIsAbout')}
      progress_bar_Style={{flex: 0.85}}
      auto_next={() => navigation.navigate('FightIsAbout')}
      empty_content={true}
      text_in_button={'Now, watch how it looks'}
      background_source={require('../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}
    />
  );
};

export default BellyBreathing;
