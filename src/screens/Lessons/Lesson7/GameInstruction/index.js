import React, {useEffect, useState} from 'react';
import Instructions1Screen from './Components/Instruction1Screen';
import Orientation from 'react-native-orientation-locker';
import Instructions2Screen from './Components/Instruction2Screen';
import Instructions3Screen from './Components/Instruction3Screen';
import Instructions4Screen from './Components/Instruction4Screen';
import Header from '../../../../components/Header';
import {ImageBackground, View} from 'react-native';
import {styles} from './styles';

const GameInstructions = ({navigation, route}) => {
  const [current_screen, setScreen] = useState('Screen1');
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, [route]);

  const screens = {
    Screen1: (
      <Instructions1Screen setScreen={setScreen} navigation={navigation} />
    ),
    Screen2: (
      <Instructions2Screen setScreen={setScreen} navigation={navigation} />
    ),
    Screen3: (
      <Instructions3Screen setScreen={setScreen} navigation={navigation} />
    ),
    Screen4: (
      <Instructions4Screen setScreen={setScreen} navigation={navigation} />
    ),
  };
  const {container, background, btn_container} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson7/BG.png')}>
      <View style={container}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        {screens[current_screen]}
      </View>
    </ImageBackground>
  );
};

export default GameInstructions;
