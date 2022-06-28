import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Image, Text, View} from 'react-native';
import {styles} from '../../Feedback3/styles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {icon} from '../../../../../assets/Image/background/lesson10/Arrow.svg';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {SvgXml} from 'react-native-svg';
import {Sizes} from '../../../../../assets/RootStyles';
const Arrow = ({setScreen}) => {
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
      source={require('../../../../../assets/Image/background/lesson10/lesson10secondBg.png')}>
      <Header onPress={() => setScreen('recordEnd')} rightIcon={true} />
      <View style={top_content}>
        <SvgXml
          xml={icon}
          width={Sizes.size200}
          height={Sizes.size60}
          style={{marginVertical: 30}}
        />
        <Text style={title}>Great! Good for you.</Text>
        <Text style={subtitle}>
          Remember, you can always go to Back2Balance to get grounded if you
          find this material triggering.{' '}
        </Text>
      </View>

      <View style={center_content}>
        <Image
          source={require('../../../../../assets/Image/background/lesson10/back2.png')}
          style={{width: 300, height: 300}}
        />
      </View>

      <View style={bottom_content}>
        <Button text="Next" onPress={() => setScreen('matter')} />
      </View>
    </ImageBackground>
  );
};

export default Arrow;
