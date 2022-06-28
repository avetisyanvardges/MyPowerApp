import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../Promo/styles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Promo2 = ({setScreen}) => {
  const {
    top_content,
    bottom_content,
    title,
    subtitle,
    subtitle_bold,
    sub_title,
    background,
  } = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson1/vector.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />

      <View style={top_content}>
        <Text style={subtitle}>Have you ever asked yourself:</Text>
        <Text style={title}>"Am I making a big deal out of nothing?"</Text>
        <Text style={subtitle_bold}>
          If you feel like something is a big deal, there is a reason that you
          feel that way. Pay attention to it.
        </Text>
        <Text style={subtitle}>
          Just like we paid attention to how our bodies felt in the warmup,
          let's now pay attention to how it feels as we watch the following
          scenarios.{' '}
        </Text>
      </View>

      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('promo1')} />
      </View>
    </ImageBackground>
  );
};

export default Promo2;
