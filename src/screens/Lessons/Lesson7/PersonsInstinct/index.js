import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Padding, Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';

const PersonsInstinct = () => {
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
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <Text style={title}>Often a person's instinct...</Text>
      <Text style={subtitle}>
        is to attempt to move away from an attacker and create distance. There
        are however times when it is more effective to first move in closer.
        Moving in to get away. As you saw in the previous technique, the
        instructor moved in closer with each strike, making her more powerful.
        Once the attacker is neutralized, running away becomes much easier. Here
        is your next technique which utilizes this same concept.
      </Text>
      <View
        style={{
          flex: 1,
          marginBottom: deviceInfo.small_screen ? Sizes.size10 : Sizes.size40,
          justifyContent: 'flex-end',
        }}>
        <Button text="Next" onPress={() => navigation.navigate('LowElbows')} />
      </View>
    </ImageBackground>
  );
};

export default PersonsInstinct;
