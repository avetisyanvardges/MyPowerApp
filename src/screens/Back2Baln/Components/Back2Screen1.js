import React from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';
import {Image, ImageBackground, Text} from 'react-native';
import {styles} from '../../Back2Baln/styles';
import {View} from 'react-native-animatable';
import {deviceInfo} from '../../../assets/deviceInfo';
import {Button} from '../../../components/Button';
import Back2 from '../../../assets/Image/Back2.png';

const Back2Screen1 = ({setScreen}) => {
  const {
    background,
    title,
    subtitle,
    top_content,
    center_content,
    bottom_content,
  } = styles();

  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Back2Baln</Text>
        <Text style={subtitle}>
          Back2Baln Exercises are designed to bring you back to the present, and
          to help you release old emotions while you are learning new tools.
        </Text>
      </View>
      <View style={center_content}>
        <Image
          source={Back2}
          style={{
            width: deviceInfo.small_screen ? 300 : 400,
            height: deviceInfo.small_screen ? 300 : 400,
          }}
        />
      </View>
      <View style={bottom_content}>
        <Button
          text={'Next'}
          onPress={() => {
            setScreen('back2_2');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Back2Screen1;
