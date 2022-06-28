import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Padding, Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const SuccessStory = () => {
  const {container, title, subtitle, sub_title, background} = styles();
  const text =
    'My friends and I were riding on a very crowded train. At the beginning of the ride I felt someone was touching my butt. I thought it happened by mistake because of the overcrowding. After a few seconds I felt him touch me again, more intentionally. \n' +
    '\n' +
    'I immediately remembered the self-defense classes I take every week and realized that the situation was no longer green and safe and what was happening here was yellow. I turned to the guy and told him in a strong and assertive way to stop touching my butt. He stopped.';
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={background}
        source={require('../../../../assets/Image/background/lesson2/storyBg.png')}>
        <View style={{paddingHorizontal: Padding.horizontal}}>
          <Header onPress={() => navigation.goBack()} />
        </View>

        <Text style={title}>I thought it was a mistake!</Text>
      </ImageBackground>
      <View style={container}>
        <Text style={sub_title}>{text}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: Sizes.size40,
          paddingHorizontal: 20,
        }}>
        <Button text="Next" onPress={() => navigation.navigate('Outro')} />
      </View>
    </View>
  );
};

export default SuccessStory;
