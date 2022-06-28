import React from 'react';
import Background from '../../../../assets/Image/background/lesson7/BG2.png';

import {Image, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {View} from 'react-native-animatable';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import {Padding, Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Great = ({setScreen}) => {
  const {background, title, subtitle, content, skip_content} = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground style={background} source={Background}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <View>
        <Text style={title}>Great.</Text>
        <Text style={subtitle}>
          Be aware of how your mind and body are feeling throughout this
          process, and if you need to do some grounding, you know where that is.
        </Text>
      </View>
      <View style={content}>
        <Image
          style={{
            width: 290,
            height: deviceInfo.small_screen ? Sizes.size200 : Sizes.size280,
          }}
          source={require('../../../../assets/Image/lessons/lesson3/triggeteImage.png')}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: deviceInfo.small_screen ? Sizes.size10 : Sizes.size70,
        }}>
        <Button
          text="Back 2 Balance"
          onPress={() => {
            navigation.navigate('PlayGameAgain');
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PlayGameAgain');
          }}>
          <Text style={subtitle}>Skip</Text>
        </TouchableOpacity>
        {/*<View style={skip_content}>*/}
        {/*<TouchableOpacity*/}
        {/*onPress={() => {*/}
        {/*navigation.navigate('BitCaution');*/}
        {/*}}>*/}
        {/*<Text style={subtitle}>Skip</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*</View>*/}
      </View>
    </ImageBackground>
  );
};

export default Great;
