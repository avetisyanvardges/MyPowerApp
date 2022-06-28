import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Practice = ({setScreen}) => {
  const navigation = useNavigation();
  const {title, background, subtitle, skip_content} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <Text style={title}>
        Let’s practice telling a story with something easy.
      </Text>
      <Text style={subtitle}>
        What was special about your breakfast? Flavors? Texture? Timing? What is
        your favorite song and why? How does it make you feel? When did you
        first remember hearing it? What did you do yesterday? How did it make
        you feel? Was there anything special? Irritating? Who did you see or
        talk to?{' '}
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: deviceInfo.small_screen ? Sizes.size0 : Sizes.size30,
        }}>
        <Button
          text="Start Recording"
          onPress={() => navigation.navigate('RecordAudio')}
          containerStyle={{marginBottom: 10}}
        />
        <View style={skip_content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Know6');
            }}>
            <Text style={subtitle}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Practice;
