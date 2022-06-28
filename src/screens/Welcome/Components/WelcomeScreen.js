import React from 'react';
import Background from '../../../assets/Image/background/videoBg.png';
import PlayBtn from '../../../assets/Image/video/videoBtn.png';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles';

const WelcomeScreen = ({setScreen}) => {
  const {background, videoContainer, title, videoBtn} = styles();
  return (
    <ImageBackground style={background} source={Background}>
      <View style={videoContainer}>
        <Text style={title}>Welcome to MyPwr!</Text>
        <TouchableOpacity onPress={() => setScreen('play_video')}>
          <Image style={videoBtn} source={PlayBtn} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
