import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../MidQuestion/styles';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Question3 = ({setScreen}) => {
  const {
    top_content,
    title,
    subtitle,
    background,
    center_content,
    question_btns,
  } = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/questionBg.png')}>
      <View style={top_content}>
        <Text style={subtitle}>Great! One more and you are done. </Text>
        <Text style={title}>How about blowing out? </Text>
      </View>

      <View style={center_content}>
        <View style={{marginVertical: vScale(10), marginTop: 20}}>
          <Button
            containerStyle={question_btns}
            text={'Yes'}
            onPress={() => setScreen('question4')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Not Sure'}
            onPress={() => setScreen('question4')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'No'}
            onPress={() => setScreen('question4')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Question3;
