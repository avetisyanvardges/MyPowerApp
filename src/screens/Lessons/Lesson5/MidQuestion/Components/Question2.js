import React from 'react';
import Background from '../../../../../assets/Image/background/commintmentBg.png';

import {ImageBackground, ScrollView, Text, TextInput} from 'react-native';
import {styles} from '../../MidQuestion/styles';
import {View} from 'react-native-animatable';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import {BorderStyles, Colors, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';

const Question2 = ({setScreen}) => {
  const {background, title} = styles();
  return (
    <ImageBackground style={background} source={Background}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />

      <ScrollView>
        <View style={{marginTop: deviceInfo.ios ? Sizes.size30 : Sizes.size40}}>
          <Text style={title}>Write a bit more about that.</Text>
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
      </ScrollView>
      <View
        style={{
          marginBottom: deviceInfo.small_screen ? Sizes.size40 : Sizes.size40,
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Button
          style={{width: 335}}
          text={'Next'}
          onPress={() => setScreen('question3')}
        />
      </View>
    </ImageBackground>
  );
};

export default Question2;
