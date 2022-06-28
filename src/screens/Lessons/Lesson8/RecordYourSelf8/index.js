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
import {Sizes} from '../../../../assets/RootStyles';

const RecordSelf8 = ({navigation, route}) => {
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
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={record_title}>Record yourself</Text>
        </View>
        <View style={text_container}>
          <Text style={subtitle}>
            How about making your own embarrassment muscle video?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('VideoRecord8');
            }}>
            <SvgXml
              xml={Rec}
              width={Sizes.size70}
              height={Sizes.size50}
              style={{marginTop: Sizes.size30}}
            />
          </TouchableOpacity>
        </View>
        <View style={skip_content}>
          <TouchableOpacity onPress={() => navigation.navigate('Discomfort')}>
            <Text style={subtitle}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RecordSelf8;
