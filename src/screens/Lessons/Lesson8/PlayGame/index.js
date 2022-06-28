import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';

const PlayGame = ({setScreen}) => {
  const navigation = useNavigation();
  const {title, background, subtitle} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/playGameBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={title}>Let’s play a game!</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginTop: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
          zIndex: 1,
        }}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('Game8')}
          containerStyle={{marginBottom: 50}}
        />
      </View>
      <Image
        style={{
          width: deviceInfo.small_screen ? 325 : 400,
          height: deviceInfo.small_screen ? 330 : 450,
          position: 'absolute',
          bottom: 0,
        }}
        source={require('../../../../assets/Image/background/lesson8/starImage.png')}
      />
    </ImageBackground>
  );
};

export default PlayGame;
