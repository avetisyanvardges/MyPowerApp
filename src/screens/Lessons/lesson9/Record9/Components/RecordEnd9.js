import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../Record9/styles';
import {Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {SvgXml} from 'react-native-svg';
import Clap from '../../../../../assets/Svgs/clap.svg';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const RecordEnd9 = ({setScreen}) => {
  const user = useSelector(store => store?.current_user.user);
  const navigation = useNavigation();
  const {
    top_content,
    title,
    subtitle,
    background,
    center_content,
    bottom_content,
  } = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson9/Lesson9Bg.png')}>
      <Header onPress={() => navigation.goBack()} />
      <View style={top_content}>
        <SvgXml
          xml={Clap}
          width={Sizes.size150}
          height={Sizes.size70}
          style={{marginVertical: 30}}
        />
        <Text style={title}>${`Good Job, ${user.full_name} `}</Text>
        <Text style={subtitle}>Want to play that again?</Text>
      </View>
      <View style={bottom_content}>
        <Button
          text="Play again"
          onPress={() => navigation.navigate('BodyParts')}
        />
        <TouchableOpacity
          style={{alignItems: 'center', marginTop: Sizes.size30}}
          onPress={() => setScreen('yourBody')}>
          <Text>Not right now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RecordEnd9;
