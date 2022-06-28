import React from 'react';
import Background from '../../../../../assets/Image/background/lesson5/lesson5Exer.png';

import {ImageBackground, Text, TextInput} from 'react-native';
import {styles} from '../../HowYouFell/styles';
import {View} from 'react-native-animatable';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import {BorderStyles, Colors, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';

const Fellscreen2 = ({setScreen}) => {
  const {background, title} = styles();
  return (
    <ImageBackground style={background} source={Background}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={{marginTop: deviceInfo.ios ? Sizes.size30 : Sizes.size40}}>
        <Text style={title}>Write a bit more about that. </Text>
        <View style={{marginTop: vScale(16), zIndex: 999}}>
          <TextInput
            style={{
              padding: Sizes.size10,
              backgroundColor: Colors.white,
              borderWidth: BorderStyles.widths.border2,
              borderColor: BorderStyles.color.gray,
              borderRadius: BorderStyles.radius.xs,
              minHeight: Sizes.size150,
              maxHeight: Sizes.size250,
              justifyContent: 'flex-start',
            }}
            multiline
            textAlignVertical="top"
            placeholder="Write here"
          />
        </View>
      </View>
      <View
        style={{
          marginVertical: deviceInfo.small_screen
            ? Sizes.size150
            : Sizes.size350,
        }}>
        <Button
          style={{width: 335}}
          text={'Next'}
          onPress={() => setScreen('akExpert')}
        />
      </View>
    </ImageBackground>
  );
};

export default Fellscreen2;
