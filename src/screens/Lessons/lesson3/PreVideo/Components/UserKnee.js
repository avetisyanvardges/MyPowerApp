import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';
import {styles} from '../../MidQuestion/styles';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

const UserKnee = ({setScreen}) => {
  const navigation = useNavigation();

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  const backAction = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const {title, top_content, background, center_content, question_btns} =
    styles();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <View style={top_content}>
        <Text style={title}>How did that feel?</Text>
      </View>
      <View style={center_content}>
        <View style={{marginVertical: vScale(10), marginTop: 20}}>
          <Button
            containerStyle={question_btns}
            text={'Great! Got it! '}
            onPress={() => setScreen('secondTechnique')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Not Sure'}
            onPress={() => setScreen('notSure')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Not feeling it'}
            onPress={() => setScreen('notFeeling')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default UserKnee;
