import React, {useState} from 'react';
import Background from '../../../assets/Image/background/bg.png';
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from '../../ExperienceQuestion/styles';
import {Button} from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const AbsolutelyScreen = () => {
  const {
    background,
    top_content,
    title,
    subtitle,
    center_content,
    input,
    innerText,
    sub_title,
    bottom_content,
  } = styles();
  const [name, setName] = useState('');
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground style={background} source={Background}>
        <View style={top_content}>
          <Text style={subtitle}>Favorite color?</Text>
          <Text style={sub_title}>
            You <Text style={innerText}>Absolutely</Text> have a favorite color.
            {'\n'}That’s awesome.
          </Text>
        </View>
        <View style={center_content}>
          <Text style={title}>
            How about sharing it{'\n'}
            with us?{' '}
          </Text>
          <TextInput
            maxLength={30}
            placeholder="My Favorite color is..."
            onChangeText={setName}
            style={input}
          />
        </View>
        <View style={bottom_content}>
          <Button
            text={'NEXT'}
            // disabled={!name.length}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default AbsolutelyScreen;
