import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

import {styles} from '../styles';
import Header from '../../../../../components/Header';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Opportunity_9 = ({setScreen}) => {
  const {background, title, top_content, center_content, bottom_content} =
    styles();
  const navigation = useNavigation();
  const text =
    'In this lesson you have practiced techniques that are good for a yellow situation, someone who is being irritating and grabs your arm to move you, and a red situation, someone who truly means you harm. \n' +
    '\n' +
    'Being able to discern the difference requires reading body language and assessing the level of threat. All things that you are learning and practicing. \n';

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson9/MirrorchallengeBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>Window of Opportunity</Text>
      </View>

      <View style={center_content}>
        <Text>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('warmup_last')} />
      </View>
    </ImageBackground>
  );
};

export default Opportunity_9;
