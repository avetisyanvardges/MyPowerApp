import React, {useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

const QuiqChek = ({setScreen}) => {
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
        <Text style={subtitle}>Please answer the following questions.</Text>
        <Text style={subtitle}>
          1.How have you been feeling about the lessons so far?
        </Text>
        <View style={questionContainer}>
          <View style={{marginVertical: vScale(10), marginTop: 50}}>
            <Button
              containerStyle={question_btns}
              text={'Great!'}
              onPress={() => navigation.navigate('QuiqChek2')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Not sure'}
              onPress={() => navigation.navigate('QuiqChek2')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Need to learn more'}
              onPress={() => navigation.navigate('QuiqChek2')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Out of sorts'}
              onPress={() => navigation.navigate('QuiqChek2')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Got me thinking'}
              onPress={() => navigation.navigate('QuiqChek2')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Scared and overwhelmed'}
              onPress={() => navigation.navigate('QuiqChek2')}
            />
          </View>
          <View style={skip_content}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelfRecording');
              }}>
              <Text style={subtitle}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default QuiqChek;
