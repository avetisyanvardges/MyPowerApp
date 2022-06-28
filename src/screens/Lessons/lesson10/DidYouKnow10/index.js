import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import Book from '../../../../assets/Svgs/lesson_1/book.svg';
import {SvgXml} from 'react-native-svg';
import {hScale} from '../../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';

const Know10 = () => {
  const navigation = useNavigation();

  const {
    background,
    top_content,
    center_content,
    bottom_content,
    title,
    title_container,
    text,
    small_text,
  } = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      style={background}
      source={require('../../../../assets/Image/background/lesson1/knowCenterBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <SvgXml
          xml={Book}
          width={hScale(100)}
          height={hScale(100)}
          style={{}}
        />
        <Text style={title}>Did you know?</Text>
      </View>
      <View style={center_content}>
        <View style={title_container}>
          <Text style={text}>
            “Human beings lead storied lives (Sarbin, 1986), understand their
            lives through stories (Frank, 1995), form their identities through
            stories (McAdams, 2001, 2006) and learn about the world and culture
            through the narrative mode of knowing{' '}
          </Text>
          <Text style={small_text}>
            (Polkinghorne 1995; Bruner, 1990)” Nolan-Miljevic, 2015
          </Text>
        </View>
      </View>

      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('SuccessStory10')}
        />
      </View>
    </ImageBackground>
  );
};

export default Know10;
