import React, {useState} from 'react';
import Background from '../../../assets/Image/background/bg.png';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from '../styles';
import {Button} from '../../../components/Button';
import {deviceInfo} from '../../../assets/deviceInfo';
import {useDispatch} from 'react-redux';
import {makeAction} from '../../../store/makeAction';
import {SET_USER_FULLNAME} from '../../../types/USER_ACTIONS';

const NameScreen = ({setScreen}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const {background, content, title, subtitle, input_container, input} =
    styles();

  const next_press = () => {
    dispatch(makeAction(SET_USER_FULLNAME, name));
    setScreen('age');
  };

  return (
    <KeyboardAvoidingView behavior={deviceInfo.OS === 'ios' ? 'padding' : null}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground style={background} source={Background}>
          <View style={content}>
            <Text style={title}>First, Let’s get to know you</Text>
            <View style={input_container}>
              <Text style={subtitle}>My name is...</Text>
              <TextInput
                maxLength={50}
                placeholder="My full name"
                onChangeText={setName}
                style={input}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Button
                text={'NEXT'}
                disabled={!name.length}
                onPress={next_press}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default NameScreen;
