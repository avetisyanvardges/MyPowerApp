import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import {Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {useNavigation} from '@react-navigation/native';
import Header from '../../lesson1/components/header';

const SupportCircle = ({setScreen}) => {
  const {container, subtitle, background, text, skip_content, title} = styles();
  const navigation = useNavigation();

  return (
    <View style={container}>
      <ImageBackground
        style={background}
        source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
        <Header rightIcon={true} />
        <Text style={title}>
          Would you like to share your story with your Support Circle?
        </Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              width: deviceInfo.small_screen ? 200 : 300,
              height: deviceInfo.small_screen ? 100 : 150,
              backgroundColor: '#BD3150',
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
                source={require('../../../../assets/Image/lessons/lesson1/expert.png')}
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
            text="Share now"
            onPress={() => {
              navigation.navigate('Game8_2');
            }}
          />
          <View style={skip_content}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Game8_2');
              }}>
              <Text style={subtitle}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SupportCircle;
