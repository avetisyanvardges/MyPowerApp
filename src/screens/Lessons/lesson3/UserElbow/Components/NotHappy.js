import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../UserElbow/styles';
import {Button} from '../../../../../components/Button';
import {BorderStyles, Colors, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {hScale, vScale} from '../../../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';

const NotHappy = ({setScreen}) => {
  const {
    top_content,
    subtitle,
    bottom_content,
    background,
    center_content,
    skip_content,
    title,
  } = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/BellyBreathingBG.png')}>
      <View style={top_content}>
        <Text style={title}>
          Can you tell us a bit more on how we could help you with that?{' '}
        </Text>
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
        <Text style={title}>
          You can always consult with one of our community mentors
        </Text>

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
              source={require('../../../../../assets/Image/lessons/lesson1/expert.png')}
            />
          </View>
        </View>
      </View>

      <View style={bottom_content}>
        <Button
          text="Ask an expert"
          onPress={() => {
            setScreen('thankYou');
          }}
        />
        <View style={skip_content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BitCaution');
            }}>
            <Text style={subtitle}>Save to MyStuff</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default NotHappy;
