import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import mirror from '../../../../assets/Image/background/lesson9/mirror.svg';
import {Sizes} from '../../../../assets/RootStyles';

const MirrorChallenge = ({setScreen}) => {
  const navigation = useNavigation();

  const {
    top_content,
    center_content,
    title,
    subtitle,
    background,
    bottom_content,
  } = styles();
  const text =
    'For this part of the lesson, you will be asked to look into the “mirror” and make an expression to show the emotion displayed on the screen. \n' +
    '\n' +
    'We will use your camera for a selfie :)\n' +
    '\n' +
    'Or if you prefer, you can use a mirror nearby.';
  const backAction = () => {
    setScreen('recordEnd');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson9/MirrorchallengeBg.png')}>
      <Header onPress={() => setScreen('recordEnd')} />
      <View style={top_content}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <SvgXml xml={mirror} width={Sizes.size100} height={Sizes.size100} />
          <Text style={title}>Mirror Challenge</Text>
        </View>

        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button
          text="Lets go"
          onPress={() => navigation.navigate('Photo_game')}
        />
      </View>
    </ImageBackground>
  );
};

export default MirrorChallenge;
