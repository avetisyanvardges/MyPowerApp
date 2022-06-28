import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Sizes} from '../../../../assets/RootStyles';

const QuiqChek3 = ({setScreen}) => {
  const {
    title,
    background,
    questionContainer,
    question_btns,
    subtitle,
    skip_content,
  } = styles();
  const navigation = useNavigation();
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header rightIcon={true} />
      <Text style={title}>Quick Check in</Text>
      <Text style={subtitle}>
        Have you updated your profile so we can give you more customized
        content?
      </Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            width: deviceInfo.small_screen ? 200 : 300,
            height: deviceInfo.small_screen ? 100 : 150,
            backgroundColor: '#F8C9D6',
            marginVertical: 30,
            marginLeft: 20,
            borderRadius: 16,
          }}>
          <View
            style={{
              flex: 1,
              width: deviceInfo.small_screen ? 200 : 300,
              height: deviceInfo.small_screen ? 100 : 150,
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
                width: deviceInfo.small_screen ? 200 : 300,
                height: deviceInfo.small_screen ? 100 : 150,
              }}
              source={require('../../../../assets/Image/background/lesson8/QuikCheck.png')}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          height: deviceInfo.small_screen ? Sizes.size100 : Sizes.size200,
          justifyContent: 'center',
        }}>
        <Button
          text="Next"
          onPress={() => {
            navigation.navigate('Outro8');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default QuiqChek3;
