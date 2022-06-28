import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

import {styles} from '../../EmproweringAffirmation/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const WarmupScreen5 = () => {
  const {container, red_title, background, subtitle} = styles();
  const navigation = useNavigation();
  const text =
    'Now that you have the basic safety stance down, let’s see how we can move safely keeping that stance and maintaining balance. \n' +
    '\n' +
    'Stand tall for a moment and just let your hands hang loose. ';
  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}>
        <Text style={red_title}>Moving in Safety Stance </Text>
        <Text style={subtitle}>{text}</Text>
        <View
          style={{
            flex: 1,
            marginBottom: deviceInfo.small_screen ? Sizes.size80 : Sizes.size40,
            justifyContent: 'flex-end',
          }}>
          <Button
            text="Next"
            onPress={() => navigation.navigate('VideoDefault')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default WarmupScreen5;
