import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import {Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {useNavigation} from '@react-navigation/native';

const RepeatWarmup8 = ({setScreen}) => {
  const {subtitle, background, title} = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <View
        style={{
          marginVertical: deviceInfo.small_screen ? 50 : 100,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: deviceInfo.small_screen ? 65 : 110,
            height: deviceInfo.small_screen ? 55 : 95,
          }}
          source={require('../../../../assets/Image/background/lesson8/Heart.png')}
        />
        <Text style={title}>Great! Good for you.</Text>
        <Text style={subtitle}>
          You can always find grounding exercises in Back2Balance.
        </Text>

        <View
          style={{
            width: deviceInfo.small_screen ? 200 : 300,
            height: deviceInfo.small_screen ? 100 : 150,
            backgroundColor: '#EE7D8F',
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
              source={require('../../../../assets/Image/background/lesson8/lesson_8.png')}
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
            navigation.navigate('PlayGame');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default RepeatWarmup8;
