import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';

import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';
import Orientation from 'react-native-orientation-locker';

const Discomfort = ({setScreen}) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const {container, title, background, subtitle} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <Text style={title}>Part of our discomfort. . .</Text>
      <Text style={subtitle}>
        with telling our stories is fear of embarrassment. It is not fun to
        share things that we feel we are not handling well. Not even to
        ourselves. Everyone fails every now and then. The goal is to learn from
        what didn’t go well and to figure out how to improve.
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size10,
        }}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('Pt_1')}
          containerStyle={{marginBottom: 50}}
        />
      </View>
    </ImageBackground>
  );
};

export default Discomfort;
