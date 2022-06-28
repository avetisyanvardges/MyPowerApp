import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from '../../PreVideo/styles';
import {fullScreen, Sizes} from '../../../../../assets/RootStyles';
import {hScale} from '../../../../../assets/RootStyles/Scale';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const SecondTechnique = ({setScreen}) => {
  const {top_content, title, background, bottom_content, subtitle} = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <View style={top_content}>
        <Text style={title}>Here is your second technique.</Text>
        <Text style={subtitle}>
          {'Just like your thigh is more powerful than your knee the area of your arm right above your elbow, especially when you arm is folded, is strong. \n' +
            '\n' +
            'Everytime you do an elbow strike, you actually will be hitting with this part of your arm.'}
        </Text>
      </View>
      <View>
        <Image
          source={require('../../../../../assets/Image/lessons/lesson3/Voice.png')}
          style={{
            width: fullScreen.width - 40,
            height: hScale(100),
            marginTop: 50,
          }}
          resizeMode="contain"
        />
      </View>

      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('ElbowStrike')}
        />
      </View>
    </ImageBackground>
  );
};

export default SecondTechnique;
