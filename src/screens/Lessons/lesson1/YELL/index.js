import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../components/header';
import Orientation from 'react-native-orientation-locker';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';

const YELL = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const backAction = () => {
    navigation.navigate('THINK');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const {container, title_container, warmup_title, text_container, text} =
    styles();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        resizeMode={'cover'}
        source={require('../../../../assets/Image/background/lesson1/YellBG.png')}
        style={container}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <ScrollView>
          <View style={title_container}>
            <Text style={warmup_title}>YELL</Text>
          </View>
          <View style={text_container}>
            <Text style={text}>
              YELL is about all of the shades and variations of things you can
              say with your voice to either defend yourself, or to stand up for
              yourself. From big and loud, to small and quiet, all you need in
              order to say what you want is already inside you. Now it's time to
              reach in and learn to use it. Just as inappropriate behaviour is
              not always big and scary, so our responses are not always about
              yelling. Responses need to be adapted for a spectrum of behavior,
              from irritating to life-threatening.
            </Text>
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
              navigation.navigate('Voices3', {screen: 'voice'});
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default YELL;
