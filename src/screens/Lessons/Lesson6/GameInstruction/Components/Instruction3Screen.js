import React from 'react';
import {ImageBackground, ScrollView, Text, TextInput, View} from 'react-native';

import {styles} from '../../GameInstruction/styles';
import {
  BorderStyles,
  Colors,
  Padding,
  Sizes,
} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {vScale} from '../../../../../assets/RootStyles/Scale';

const Instructions3Screen = ({setScreen}) => {
  const {container, title, background, subtitle} = styles();
  const navigation = useNavigation();
  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson4/warmupBg3x.png')}>
        <ScrollView>
          <Text style={title}>
            What are your safe places? Name 3 possibilities.{' '}
          </Text>
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
              }}
              multiline
              textAlignVertical="top"
              placeholder="Write here"
            />
          </View>
          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size200 : Sizes.size400,
              justifyContent: 'center',
            }}>
            <Button text="Next" onPress={() => setScreen('Screen4')} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Instructions3Screen;
