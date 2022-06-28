import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Background from '../../../assets/Image/background/questionBg.png';
import {styles} from '../styles';
import {Button} from '../../../components/Button';
import {vScale} from '../../../assets/RootStyles/Scale';
import {Toast} from '../../../components/Toast';

const PetScreen = ({setScreen}) => {
  const {
    background,
    top_content,
    title,
    sub_title,
    bottom_content,
    pet_btn,
    toasts_screen_btn,
  } = styles();
  const [pet, setPet] = useState(false);
  useEffect(() => {
    if (pet) {
      setTimeout(() => {
        setScreen('color');
      }, 500);
    }
  }, [pet]);

  return (
    <ImageBackground style={background} source={Background}>
      {pet && <Toast text="Cool!" />}
      <View style={top_content}>
        <Text style={sub_title}>
          How about telling us a little bit about yourself?{' '}
        </Text>
        <Text style={title}>Are you a dog person or a cat person?</Text>
      </View>
      <View style={bottom_content}>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={toasts_screen_btn}
            text={'Dog'}
            onPress={() => setPet('pet')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={toasts_screen_btn}
            text={'Cat'}
            onPress={() => setPet('pet')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={toasts_screen_btn}
            text={'Other'}
            onPress={() => setPet('pet')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={toasts_screen_btn}
            text={'Not an animal person at all'}
            onPress={() => setPet('pet')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default PetScreen;
