import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from '../../Promo/styles';
import {Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Promo3 = ({setScreen}) => {
  const {top_content, bottom_content, title, subtitle, sub_title, background} =
    styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson1/vector.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />

      <View style={top_content}>
        <Text style={[title, {textAlign: 'center'}]}>
          Time to use the traffic light.
        </Text>
        <Text style={[sub_title, {textAlign: 'center'}]}>
          Watch the scenario and assign a color; red, yellow or green, based on
          your perception of the situation.
        </Text>
        <Text style={subtitle}>
          Press on the color you find most appropriate to the scene.{' '}
        </Text>
      </View>
      <View style={{width: '100%'}}>
        <Image
          source={require('../../../../../assets/Image/lessons/lesson2/video_content.png')}
          style={{
            width: '100%',
            height: Sizes.size300,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text style={subtitle}>
        You can pause the game at any moment, just tap on the screen and you’re
        all set.
      </Text>

      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('Game')} />
      </View>
    </ImageBackground>
  );
};

export default Promo3;
