import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from '../../Promo/styles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Promo1 = ({setScreen}) => {
  const {
    top_content,
    title,
    subtitle,
    background,
    bottom_content,
    center_content,
  } = styles();
  const navigation = useNavigation();
  const text =
    'In most of our daily lives, the traffic light tells us when it is save to drive or cross the street. In this course the traffic light helps us to gauge how we are feeling in a given situation. The following game asks you to assign  a color – green, yellow, or red – to the scenarios that you will be watching. \n' +
    '\n' +
    'Green is to show that you feel safe.\n' +
    '\n' +
    'Yellow means that there is uncertainty or suspicion regarding your safety; maybe your intuition is telling you to use caution, to “raise your antennae”.\n' +
    '\n' +
    'Red would be used where you feel that this is not a safe situation for you. Maybe a boundary has been crossed, or you really are in danger. \n' +
    '\n' +
    'The traffic light helps you understand what your body is feeling by assigning a color to the feeling. ';
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson1/vector.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>Meet the “traffic light!”</Text>
      </View>
      <View style={center_content}>
        <ScrollView>
          <Text style={subtitle}>{text}</Text>
        </ScrollView>
      </View>

      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('promo3')} />
      </View>
    </ImageBackground>
  );
};

export default Promo1;
