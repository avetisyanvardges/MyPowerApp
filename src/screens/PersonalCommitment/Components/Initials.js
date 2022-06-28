import React, {useState} from 'react';
import Background from '../../../assets/Image/background/commintmentBg.png';

import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from '../../PersonalCommitment/styles';
import {View} from 'react-native-animatable';
import {hScale} from '../../../assets/RootStyles/Scale';
import {Button} from '../../../components/Button';
import {Colors} from '../../../assets/RootStyles';
import {useSelector} from 'react-redux';

const InitialScreen = ({setScreen}) => {
  const user = useSelector(store => store?.user_data);
  const {
    background,
    title,
    subtitle,
    input,
    top_content,
    bottom_content,
    center_content,
  } = styles();
  const [initial, setInitial] = useState('');
  console.log(user);
  return (
    <TouchableWithoutFeedback
      style={background}
      onPress={() => Keyboard.dismiss()}>
      <ImageBackground style={background} source={Background}>
        <View style={top_content}>
          <Text style={title}>My Personal Commitment To the MyPwr App</Text>
        </View>
        <View style={center_content}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={subtitle}>• I</Text>
            <View
              style={{
                width: 275,
                height: 48,
                borderColor: '#000',
                borderWidth: 1,
                justifyContent: 'center',
                marginVertical: hScale(30),
                paddingLeft: 10,
              }}>
              <Text>{user.full_name}</Text>
            </View>
          </View>

          <Text style={subtitle}>Commit to completing this process.</Text>
          <Text style={subtitle}>• I choose to prioritize my self-care.</Text>
          <Text style={subtitle}>Commit to completing this process.</Text>
          <Text style={subtitle}>• If during the process, I feel fear or </Text>
          <Text style={subtitle}>
            anger, I commit to sharing these feelings with someone I trust,
            while striving to use them to strengthen myself{' '}
          </Text>
          <Text style={title}>Commit by signing your initials below:</Text>
          <View>
            <TextInput
              maxLength={5}
              placeholder="Your Initials"
              placeholderTextColor={Colors.black}
              onChangeText={setInitial}
              style={input}
            />
          </View>
        </View>
        <View style={bottom_content}>
          <Button text={'Next'} onPress={() => setScreen('important')} />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default InitialScreen;
