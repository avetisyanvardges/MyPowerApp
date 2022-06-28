import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import Book from '../../../../assets/Svgs/lesson_1/book.svg';
import {SvgXml} from 'react-native-svg';
import {hScale} from '../../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';

const Know9 = () => {
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
            “The most effective strategies [for rape avoidance] were yelling
            and/or physical resistance, and that the more strategies women used
            the greater their chance of rape avoidance.” (Bart & O’Brien,1985)
          </Text>
          <Text style={small_text}>(Ullman, 1997,2007).</Text>
        </View>
      </View>

      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('SuccessStory9')}
        />
      </View>
    </ImageBackground>
  );
};

export default Know9;
