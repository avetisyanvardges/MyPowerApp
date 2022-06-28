import React, {useEffect} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';

const Challenging = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const {title, background, subtitle, subTitleBold, skip_content} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson7/BG2.png')}>
      <View>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <Text style={title}>While it is challenging...</Text>
      <Text style={subtitle}>
        to feel what it would be like to do the physical skills with 100% power,
        see if making the following statements your mantra while practicing
        helps:
      </Text>
      <Text style={subTitleBold}>
        With every “NO”! With every strike! I commit 100% of my power.
      </Text>
      <View
        style={{
          flex: 1,
          marginBottom: deviceInfo.small_screen ? Sizes.size30 : Sizes.size40,
          justifyContent: 'flex-end',
        }}>
        <Button text="Next" onPress={() => navigation.navigate('Textbox')} />
        <View style={skip_content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Textbox');
            }}>
            <Text style={subtitle}>Repeat Exercise</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Challenging;
