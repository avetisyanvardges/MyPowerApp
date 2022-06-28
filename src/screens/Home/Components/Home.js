import React from 'react';
import Background from '../../../assets/Image/background/Hombg.png';
import {ImageBackground, Pressable} from 'react-native';
import {styles} from '../styles';
import * as RootNavigation from '../../../RootNavigation';

const HomeScreen = () => {
  const {background} = styles();
  return (
    <Pressable onPress={() => RootNavigation.navigate('Lessons')}>
      <ImageBackground
        style={background}
        source={Background}
        resizeMode={'contain'}
      />
    </Pressable>
  );
};

export default HomeScreen;
