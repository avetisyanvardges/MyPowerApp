import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../../lesson1/components/header';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';

const L_M_A_2 = ({navigation}) => {
  const {
    container,
    title_container,
    record_title,
    text_container,
    subtitle,
    skip_content,
  } = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson4/WhatsGoingBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={record_title}>Now you do it</Text>
        </View>
        <View style={text_container}>
          <Text style={subtitle}>
            Make a video of yourself doing it and it will play back with the
            instructor.
          </Text>

          <Button
            containerStyle={{width: 336, marginTop: Sizes.size30}}
            text="Sure"
            onPress={() => navigation.navigate('KneeStrike5')}
          />
        </View>
        <View style={skip_content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HowYouFell');
            }}>
            <Text style={subtitle}>Not now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default L_M_A_2;
