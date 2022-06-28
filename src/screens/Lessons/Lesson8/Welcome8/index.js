import React, {useEffect} from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {fullScreen, Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Welcome8 = ({navigation}) => {
  const {container, title, subtitle, background} = styles();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <View>
        <Header onPress={() => navigation.goBack()} />
      </View>
      <ScrollView scrollEnabled={fullScreen.height < 800 ? true : false}>
        <View style={{alignItems: 'center'}}>
          <Text style={title}>Welcome to Lesson 8</Text>
          <Text style={subtitle}>TELL: Sharing, Releasing, and Grounding</Text>
        </View>
        <Image
          source={require('../../../../assets/Image/background/lesson8/welcome8.png')}
          style={{
            width: fullScreen.width - 40,
            height: deviceInfo.small_screen ? Sizes.size300 : Sizes.size350,
            marginTop: Sizes.size50,
          }}
          resizeMode="contain"
        />
      </ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
        }}>
        <Button
          text="Start"
          onPress={() => navigation.navigate('IntroScreen8')}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome8;
