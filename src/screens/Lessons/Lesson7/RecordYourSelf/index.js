import React, {useEffect} from 'react';
import Header from '../../lesson1/components/header';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {Rec} from '../../../../assets/Svgs/lesson_1/Rec.svg';
import {Sizes} from '../../../../assets/RootStyles';
import {styles} from './styles';
import Orientation from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';
import {PERMISSIONS, request} from 'react-native-permissions';
import {deviceInfo} from '../../../../assets/deviceInfo';

const RecordYourSelf = () => {
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
  }, []);
  const {
    container,
    title_container,
    record_title,
    text_container,
    subtitle,
    skip_content,
  } = styles();
  const navigation = useNavigation();
  const getPermission = () => {
    request(
      deviceInfo.ios
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO,
    )
      .then(res => {
        if (res === 'blocked' || res === 'denied') {
          navigation.navigate('PalmHellKnee');
        } else {
          request(
            deviceInfo.ios
              ? PERMISSIONS.IOS.CAMERA
              : PERMISSIONS.ANDROID.CAMERA,
          )
            .then(res => {
              if (res === 'blocked' || res === 'denied') {
                navigation.navigate('PalmHellKnee');
              } else {
                navigation.navigate('VideoRecord');
              }
            })
            .catch(e => {
              navigation.navigate('PalmHellKnee');
            });
        }
      })
      .catch(e => {
        navigation.navigate('PalmHellKnee');
      });
  };
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson1/recordHorBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={title_container}>
        <Text style={record_title}>Got it? Now you do it!</Text>
      </View>
      <View style={text_container}>
        <Text style={subtitle}>
          Now you can record yourself performing this technique with your phone.
          This will allow you to compare yourself to the instructor.
        </Text>
        <TouchableOpacity onPress={getPermission}>
          <SvgXml
            xml={Rec}
            width={Sizes.size70}
            height={Sizes.size50}
            style={{marginTop: Sizes.size30}}
          />
        </TouchableOpacity>
      </View>
      <View style={skip_content}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PalmHellKnee');
          }}>
          <Text style={subtitle}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RecordYourSelf;
