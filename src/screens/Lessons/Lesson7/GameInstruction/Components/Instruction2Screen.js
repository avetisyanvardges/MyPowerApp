import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from '../../GameInstruction/styles';
import {fullScreen} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {hScale, vScale} from '../../../../../assets/RootStyles/Scale';

const Instructions2Screen = () => {
  const {title, subtitle, headline_6, body_2, btn_container} = styles();
  const navigation = useNavigation();
  return (
    <>
      <Text style={title}>Your Power Comes From Your Hips</Text>
      <Text style={subtitle}>
        {'They power your palm-heel. \n' +
          'They power your kicks. \n' +
          'They power your ability to run.\n' +
          '\n' +
          'Follow along with the video.\n \n'}
      </Text>
      <Image
        source={require('../../../../../assets/Image/lessons/lesson3/Voice.png')}
        style={{
          width: fullScreen.width - 40,
          height: hScale(100),
          marginTop: vScale(50),
        }}
        resizeMode="contain"
      />
      <Text style={headline_6}>Remember!</Text>
      <Text style={body_2}>
        you will be using your loud voice. We hope you learn to enjoy making
        noise!
      </Text>
      <View style={btn_container}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('Videos', {screen: 'Hips'})}
        />
      </View>
    </>
  );
};

export default Instructions2Screen;
