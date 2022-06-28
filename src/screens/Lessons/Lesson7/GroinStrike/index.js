import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';

const GroinStrike = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const {title, background, subtitle, subTitleBold} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson7/BG2.png')}>
      <View style={{marginBottom: 50}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <Text style={title}>Does a groin strike really hurt?</Text>
      <Text style={subtitle}>
        A strike to a man's groin can trigger tears, increased heart rate,
        sweating, abdominal pain and a drop in oxygen levels which leads to
        nausea, dizziness, and even collapse? Many men will instinctively fall
        and curl up into the fetal position as a reaction to the pain. And while
        you are pondering whether or not you can actually see yourself doing
        something to strike that groin, keep in mind that whoever is ignoring
        your boundary does not care about hurting you. Just sayin'.
      </Text>
      <View
        style={{
          flex: 1,
          marginBottom: deviceInfo.small_screen ? Sizes.size10 : Sizes.size40,
          justifyContent: 'flex-end',
        }}>
        <Button text="Next" onPress={() => navigation.navigate('Know7')} />
      </View>
    </ImageBackground>
  );
};

export default GroinStrike;
