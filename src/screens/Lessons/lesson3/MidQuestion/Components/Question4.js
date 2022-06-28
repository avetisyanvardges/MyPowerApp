import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../MidQuestion/styles';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Question4 = () => {
  const {
    top_content,
    title,
    subtitle,
    background,
    center_content,
    bottom_content,
  } = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <View style={top_content}>
        <Text style={title}>
          Many times we are able to do more than we originally thought we could.{' '}
        </Text>
      </View>
      <View style={center_content}>
        <Text style={subtitle}>
          {'Sometimes necessity is the test of our strength. \n' +
            '\n' +
            'No matter, what is important is we do what we can when we can. \n' +
            '\n' +
            'No guilt. \n' +
            '\n' +
            'No judgment. '}
        </Text>
      </View>
      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() =>
            navigation.navigate('BellyBreathing', {setScreen: 'belly2'})
          }
        />
      </View>
    </ImageBackground>
  );
};

export default Question4;
