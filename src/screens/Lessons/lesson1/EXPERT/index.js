import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../components/header';
import {Button} from '../../../../components/Button';
import {Sizes} from '../../../../assets/RootStyles';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';

const EXPERT = ({navigation}) => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  const {container, footer, text_container, text, skip_content} = styles();

  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson1/recordBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={text_container}>
        <Text style={text}>
          One of the features of this app is the ability to reach out to ESD
          instructors who can advise you on how to modify exercises that might
          not feel right for your body. You can find them on the Community page.
        </Text>
      </View>
      <View
        style={{
          width: Sizes.size300,
          height: deviceInfo.small_screen ? Sizes.size150 : Sizes.size150,
          backgroundColor: '#BD3150',
          marginVertical: deviceInfo.small_screen ? Sizes.size0 : Sizes.size30,
          marginLeft: Sizes.size20,
          borderRadius: Sizes.size16,
        }}>
        <View
          style={{
            flex: 1,
            width: 300,
            height: deviceInfo.small_screen ? Sizes.size150 : Sizes.size150,
            backgroundColor: '#fff',
            marginHorizontal: 20,
            borderRadius: 16,
            position: 'absolute',
            top: 30,
            zIndex: 1,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          }}>
          <Image
            style={{
              width: deviceInfo.small_screen ? Sizes.size300 : Sizes.size300,
              height: deviceInfo.small_screen ? Sizes.size150 : Sizes.size150,
            }}
            source={require('../../../../assets/Image/lessons/lesson1/expert.png')}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginTop: deviceInfo.small_screen ? Sizes.size100 : Sizes.size200,
        }}>
        <Button
          text="Ask an expert"
          onPress={() => {
            navigation.navigate('Outro');
          }}
        />
        <View style={skip_content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Outro');
            }}>
            <Text style={text}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default EXPERT;
