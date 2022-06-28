import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import Book from '../../../../assets/Svgs/lesson_1/book.svg';
import {SvgXml} from 'react-native-svg';
import {hScale} from '../../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../../components/Header';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';

const FactStat = () => {
  const navigation = useNavigation();

  const {container, title, title_container, text, bkt_text} = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      style={container}
      source={require('../../../../assets/Image/background/lesson1/knowCenterBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={{paddingHorizontal: hScale(20)}}>
        <SvgXml
          xml={Book}
          width={hScale(100)}
          height={hScale(100)}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            left: '40%',
            zIndex: 2,
          }}
        />
        <Text style={title}>Did you know?</Text>
        <View style={title_container}>
          <Text style={text}>
            The traffic light system to judge danger is something also used by
            special forces around the world as a way of judging when and how to
            act. “A basic mental preparedness [i.e. traffic light system] to
            take lethal action may be a difference between life and death.”
          </Text>
          <Text style={bkt_text}>( Van Horne and Riley, 2015 )</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: Sizes.size40,
        }}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('SuccessStory')}
        />
      </View>
    </ImageBackground>
  );
};

export default FactStat;
