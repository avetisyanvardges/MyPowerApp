import React from 'react';
import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import Header from '../../../../components/AudioComponents/components/header';
import {SvgXml} from 'react-native-svg';
import {Rec} from '../../../../assets/Svgs/lesson_1/Rec.svg';
import {Sizes} from '../../../../assets/RootStyles';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Cta2 = ({setScreen}) => {
  const {
    background,
    record_title,
    text_container,
    record_btn,
    skip_content,
    text,
    subtitle,
  } = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson10/lesson10secondBg.png')}
      style={background}>
      <Header back={true} backPress={() => {}} rightIcon={true} />
      <View style={{flex: 1}}>
        <View style={text_container}>
          <Text style={[record_title]}>Got it? Now you do it!</Text>
          <Text style={subtitle}>
            Now you can record yourself performing this technique with your
            phone. This will allow you to compare yourself to the instructor.{' '}
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={record_btn}>
          <Pressable
            onPress={() => navigation.navigate('RecordRising')}
            style={{
              position: 'relative',
              top: 0,
            }}>
            <SvgXml xml={Rec} width={Sizes.size60} height={Sizes.size60} />
          </Pressable>
        </View>
        <View style={skip_content}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={text}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Cta2;
