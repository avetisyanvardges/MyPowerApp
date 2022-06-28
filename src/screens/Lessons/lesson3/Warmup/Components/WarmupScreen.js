import React, {useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {styles} from '../../Warmup/styles';
import {
  BorderStyles,
  Colors,
  Padding,
  Sizes,
} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {hScale, vScale} from '../../../../../assets/RootStyles/Scale';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const WarmupScreen = ({setScreen}) => {
  const {
    top_content,
    title,
    background,
    center_content,
    bottom_content,
    subtitle,
    skip_content,
  } = styles();
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
        <ImageBackground
          style={background}
          source={require('../../../../../assets/Image/background/lesson3/bitBg.png')}>
          <Header onPress={() => navigation.goBack()} rightIcon={true} />
          <View style={top_content}>
            <Text style={title}>
              Share with yourself a story where you used some of these
              strengths.{' '}
            </Text>
          </View>
          <View style={center_content}>
            <TextInput
              style={{
                padding: hScale(10),
                backgroundColor: Colors.white,
                borderWidth: BorderStyles.widths.border2,
                borderColor: BorderStyles.color.gray,
                borderRadius: BorderStyles.radius.xs,
                minHeight: vScale(130),
                maxHeight: vScale(250),
                justifyContent: 'flex-start',
              }}
              multiline
              textAlignVertical="top"
              placeholder="Write here"
            />
          </View>

          <View style={bottom_content}>
            <Button text="Next" onPress={() => setScreen('goodJob')} />
            <View style={skip_content}>
              <TouchableOpacity onPress={() => navigation.navigate('Know')}>
                <Text style={subtitle}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default WarmupScreen;
