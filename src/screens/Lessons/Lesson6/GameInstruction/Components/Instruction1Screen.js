import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {styles} from '../../GameInstruction/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Instructions1Screen = ({setScreen}) => {
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
          <Text style={title}>Understanding RUN</Text>
          <Text style={subtitle}>
            As said earlier in this course, you can’t measure how fast an
            attacker is, nor do you want to choose your shoes based on needing
            to defend yourself. You want to continue being wonderful you in all
            of your glory, AND you want to be able to defend yourself. More of
            that to come. What else do we mean when we say RUN is a core
            principle? And, how do I know when I should RUN? Have you ever asked
            yourself when you do and don’t feel good leaving a situation?
            Sometimes it helps to just sit and think through a plan for leaving
            when you are uncomfortable. Clearly, there are places that are
            harder to RUN from. Work. Home. A relationship. While these should
            be safe places, they aren’t always safe. Running from them needs a
            whole different strategy and plan. Here are some things to think
            about when you find yourself having a hard time leaving an
            uncomfortable situation: The Embarrassment Factor – I don’t want to
            embarrass them. I don’t want to embarrass myself. What will people
            think if I just leave? Peer-pressure - Am I staying because others
            want me to? Or do I really want to stay? Fear - What will happen if
            I leave? If I leave alone?
          </Text>
          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size200 : Sizes.size200,
              justifyContent: 'center',
            }}>
            <Button text="Next" onPress={() => setScreen('Screen2')} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Instructions1Screen;
