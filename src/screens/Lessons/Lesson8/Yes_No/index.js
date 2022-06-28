import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Yes_No = ({setScreen}) => {
  const navigation = useNavigation();
  const {title, background, subtitle} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <Text style={title}>
        Have you ever held a story that you really wanted to share?
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          marginTop: deviceInfo.small_screen ? Sizes.size30 : Sizes.size40,
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <Button
          text="Yes"
          onPress={() => navigation.navigate('YesScreen8')}
          containerStyle={{
            marginBottom: 50,
            width: deviceInfo.small_screen ? 130 : 160,
          }}
        />
        <Button
          text="No"
          onPress={() => navigation.navigate('Formula')}
          containerStyle={{
            marginBottom: 50,
            width: deviceInfo.small_screen ? 130 : 160,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Yes_No;
