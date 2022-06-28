import React, {useEffect} from 'react';

import {BackHandler, ImageBackground, View} from 'react-native';
import background from '../../../../assets/Image/background/lesson1/warmup_1.png';
import {styles} from '../styles';
import Header from '../components/header';
import Footer from '../components/footer';
import Meets from '../../../../assets/Image/lessons/lesson1/meet.svg';
import {SvgXml} from 'react-native-svg';
import {fullScreen} from '../../../../assets/RootStyles';

const Warmup = ({navigation, route}) => {
  const {container, content, bottom_content} = styles();
  const backAction = () => {
    navigation.navigate('IntroScreen');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={[content, {justifyContent: 'center', alignItems: 'center'}]}>
        <SvgXml xml={Meets} />
      </View>
      <ImageBackground
        source={background}
        style={{
          width: fullScreen.width,
          height: fullScreen.height,
          position: 'absolute',
          zIndex: 0,
          top: fullScreen.height / 2,
        }}
      />

      <Footer
        onPress={() => {
          navigation.navigate('Video_init', {screen: 'init'});
        }}
      />
    </View>
  );
};

export default Warmup;
