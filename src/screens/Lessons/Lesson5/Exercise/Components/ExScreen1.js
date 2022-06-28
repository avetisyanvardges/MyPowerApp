import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from '../../WarmupGreatScreens/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const ExScreen1 = ({setScreen}) => {
  const {container, subtitle, redTitle, title, background, content} = styles();
  const navigation = useNavigation();

  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Text style={title}>YELL... </Text>
            <Text style={subtitle}>
              is not just about actually yelling, though that is good, rather it
              is about making yourself heard. Alos, one of the reasons we
              encourage everyone to yell while they are striking is so that we
              make sure they are breathing. It is really hard to yell without
              taking a breath, and it is even harder to keep fighting, if need
              be, if you run out of oxygen. So, if you need to keep fighting to
              get home safely, you need oxygen. You need to keep breathing. Now
              you have oxygen. Great! Time to pick your words. One thing we know
              about perpetrators who are committed to their inappropriate
              actions is that they not going to get smarter just because you
              found a fancier way to say "Leave me alone!"{' '}
            </Text>
          </View>
          <View
            style={{
              marginVertical: deviceInfo.small_screen
                ? Sizes.size100
                : Sizes.size100,
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Button text="Next" onPress={() => setScreen('exAudio')} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ExScreen1;
