import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {styles} from '../../EmpoweringAffirmation/styles';
import {Padding} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ThinkScreen4 = () => {
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
          <Text style={title}>If you think about it... </Text>
          <Text style={subtitle}>
            Just as sports fans get excited or sad at the outcome of a game, or
            an arts enthusiast gets moved by a performance, our bodies are both
            sensitive and excited as to what is going on in our surroundings.
            Sometimes more sensitive than others, and sometimes more sensitive
            than we would want them to be. Sometimes the stimulus is too much to
            handle so we learn to "turn down the volume" in order to survive.
            Many times this interferes with hearing our intuition. A big part of
            this course is to learn how to keep your intuition turned on and
            manageable at the same time. As this course progresses the topics
            and scenarios will get more and more complicated and potentially
            triggering. While we have talked about the Back2Baln exercises, we
            encourage you to try a few and figure out which ones feel right for
            you. Personally, I like to do a quick shake out. It goes like this:{' '}
          </Text>
          <View
            style={{
              height: deviceInfo.ios ? vScale(80) : vScale(200),
              justifyContent: 'center',
            }}>
            <Button
              text="Next"
              onPress={() => navigation.navigate('ShakeIt')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ThinkScreen4;
