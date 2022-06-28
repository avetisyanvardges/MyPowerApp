import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../MidQuestion/styles';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';

const Question2 = ({setScreen}) => {
  const {
    top_content,
    title,
    subtitle,
    background,
    center_content,
    question_btns,
  } = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/questionBg.png')}>
      <View style={top_content}>
        <Text style={subtitle}>OK. Keep going. No wrong answers here.</Text>
        <Text style={title}>
          Were you able to take in more than you thought?
        </Text>
      </View>

      <View style={center_content}>
        <View style={{marginVertical: vScale(10), marginTop: 20}}>
          <Button
            containerStyle={question_btns}
            text={'Yes'}
            onPress={() => setScreen('question3')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Not Sure'}
            onPress={() => setScreen('question3')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'No'}
            onPress={() => setScreen('question3')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Question2;
