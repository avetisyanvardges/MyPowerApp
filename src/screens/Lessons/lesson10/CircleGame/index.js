import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const CircleGame = ({setScreen}) => {
  const navigation = useNavigation();

  const {top_content, title, subtitle, background, bottom_content} = styles();
  const text =
    'Have you ever had one of those phone calls where the person on the other side is clearly not listening to you? \n' +
    '\n' +
    'Whether a saleperson, telemarketer, or a family member, there is sometimes nothing more frustrating than not getting a word in edgewise. \n' +
    '\n' +
    'In the following exercise you will hear that type of phone call.  \n' +
    '\n' +
    "While this a recording and obviously can't react to your boundary setting, it is great practice for just repeating yourself clearly and succinctly.";
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
      source={require('../../../../assets/Image/background/lesson10/leson10Bg.png')}>
      <Header onPress={() => setScreen('recordEnd')} />

      <View style={top_content}>
        <ScrollView>
          <Text style={title}>Circle of Refusal Game!</Text>
          <Text style={subtitle}>{text}</Text>
        </ScrollView>
      </View>
      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('IncomingCall')}
        />
      </View>
    </ImageBackground>
  );
};

export default CircleGame;
