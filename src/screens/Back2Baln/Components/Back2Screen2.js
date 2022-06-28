import React from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';
import {ImageBackground, Text} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {Button} from '../../../components/Button';

import {View} from 'react-native-animatable';

const Back2Screen2 = ({setScreen}) => {
  const {background, title, subtitle, top_content, bottom_content} = styles();
  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Back2Baln</Text>
        <Text style={subtitle}>
          {'Sometimes, when you are learning to defend yourself, you get pulled off center. You may start to feel anger from past experiences where your boundaries were crossed, or re-experience fear from past assaults; occasionally, you may find yourself in the middle of a full-fledged trauma trigger.\n' +
            '\n' +
            'Being triggered means that your body is reacting in the present to a negative event from the past. Learning how to recognize and ground when this happens is an important part of this program, and for life in general. '}
        </Text>
      </View>
      <View style={bottom_content}>
        <Button
          text={'Next'}
          onPress={() => {
            setScreen('back2_3');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Back2Screen2;
