import React, {useEffect} from 'react';
import {
  BackHandler,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../components/header';
import Orientation from 'react-native-orientation-locker';
import {useSelector} from 'react-redux';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';

const FIGHT = ({navigation}) => {
  const palm_heel = useSelector(store => store.lesson_1.Gifs.palm_heel);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const backAction = () => {
    navigation.navigate('RUN');
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
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson1/YellBG.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={warmup_title}>FIGHT</Text>
        </View>
        <View style={text_container}>
          <Text style={text}>
            As you will see thoughout the lessons, FIGHT isn't always about the
            physical side of violence. You can fight for your rights. You can
            fight to be heard. You can fight to be seen. You can fight for
            people to respect your boundaries.
          </Text>
          <Image
            source={{uri: palm_heel}}
            style={{
              width: '100%',
              height: Sizes.size200,
              resizeMode: 'contain',
            }}
          />
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
            navigation.navigate('TELL');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default FIGHT;
