import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';

const LetsPractice = () => {
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
      <Text style={title}>Let’s Practice</Text>
      <Text style={subtitle}>
        Choose which hard part of your body was used to hurt the soft part on
        theirs. Base your choices on the combination we just learned, Rear Hug -
        Low Elbows.
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
            navigation.navigate('Horizontal_defend_game', {scene: 'low_elbow'})
          }
        />
      </View>
    </ImageBackground>
  );
};

export default LetsPractice;
