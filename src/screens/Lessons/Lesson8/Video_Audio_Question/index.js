import React, {useEffect} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

const Video_Audio = ({setScreen}) => {
  const {title, background, questionContainer, question_btns} = styles();
  const navigation = useNavigation();
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <ScrollView>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <Text style={title}>
          What in the listener’s experience led her to think her friend might
          need to talk?
        </Text>
        <View style={questionContainer}>
          <View style={{marginVertical: vScale(10), marginTop: 50}}>
            <Button
              containerStyle={question_btns}
              text={'1. She herself had taken an IMPACT Course.'}
              onPress={() => navigation.navigate('Support')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={
                '2. She had recognized signs of a complicated past in her friend.'
              }
              onPress={() => navigation.navigate('Support')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'3. She was just a busy-body.'}
              onPress={() => navigation.navigate('Support')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'1 and 2'}
              onPress={() => navigation.navigate('Support')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Video_Audio;
