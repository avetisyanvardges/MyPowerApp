import React from 'react';
import {styles} from './styles';
import {Image, ImageBackground, Text, View} from 'react-native';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';

const EmpoweringAffirmation = ({navigation}) => {
  const {
    container,
    challenge_text,
    title,
    subtitle,
    background,
    fight_girl,
    text_container,
    btn_container,
  } = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson7/BG.png')}>
      <View style={container}>
        <Header onPress={() => navigation.goBack()} />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={title}>Empowering Affirmation</Text>
          <Text style={subtitle}>Repeat the following 5 times.</Text>
        </View>
        <View style={text_container}>
          <Text style={challenge_text}>My body! My rules!</Text>
        </View>
        <Image
          source={require('../../../../assets/Image/lessons/lesson7/fight_girl.png')}
          style={fight_girl}
        />
        <View style={btn_container}>
          <Button
            text="Next"
            onPress={() => navigation.navigate('GameInstructions')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default EmpoweringAffirmation;
