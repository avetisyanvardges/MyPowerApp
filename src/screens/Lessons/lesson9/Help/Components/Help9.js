import React from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';

import {styles} from '../styles';
import {BorderStyles, Colors, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Help9 = ({setScreen}) => {
  const {background, title, top_content, center_content, bottom_content} =
    styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson9/MirrorchallengeBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>How can we help?</Text>
      </View>

      <View style={center_content}>
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
      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('opportunity')} />
      </View>
    </ImageBackground>
  );
};

export default Help9;
