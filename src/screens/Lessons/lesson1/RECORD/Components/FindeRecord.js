import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles';
import Header from '../../components/header';
import {SvgXml} from 'react-native-svg';
import record_cancel from '../../../../../assets/Svgs/lesson_1/canselRecord.svg';
import {hScale} from '../../../../../assets/RootStyles/Scale';

const FindeRecordScreen = ({setScreen}) => {
  const {
    container,
    title_container,
    warmup_title,
    text_container,
    record_text,
    text,
    skip_content,
  } = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../../assets/Image/background/lesson1/recordBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={warmup_title}>TELL</Text>
        </View>
        <View style={text_container}>
          <Text style={record_text}>Record yourself</Text>
          <Text style={text}>
            Record a story, for yourself, of a time you used one of these
            principles to defend yourself.{' '}
          </Text>
          <SvgXml
            xml={record_cancel}
            width={hScale(100)}
            height={hScale(100)}
          />
        </View>
      </ScrollView>
      <View style={skip_content}>
        <TouchableOpacity
          onPress={() => {
            setScreen('recordEnd');
          }}>
          <Text style={text}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FindeRecordScreen;
