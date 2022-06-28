import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {styles} from '../../GameInstruction/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Instructions2Screen = ({setScreen}) => {
  const {container, title, background, subtitle} = styles();
  const navigation = useNavigation();
  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson4/warmupBg3x.png')}>
        <ScrollView>
          <Text style={title}>Taking Space to THINK</Text>
          <Text style={subtitle}>
            Running is not just about physically running. "Running" can also be
            about giving myself the space I need to ground, think about how I am
            feeling, and to decide what I want to say. Once I have created the
            space to do that, then I can decide how and when I return to the
            situation to "get back on the mat" and that is going to be talked
            about in Lesson 15.
          </Text>
          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size200 : Sizes.size400,
              justifyContent: 'center',
            }}>
            <Button text="Next" onPress={() => setScreen('Screen3')} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Instructions2Screen;
