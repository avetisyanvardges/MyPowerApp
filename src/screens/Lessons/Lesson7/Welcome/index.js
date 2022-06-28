import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Padding} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import Orientation from 'react-native-orientation-locker';
import {useSelector} from 'react-redux';

const Welcome = ({navigation}) => {
  const icon = useSelector(store => store.lesson_7.Images.icon);
  const {container, title, subtitle, welcome_image, background, btn_container} =
    styles();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={container}>
      <View
        style={{
          height: fullScreen.height,
        }}>
        <View style={{paddingHorizontal: Padding.horizontal}}>
          <Header onPress={() => navigation.goBack()} />
        </View>
        <ImageBackground
          style={background}
          source={require('../../../../assets/Image/background/lesson4/lesson4_3xBg.png')}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={title}>Welcome to Lesson 7</Text>
            <Text style={subtitle}>FIGHT: Physical Responses to Violence</Text>

            <Image
              source={{uri: icon}}
              style={welcome_image}
              resizeMode="contain"
            />
          </View>
          <View style={btn_container}>
            <Button text="Start" onPress={() => navigation.navigate('Intro')} />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Welcome;
