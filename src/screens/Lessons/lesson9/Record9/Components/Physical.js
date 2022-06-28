import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from '../../Record9/styles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Physical = ({setScreen}) => {
  const navigation = useNavigation();

  const {top_content, title, subtitle, background, bottom_content} = styles();
  const text =
    'The following techniques show two different responses to someone grabbing your wrist. \n' +
    '\n' +
    'While there are many options for responding to this type of attack, it is up to you to decide the appropriate response based on the intent of the person grabbing your hand. \n' +
    '\n' +
    'Clearly, your mom grabbing your arm to pull you into a surprise party is a lot different than a date pulling you into an isolated room at a house party. ';
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
      source={require('../../../../../assets/Image/background/lesson9/Lesson9Bg.png')}>
      <Header onPress={() => setScreen('recordEnd')} />

      <View style={top_content}>
        <ScrollView>
          <Text style={title}>Let’s get physical!</Text>
          <Text style={subtitle}>{text}</Text>
        </ScrollView>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('VideoMine')} />
      </View>
    </ImageBackground>
  );
};

export default Physical;
