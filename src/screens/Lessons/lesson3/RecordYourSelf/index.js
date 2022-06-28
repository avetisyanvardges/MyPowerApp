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

const RecordSelf3 = ({navigation, route}) => {
  console.log(route.params.screen);
  const {
    container,
    title_container,
    record_title,
    text_container,
    subtitle,
    skip_content,
  } = styles();

  const skip_press = () => {
    switch (route.params.screen) {
      case 'kneeStrike1':
        return navigation.navigate('PreVideo3', {screen: 'knee'});
      case 'ElbowStrike':
        return navigation.navigate('Elbow', {screen: 'elbow'});
    }
  };
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson1/recordHorBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={record_title}>Record yourself</Text>
        </View>
        <View style={text_container}>
          <Text style={subtitle}>
            Now you can record yourself performing this technique with your
            phone. This will allow you to compare yourself to the instructor.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Record3', {screen: route.params.screen});
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
          <TouchableOpacity onPress={skip_press}>
            <Text style={subtitle}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RecordSelf3;
