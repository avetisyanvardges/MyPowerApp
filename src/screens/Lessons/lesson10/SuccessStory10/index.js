import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const SuccessStory10 = () => {
  const {
    center_content,
    title,
    top_content,
    sub_title,
    bottom_content,
    background,
  } = styles();
  const navigation = useNavigation();
  const text =
    'After a long day of errands, I entered the parking lot to drive home.  My car was parked between two cars.  I was approached by a man from the front of the car and asked if I had a few coins, he said that he had not eaten today.  \n' +
    '\n' +
    'Just as I was about to hand him some change, another man approached me, he saw that I was handing out money - and came to request some too. The first man was in front of me, the second was behind me and I was standing between two cars.  \n' +
    '\n' +
    'I felt trapped. They both moved towards me.  I stretched out my arms to the right and left and said, "Give me personal space, don\'t move forward" they stopped. I handed each a few coins, and they left.  ';
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={background}
        source={require('../../../../assets/Image/background/lesson10/succes10.png')}>
        <Header onPress={() => navigation.goBack()} />
        <View style={top_content}>
          <Text style={title}>Give me some space!</Text>
        </View>
      </ImageBackground>
      <View style={center_content}>
        <Text style={sub_title}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Button text="Next" onPress={() => navigation.navigate('Outro10')} />
      </View>
    </View>
  );
};

export default SuccessStory10;
