import React, {useEffect, useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import Logo from '../../assets/Image/icon.png';
import {styles} from './styles';
import Intro from '../Intro';
import * as Animatable from 'react-native-animatable';
import {fullScreen, Sizes} from '../../assets/RootStyles';

const SplashScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const startAnimation = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setTimeout(async () => {
      await Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: fullScreen.height < 800 ? -Sizes.size240 : -Sizes.size260,
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: fullScreen.height < 800 ? 0.5 : 0.7,
          useNativeDriver: true,
        }),
      ]).start();
      setVisible(true);
    }, 500);
  }, []);

  const {flex_1, container, logoContainer, logoS} = styles();

  return (
    <View style={container}>
      <Animated.View
        style={[
          logoContainer,
          {
            transform: [
              {
                translateY: startAnimation,
              },
            ],
          },
        ]}>
        <Animatable.View animation="fadeIn">
          <Animated.Image
            source={Logo}
            style={[logoS, {transform: [{scale: scaleLogo}]}]}
            resizeMode={'contain'}
          />
        </Animatable.View>
      </Animated.View>
      {visible && (
        <Animatable.View animation="fadeInUpBig" delay={200} style={flex_1}>
          <Intro />
        </Animatable.View>
      )}
    </View>
  );
};

export default SplashScreen;
