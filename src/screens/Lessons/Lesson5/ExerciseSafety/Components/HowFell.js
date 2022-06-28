import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../ExerciseSafety/styles';
import {Padding} from '../../../../../assets/RootStyles';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const HowFell = () => {
  const {container, title, background, questionContainer, question_btns} =
    styles();
  const navigation = useNavigation();

  useEffect(() => {}, []);
  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}>
        <Text style={title}>How did that feel?</Text>
        <View style={questionContainer}>
          <View style={{marginVertical: vScale(10), marginTop: 20}}>
            <Button
              containerStyle={question_btns}
              text={'Good'}
              onPress={() => navigation.navigate('FewPhrases')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Strange'}
              onPress={() => navigation.navigate('FewPhrases')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Not Sure'}
              onPress={() => navigation.navigate('FewPhrases')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HowFell;
