import React from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';

import {styles} from './styles';
import {BorderStyles, Colors, Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {vScale} from '../../../../assets/RootStyles/Scale';

const PeopleSupport = ({setScreen}) => {
  const {container, title, background, subtitle} = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <Text style={title}>
        Create a list of people you would like to have in your support circle.
      </Text>
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
        <Button text="Next" onPress={() => navigation.navigate('Practice')} />
      </View>
    </ImageBackground>
  );
};

export default PeopleSupport;
