import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../MidQuestion/styles';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';

const Question1 = ({setScreen}) => {
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
        <Text style={subtitle}>
          Please answer these short questions as honestly as you can.{' '}
        </Text>
        <Text style={title}>How did that feel? </Text>
      </View>

      <View style={center_content}>
        <View style={{marginVertical: vScale(10), marginTop: 20}}>
          <Button
            containerStyle={question_btns}
            text={'Good'}
            onPress={() => setScreen('question2')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Not Sure'}
            onPress={() => setScreen('question2')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Didn’t like it'}
            onPress={() => setScreen('question2')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Question1;
