import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Background from '../../../assets/Image/background/questionBg.png';
import {styles} from '../styles';
import {Button} from '../../../components/Button';
import {vScale} from '../../../assets/RootStyles/Scale';
import {Toast} from '../../../components/Toast';
import {useNavigation} from '@react-navigation/native';

const ColorScreen = ({setScreen}) => {
  const {
    background,
    top_content,
    title,
    sub_title,
    bottom_content,
    toasts_screen_btn,
  } = styles();
  const [color, setColor] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (color) {
      setTimeout(() => {
        if (color === 'absolutely') {
          setScreen('absolutely');
        } else {
          setColor('color');
          navigation.navigate('Login');
        }
      }, 500);
    }
  }, [color]);
  return (
    <ImageBackground style={background} source={Background}>
      {color && <Toast text="Nice!" />}
      <View style={top_content}>
        <Text style={sub_title}>
          How about telling us a little bit about yourself?{' '}
        </Text>
        <Text style={title}>Favorite color?</Text>
      </View>
      <View style={bottom_content}>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={toasts_screen_btn}
            text={'Absolutely'}
            onPress={() => setColor('absolutely')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={toasts_screen_btn}
            text={'Nah'}
            onPress={() => setColor('color')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={toasts_screen_btn}
            text={'Love colors!!!!'}
            onPress={() => setColor('color')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ColorScreen;
