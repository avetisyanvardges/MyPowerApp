import React from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './styles';
import {BorderStyles, Colors, Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {vScale} from '../../../../assets/RootStyles/Scale';

const HowDidFell2 = () => {
  const {title, background, skip_content, subtitle} = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <Text style={title}>How did that feel?</Text>
      <View style={{marginTop: vScale(16), zIndex: 999}}>
        <TextInput
          style={{
            padding: Sizes.size10,
            backgroundColor: Colors.white,
            borderWidth: BorderStyles.widths.border2,
            borderColor: BorderStyles.color.gray,
            borderRadius: BorderStyles.radius.xs,
            minHeight: Sizes.size150,
            maxHeight: Sizes.size250,
          }}
          multiline
          textAlignVertical="top"
          placeholder="Write here"
        />
      </View>
      <View
        style={{
          flex: 1,
          marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
          justifyContent: 'flex-end',
        }}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('SupportCircle2')}
        />
        <View style={skip_content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SupportCircle2');
            }}>
            <Text style={subtitle}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HowDidFell2;
