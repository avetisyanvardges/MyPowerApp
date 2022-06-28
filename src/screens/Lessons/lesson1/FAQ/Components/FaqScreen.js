import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles';
import Header from '../../components/header';
import {SvgXml} from 'react-native-svg';
import arrowRight from '../../../../../assets/Svgs/lesson_1/Vector.svg';
import {hScale} from '../../../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';
import {Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';

const FaqScreen = ({setScreen}) => {
  const {container, faqText, text_container, text} = styles();
  const navigation = useNavigation();
  const backAction = () => {
    navigation.navigate('RECORD');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../../assets/Image/background/lesson1/recordBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={text_container}>
          <Text style={text}>
            When you tell friends or family that you are learning self-defense
            you may experience some resistance. That is to be expected. There
            are so many myths and stereotypes embedded in our cultures around
            whether women, children, or smaller people can successfully defend
            themselves against perpetrators. What we have learned is that the
            only people these myths serve are those who are perpetrating
            violence.
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.13)',
              backgroundColor: '#fff',
              borderRadius: 8,
              paddingVertical: 10,
              marginTop: Sizes.size40,
            }}>
            <Text style={faqText}>ESD-Frequently Asked Questions</Text>
            <SvgXml xml={arrowRight} width={hScale(10)} height={hScale(20)} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: Sizes.size50,
        }}>
        <Button
          text="Next"
          onPress={() => {
            setScreen('next');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default FaqScreen;
