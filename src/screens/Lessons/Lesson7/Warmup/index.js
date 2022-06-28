import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';

const Warmup = () => {
  const {
    container,
    title,
    background,
    subtitle,
    btn_container,
    headline_6,
    body_2,
  } = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson7/BG2.png')}>
      <View style={container}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <Text style={title}>What is a Palm-heel Strike?</Text>
        <Text style={subtitle}>
          {'...and why do we teach that instead of a fist?\n' +
            '\n' +
            'Watch the following video to find out! \n'}
        </Text>
        <Image
          source={require('../../../../assets/Image/lessons/lesson3/Voice.png')}
          style={{
            width: fullScreen.width - 40,
            height: hScale(100),
            marginTop: vScale(50),
          }}
          resizeMode="contain"
        />
        <Text style={headline_6}>Remember!</Text>
        <Text style={body_2}>
          you will be using your loud voice. We hope you learn to enjoy making
          noise!
        </Text>
        <View style={btn_container}>
          <Button
            text="Next"
            onPress={() =>
              navigation.navigate('Videos', {screen: 'Palm_heel_Fist'})
            }
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Warmup;
