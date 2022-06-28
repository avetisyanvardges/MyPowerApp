import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Background from '../../../assets/Image/background/questionBg.png';
import {styles} from '../../ExperienceQuestion/styles';
import {Button} from '../../../components/Button';

const ExperienceScreen = ({setScreen}) => {
  const {background, top_content, title, subtitle, bottom_content} = styles();

  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Personalize Your Experience</Text>
        <Text style={subtitle}>
          {'Now we are going to ask you some questions so we can make your' +
            'experience more personal.\n \nThese questions might seem silly, but don’t' +
            'worry, we have our reasons!'}
        </Text>
      </View>
      <View style={bottom_content}>
        <Button text={'Next'} onPress={() => setScreen('pizza')} />
      </View>
    </ImageBackground>
  );
};

export default ExperienceScreen;
