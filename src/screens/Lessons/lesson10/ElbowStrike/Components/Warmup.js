import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from '../../ElbowStrike/styles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Warmup10 = ({setScreen}) => {
  const navigation = useNavigation();

  const {top_content, title, subtitle, background, bottom_content} = styles();
  const text =
    'Even the most assertive and clearly set boundary, might still be ignored. You have other options! Run, hang up the phone, walk away, or end the relationship. \n' +
    '\n' +
    'If the situation has escalated to red or even orange and physically leaving is not an option - then fight. ';
  const backAction = () => {
    setScreen('recordEnd');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson10/lesson10secondBg.png')}>
      <Header onPress={() => setScreen('recordEnd')} rightIcon={true} />

      <View style={top_content}>
        <ScrollView>
          <Text style={title}>Elbow Strikes</Text>
          <Text style={subtitle}>{text}</Text>
        </ScrollView>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('nextWarmup')} />
      </View>
    </ImageBackground>
  );
};

export default Warmup10;
