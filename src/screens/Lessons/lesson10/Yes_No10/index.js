import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {styles} from './styles';
import {
  BorderStyles,
  Colors,
  fullScreen,
  Sizes,
} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';
import Orientation from 'react-native-orientation-locker';
import * as Animatable from 'react-native-animatable';

const Yes_No10 = ({setScreen}) => {
  const navigation = useNavigation();
  const {
    title,
    background,
    top_content,
    bottom_content,
    container,
    logoContainer,
    center_content,
    flex_1,
  } = styles();
  const [visible, setVisible] = useState(false);

  const startAnimation = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const start = () => {
    setTimeout(async () => {
      await Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: fullScreen.height < 800 ? -Sizes.size300 : -Sizes.size340,
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: fullScreen.height < 800 ? 0.5 : 1,
          useNativeDriver: true,
        }),
      ]).start();
      setVisible(true);
    }, 500);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={background}
        source={require('../../../../assets/Image/background/lesson10/leson10Bg.png')}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <View style={top_content}>
          <Text style={title}>Did that feel different?</Text>
        </View>
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
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                marginTop: deviceInfo.small_screen
                  ? Sizes.size30
                  : Sizes.size40,
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <Button
                textStyle={{color: visible ? '#fff' : '#111'}}
                text="Yes"
                onPress={() => start()}
                containerStyle={{
                  marginBottom: 50,
                  width: deviceInfo.small_screen ? 130 : 160,
                  backgroundColor: visible ? 'red' : '#fff',
                  borderWidth: visible ? 0 : 1,
                }}
              />
              <Button
                textStyle={{color: '#111'}}
                text="No"
                onPress={() => navigation.navigate('RecordAudio10')}
                containerStyle={{
                  marginBottom: 50,
                  width: deviceInfo.small_screen ? 130 : 160,
                  backgroundColor: '#fff',
                  borderWidth: 1,
                }}
              />
            </View>
            {visible && (
              <Animatable.View
                animation="fadeInUpBig"
                delay={200}
                style={flex_1}>
                <View style={center_content}>
                  <Text style={title}>
                    In what way did setting boundaries feel different to you
                    this time around?
                  </Text>
                  <TextInput
                    style={{
                      padding: Sizes.size10,
                      backgroundColor: Colors.white,
                      borderWidth: BorderStyles.widths.border2,
                      borderColor: BorderStyles.color.gray,
                      borderRadius: BorderStyles.radius.xs,
                      minHeight: Sizes.size150,
                      maxHeight: Sizes.size250,
                    }}
                    multiline
                    textAlignVertical="top"
                    placeholder="Write here"
                  />
                </View>
              </Animatable.View>
            )}
          </Animated.View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Yes_No10;
