import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {styles} from '../../EmpoweringAffirmation/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const WarmupInstructions = () => {
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
          <Text style={title}>Lines for Leaving</Text>
          <Text style={subtitle}>
            Like we have said before, developing a spectrum of tools for
            responding to diverse situations is healthy. Let’s warm up some
            phrases that would be good for running, for leaving when you have
            had enough. You will see different phrases. Each one will be
            repeated 3 times. Say the phrases yourself during the pause between
            them. Here you go!
          </Text>
          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size150 : Sizes.size200,
              justifyContent: 'flex-end',
            }}>
            <Button
              text="Next"
              onPress={() => navigation.navigate('AudioActive')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default WarmupInstructions;
