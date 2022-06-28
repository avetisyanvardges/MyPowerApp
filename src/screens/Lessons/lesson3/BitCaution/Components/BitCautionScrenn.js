import React, {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';

import {styles} from '../../BitCaution/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const BitCautionScreen = ({setScreen}) => {
  const {
    bottom_content,
    top_content,
    center_content,
    title,
    background,
    subtitle,
  } = styles();
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/bitBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>A bit of caution.</Text>
      </View>
      <View style={center_content}>
        <Text style={subtitle}>
          During this course you will be learning many physical skills. We
          strongly recommend you do NOT test these physical techniques with
          friends or family members. The goal of the techniques is to hurt the
          attacker in order to escape. When “testing them out” someone you care
          about might actually get hurt. The best way to practice is in an
          in-person ESD course. Reach out to us if you want help finding one in
          your area.{' '}
        </Text>
      </View>

      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('things')} />
      </View>
    </ImageBackground>
  );
};

export default BitCautionScreen;
