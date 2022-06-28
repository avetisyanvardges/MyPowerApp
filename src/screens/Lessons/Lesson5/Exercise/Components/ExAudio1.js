import React from 'react';
import {View} from 'react-native';
import {styles} from '../../WarmupGreatScreens/styles';
import VerticalAudio from '../../../../../components/AudioComponents/VerticalAudio';
import {useNavigation} from '@react-navigation/native';

const ExAudio = ({setScreen}) => {
  const {container, subtitle, redTitle, title, background, content} = styles();
  const navigation = useNavigation();

  return (
    <View style={container}>
      <VerticalAudio
        sheet_title={'Listen to this:'}
        sheet_content={
          'While a good person would have gotten it the first time, clearly this person does not have good intentions.\n' +
          '\n' +
          "Not only was the speaker wasting energy on coming up with many different original things that might change the other's behavior, they were getting more nervous, which led to talking faster, and getting higher pitched to boot. "
        }
        background_source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}
        filepath={
          'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FAudios%2FLesson%205%20-%20Please%20leave%20me%20alone%20-%20Faster%20and%20Squeakier%20(Yudit).mp4?alt=media&token=705da0a9-084d-419f-8a88-eac84808aeab'
        }
        closePress={() => navigation.navigate('ExAudio2')}
        sheetVisible={true}
        progressVisible={true}
        onPress={() => navigation.navigate('ExAudio2')}
      />
    </View>
  );
};

export default ExAudio;
