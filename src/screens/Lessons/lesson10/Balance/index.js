import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {balance} from '../../../../assets/Image/background/lesson10/Balance.svg';
import {Sizes} from '../../../../assets/RootStyles';
const Balance = ({setScreen}) => {
  const navigation = useNavigation();

  const {
    top_content,
    title,
    subtitle,
    background,
    bottom_content,
    center_content,
  } = styles();
  const text =
    'Have you ever had one of those phone calls where the person on the other side is clearly not listening to you? \n' +
    '\n' +
    'Whether a saleperson, telemarketer, or a family member, there is sometimes nothing more frustrating than not getting a word in edgewise. \n' +
    '\n' +
    'In the following exercise you will hear that type of phone call.  \n' +
    '\n' +
    "While this a recording and obviously can't react to your boundary setting, it is great practice for just repeating yourself clearly and succinctly.";
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
      source={require('../../../../assets/Image/background/lesson10/leson10Bg.png')}>
      <Header onPress={() => setScreen('recordEnd')} />
      <View style={top_content}>
        <SvgXml xml={balance} width={Sizes.size200} height={Sizes.size100} />
      </View>
      <View style={center_content}>
        <Text style={title}>Great [name].</Text>
        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={subtitle}>Back2Balance</Text>
          <Button
            text="Skip"
            containerStyle={{width: 155}}
            onPress={() => navigation.navigate('ElbowStrike10')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Balance;
