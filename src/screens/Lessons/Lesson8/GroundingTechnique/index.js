import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';

const GroundingTechnique = ({setScreen}) => {
  const navigation = useNavigation();
  const {title, background, subtitle} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <Text style={title}>Grounding Technique</Text>
      <Text style={subtitle}>
        While everyone reacts to hearing, reading or telling difficult stories
        differently, we have learned that using a grounding technique to return
        to balance is a good practice. Use this one to see how it feels.
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginTop: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
        }}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('FollovingColors')}
          containerStyle={{marginBottom: 50}}
        />
      </View>
    </ImageBackground>
  );
};

export default GroundingTechnique;
