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

const WarmupNext10 = ({setScreen}) => {
  const navigation = useNavigation();

  const {top_content, title, subtitle, background, bottom_content} = styles();
  const text =
    'Here are some elbow strikes to add to your growing collection of fight skills.  \n' +
    '\n' +
    'Watch the following physical skills videos and practice the moves!';
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
          <Text style={title}>What else can we do with our elbows? </Text>
          <Text style={subtitle}>{text}</Text>
        </ScrollView>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('RoundElbow')} />
      </View>
    </ImageBackground>
  );
};

export default WarmupNext10;
