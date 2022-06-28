import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../UserElbow/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../../assets/deviceInfo';

const TriggeretScreen = ({setScreen}) => {
  const {
    top_content,
    title,
    skip_content,
    background,
    subtitle,
    bottom_content,
    center_content,
  } = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}> You answered “A bit triggered”</Text>
        <Text style={subtitle}>
          Maybe it's a good idea for you to check out one of the Back2Balance
          exercises?
        </Text>
      </View>
      <View style={center_content}>
        <Image
          style={{width: '100%', height: 300}}
          source={require('../../../../../assets/Image/lessons/lesson3/triggeteImage.png')}
        />
      </View>

      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => {
            navigation.navigate('BitCaution');
          }}
        />
        <View style={skip_content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BitCaution');
            }}>
            <Text style={subtitle}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TriggeretScreen;
