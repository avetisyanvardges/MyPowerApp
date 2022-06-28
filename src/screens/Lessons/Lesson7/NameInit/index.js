import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

const NameInit = ({setScreen}) => {
  const {title, background, questionContainer, question_btns} = styles();
  const navigation = useNavigation();
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson7/BG2.png')}>
      <View style={{paddingVertical: 20}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <Text style={title}>How did this technique feel?</Text>
      <View style={questionContainer}>
        <View style={{marginVertical: vScale(10), marginTop: 20}}>
          <Button
            containerStyle={question_btns}
            text={'Feeling good about this'}
            onPress={() => navigation.navigate('LetsPractice')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Not Sure'}
            onPress={() => navigation.navigate('HelpBox')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Icky Scary!'}
            onPress={() => navigation.navigate('HelpBox')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Other'}
            onPress={() => navigation.navigate('notHappy')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default NameInit;
