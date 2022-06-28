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

import Rec from '../../../../assets/Svgs/lesson_1/Rec.svg';
import {SvgXml} from 'react-native-svg';

const RecordSelf2 = ({navigation}) => {
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
      source={require('../../../../assets/Image/background/lesson1/recordHorBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={record_title}>Record yourself </Text>
        </View>
        <View style={text_container}>
          <Text style={subtitle}>
            Now you can record yourself performing this technique with your
            phone. This will allow you to compare yourself to the instructor.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Record');
            }}>
            <SvgXml xml={Rec} style={{marginTop: 50}} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={skip_content}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RecordVoice');
          }}>
          <Text style={subtitle}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RecordSelf2;
