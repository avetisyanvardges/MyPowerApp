import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Padding, Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';

const Voice = ({navigation}) => {
  const {
    center_content,
    bottom_content,
    top_content,
    title,
    subtitle,
    background,
  } = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson3/challengeBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>Time for practicing your loud voice. </Text>
      </View>
      <View style={center_content}>
        <Image
          source={require('../../../../assets/Image/lessons/lesson3/Voice.png')}
          style={{
            width: fullScreen.width - 40,
            height: deviceInfo.small_screen ? Sizes.size80 : Sizes.size100,
            marginTop: vScale(50),
          }}
          resizeMode="contain"
        />
        <Text style={title}>Remember!</Text>
        <Text style={subtitle}>
          {'You might want to find a private space where you can make noise during these lessons. \n' +
            '\n' +
            'This symbol will let you know when you will be using your loud voice. \n' +
            '\n' +
            'We hope you learn to enjoy making noise!'}
        </Text>
      </View>
      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('MarchInPlace')}
        />
      </View>
    </ImageBackground>
  );
};

export default Voice;
