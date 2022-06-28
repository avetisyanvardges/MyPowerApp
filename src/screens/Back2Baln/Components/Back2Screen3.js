import React from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';
import {ImageBackground, Text} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {Button} from '../../../components/Button';
import {View} from 'react-native-animatable';

const Back2Screen3 = ({setScreen}) => {
  const {background, title, subtitle, top_content, bottom_content} = styles();

  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Back2Baln</Text>
        <Text style={subtitle}>
          {'These Back2Blnc exercises can help you do that. \n' +
            '\n' +
            'Each one is short, usually not more than 10 minutes, designed to help return you to yourself, to your center.\n' +
            '\n' +
            'You may decide to do a Back2Baln exercise after every lesson; you may need to stop in the middle to refocus yourself, and then return to your lesson. Do what works for you!\n' +
            '\n' +
            'Note:  If you still feel shaky after your Back2Baln exercise, we suggest you spend some time doing an activity you find calming and nurturing. Do whatever takes you to your calm place!'}
        </Text>
      </View>
      <View style={bottom_content}>
        <Button
          text={'Next'}
          onPress={() => {
            setScreen('check');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Back2Screen3;
