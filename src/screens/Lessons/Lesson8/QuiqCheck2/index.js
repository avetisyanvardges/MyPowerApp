import React, {useEffect} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

const QuiqChek2 = ({setScreen}) => {
  const {
    title,
    background,
    questionContainer,
    question_btns,
    subtitle,
    skip_content,
  } = styles();
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
        <Text style={title}>Quick Check in</Text>
        <Text style={subtitle}>2. Which formats do you prefer?</Text>
        <View style={questionContainer}>
          <View style={{marginVertical: vScale(10), marginTop: 50}}>
            <Button
              containerStyle={question_btns}
              text={'More audio!'}
              onPress={() => navigation.navigate('QuiqChek3')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'More video'}
              onPress={() => navigation.navigate('QuiqChek3')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'More text'}
              onPress={() => navigation.navigate('QuiqChek3')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Like the mix'}
              onPress={() => navigation.navigate('QuiqChek3')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default QuiqChek2;
