import React, {useState} from 'react';
import Background from '../../../assets/Image/background/questionBg.png';
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from '../styles';
import {Button} from '../../../components/Button';
import {Sizes} from '../../../assets/RootStyles';
import {LOGIN_REQUEST} from '../../../types/USER_ACTIONS';
import {useDispatch} from 'react-redux';
import {makeAction} from '../../../store/makeAction';
import {useNavigation} from '@react-navigation/native';
import * as RootNavigation from '../../../RootNavigation';
const LoginScreen = ({setScreen}) => {
  const {
    background,
    top_content,
    center_content,
    title,
    input,
    sub_title,
    innerText,
    bottom_content,
  } = styles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('testuser');
  const navigation = useNavigation();
  const login = () => {
    console.log(45445454);
    const data = {
      email,
      password,
      cb: () => {
        setScreen('building');
      },
    };
    dispatch(makeAction(LOGIN_REQUEST, data));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground style={background} source={Background}>
        <View style={top_content}>
          <Text style={title}>Login</Text>
          <Text style={sub_title}>
            Please fill in the credentials you received for logging in.{' '}
          </Text>
          <View>
            <TextInput
              maxLength={50}
              value={email}
              placeholder="Email address / Phone number"
              onChangeText={setEmail}
              style={input}
            />
            <TextInput
              maxLength={50}
              secureTextEntry
              value={password}
              placeholder="Password"
              onChangeText={setPassword}
              style={input}
            />
          </View>
          <View>
            <Button
              containerStyle={{
                marginVertical: Sizes.size20,
              }}
              text={'Login'}
              onPress={() => login()}
            />
            <Text style={{textAlign: 'center', color: '#BD3150'}}>
              Reset password
            </Text>
          </View>
          <View style={bottom_content}>
            <Text style={{textAlign: 'center', fontSize: 12}}>
              By Logging into the app you are{'\n'} excepting our{' '}
              <Text style={innerText}>Terms & conditions</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
