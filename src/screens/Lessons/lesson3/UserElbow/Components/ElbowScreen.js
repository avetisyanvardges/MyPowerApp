import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../MidQuestion/styles';
import {Padding} from '../../../../../assets/RootStyles';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

const ElbowScreen = ({setScreen}) => {
  const {
    top_content,
    title,
    center_content,
    background,
    questionContainer,
    question_btns,
  } = styles();
  const navigation = useNavigation();
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>How did that feel?</Text>
      </View>
      <View style={center_content}>
        <View style={{marginVertical: vScale(10), marginTop: 20}}>
          <Button
            containerStyle={question_btns}
            text={'Good to go!'}
            onPress={() => navigation.navigate('BitCaution')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'A bit triggered '}
            onPress={() => setScreen('triggeret')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Not happy at all'}
            onPress={() => setScreen('notHappy')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ElbowScreen;
