import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../Feedbavk/styles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {Icon} from '../../../../../assets/Image/background/lesson10/Vector.svg';
import {BorderStyles, Colors, Sizes} from '../../../../../assets/RootStyles';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {icon} from '../../../../../assets/Image/background/lesson10/Arrow.svg';
const Matter = ({setScreen}) => {
  const navigation = useNavigation();

  const {
    top_content,
    skip_content,
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
      source={require('../../../../../assets/Image/background/lesson10/leson10Bg.png')}>
      <Header onPress={() => setScreen('recordEnd')} rightIcon={true} />
      <View style={top_content}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SvgXml
            style={{marginRight: 20}}
            xml={Icon}
            width={Sizes.size30}
            height={Sizes.size30}
          />
          <Text style={title}>Matter of Opinion </Text>
        </View>
      </View>

      <View style={center_content}>
        <Text style={subtitle}>
          When walking out of a crappy day at work, that ended not how I wanted
          and going home to God knows how many dishes, laundry and no food for
          dinner, I should be able to walk however I am feeling. It isn’t about
          walking “assertively.” I don’t always feel that way, and no matter
          what, I don’t deserve to be attacked. Period. Do I want to be able to
          stand in an assertive manner when I need to stand up for myself? Yes!
          Absolutely. AND do I want to have to do it every single moment of
          every day of my life? No way! And no matter what, I don’t deserve to
          be attacked or abused.
        </Text>
      </View>

      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('Know10')} />
      </View>
    </ImageBackground>
  );
};

export default Matter;
