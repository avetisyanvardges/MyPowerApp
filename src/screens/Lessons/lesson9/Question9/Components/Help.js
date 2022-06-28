import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../Question9/styles';
import {Button} from '../../../../../components/Button';
import {BorderStyles, Colors, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {hScale, vScale} from '../../../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../lesson1/components/header';

const Help = ({setScreen}) => {
  const {
    container,
    subtitle,
    background,
    top_content,
    bottom_content,
    title,
    center_content,
  } = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <Header rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>How can we help?</Text>
        <TextInput
          style={{
            padding: hScale(10),
            backgroundColor: Colors.white,
            borderWidth: BorderStyles.widths.border2,
            borderColor: BorderStyles.color.gray,
            borderRadius: BorderStyles.radius.xs,
            minHeight: vScale(100),
            maxHeight: vScale(250),
            justifyContent: 'flex-start',
            width: '100%',
          }}
          multiline
          textAlignVertical="top"
          placeholder="Write here"
        />
      </View>

      <View style={center_content}>
        <View
          style={{
            width: deviceInfo.small_screen ? 260 : 300,
            height: deviceInfo.small_screen ? 100 : 150,
            backgroundColor: '#BD3150',
            marginVertical: 30,
            marginLeft: 20,
            borderRadius: 16,
          }}>
          <View
            style={{
              width: deviceInfo.small_screen ? 260 : 300,
              height: deviceInfo.small_screen ? 150 : 150,
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
                width: deviceInfo.small_screen ? 260 : 300,
                height: deviceInfo.small_screen ? 150 : 150,
              }}
              source={require('../../../../../assets/Image/lessons/lesson1/expert.png')}
            />
          </View>
        </View>
      </View>

      <View style={bottom_content}>
        <Button text="Ask an expert" onPress={() => setScreen('technique')} />
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: Sizes.size30}}
          onPress={() => setScreen('technique')}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Help;
