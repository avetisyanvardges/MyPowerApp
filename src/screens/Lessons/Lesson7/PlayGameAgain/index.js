import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Padding, Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';

const PlayGameAgain = () => {
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
      <Text style={title}>Let’s play the game again. .</Text>
      <Text style={subtitle}>
        This time choose which hard part on my body was used to hurt the soft
        part on theirs.   Based on the combination you just learned:
        <Text style={subTitleBold}> Palm-Heel, Knee, Knee.</Text>
      </Text>
      <View
        style={{
          flex: 1,
          marginBottom: deviceInfo.small_screen ? Sizes.size30 : Sizes.size40,
          justifyContent: 'flex-end',
        }}>
        <Button
          text="Next"
          onPress={() =>
            navigation.navigate('Horizontal_defend_game', {scene: 'heel_knee'})
          }
        />
      </View>
    </ImageBackground>
  );
};

export default PlayGameAgain;
