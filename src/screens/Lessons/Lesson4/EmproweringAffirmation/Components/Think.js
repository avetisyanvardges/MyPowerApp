import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {styles} from '../../EmproweringAffirmation/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ThinkScreen4 = () => {
  const {top_content,center_content,bottom_content, title, background, subtitle} = styles();
  const navigation = useNavigation();
  return (
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson4/warmupBg3x.png')}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <View style={top_content}>
          <Text style={title}>If you think about it... </Text>
        </View>
          <View style={center_content}>
            <ScrollView>

            <Text style={subtitle}>
              {"Just as sports fans get excited or sad at the outcome of a game, or an arts enthusiast gets moved by a performance, our bodies are both sensitive and excited as to what is going on in our surroundings. \n" +
              "\n" +
              "Sometimes more sensitive than others, and sometimes more sensitive than we would want them to be.\n" +
              " \n" +
              "Sometimes the stimulus is too much to handle so we learn to \"turn down the volume\" in order to survive. \n" +
              "\n" +
              "Many times this interferes with hearing our intuition. \n" +
              "\n" +
              "A big part of this course is to learn how to keep your intuition turned on and manageable at the same time. \n" +
              "\n" +
              "As this course progresses the topics and scenarios will get more and more complicated and potentially triggering. \n" +
              "\n" +
              "While we have talked about the Back2Baln exercises, we encourage you to try a few and figure out which ones feel right for you. \n" +
              "\n" +
              "Personally, I like to do a quick shake out. It goes like this:"}
            </Text>
            </ScrollView>

          </View>

          <View
            style={bottom_content}>
            <Button
              text="Next"
              onPress={() => navigation.navigate('ShakeIt')}
            />
          </View>
      </ImageBackground>
  );
};

export default ThinkScreen4;
