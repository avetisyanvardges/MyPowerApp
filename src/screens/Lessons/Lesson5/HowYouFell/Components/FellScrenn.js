import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../HowYouFell/styles';
import {Padding} from '../../../../../assets/RootStyles';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';

const FellScreen = ({setScreen}) => {
  const {container, title, background, questionContainer, question_btns} =
    styles();

  return (
    <View>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson5/lesson5Exer.png')}>
        <Text style={title}>How did it feel using your voice in this way?</Text>
        <View style={questionContainer}>
          <View style={{marginVertical: vScale(10), marginTop: 20}}>
            <Button
              containerStyle={question_btns}
              text={'Uncomfortable'}
              onPress={() => setScreen('fellYou2')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Not Sure'}
              onPress={() => setScreen('fellYou2')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Empowering'}
              onPress={() => setScreen('fellYou2')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FellScreen;
