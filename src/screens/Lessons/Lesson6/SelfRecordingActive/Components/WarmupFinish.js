import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from '../../SelfRecordingActive/styles';
import {fullScreen, Padding, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const WarmupFinish = () => {
  const {container, title, subtitle, background} = styles();
  // useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //         Orientation.lockToPortrait();
  //     });
  //
  //     return unsubscribe;
  // }, [navigation]);
  const navigation = useNavigation();
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
          source={require('../../../../../assets/Image/background/lesson4/lesson4_3xBg.png')}>
          <ScrollView>
            <View
              style={{
                alignItems: 'center',
                marginTop: deviceInfo.small_screen ? 10 : 2,
              }}>
              <Text style={subtitle}>
                There are so many aspects to RUN other than actually running.
                RUN is really about making space between you and the problem. If
                you feel there is a threat of physical attack, get away as soon
                and as fast as you can. There are some clear guidelines too.
              </Text>
              <Text style={title}>Watch the following video</Text>
            </View>
            <Image
              source={require('../../../../../assets/Image/lessons/lesson6/Lesson6.png')}
              style={{
                width: deviceInfo.small_screen - 40,
                height: deviceInfo.small_screen ? Sizes.size320 : Sizes.size350,
                marginTop: deviceInfo.small_screen
                  ? Sizes.size20
                  : Sizes.size150,
              }}
              resizeMode="contain"
            />
            <View
              style={{
                height: deviceInfo.ios ? Sizes.size30 : Sizes.size200,
                justifyContent: 'center',
              }}>
              <Button
                text="Next"
                onPress={() => navigation.navigate('FightIf')}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

export default WarmupFinish;
