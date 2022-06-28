import React, {useEffect} from 'react';
import {BackHandler, Image, ImageBackground, Text, View} from 'react-native';
import {fullScreen, Padding, Sizes} from '../../../../assets/RootStyles';
import {styles} from './styles';
import Header from '../components/header';
import Orientation from 'react-native-orientation-locker';
import {Button} from '../../../../components/Button';

const Warmup_5 = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const backAction = () => {
    navigation.navigate('Warmup_4');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const {title_container, warmup_title, text_container, text} = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson1/warmup_5.png')}
      style={{
        width: fullScreen.width,
        height: fullScreen.height,
        paddingHorizontal: Padding.horizontal,
        flex: 1,
      }}>
      <View style={{flex: 1, zIndex: 1}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <View style={title_container}>
          <Text style={warmup_title}>THINK</Text>
        </View>
        <View style={text_container}>
          <Text style={text}>
            THINK is about using our heads to assess our situation and our
            hearts to figure out what we are feeling, what we want to do about
            it and what are our safest choices.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: Sizes.size40,
          zIndex: 2,
        }}>
        <Button
          text="Next"
          onPress={() => {
            navigation.navigate('Excercise', {screen: 'excercise_1'});
          }}
        />
      </View>
      {/*</ImageBackground>*/}
      <Image
        style={{width: 375, height: 560, position: 'absolute', bottom: 0}}
        source={require('../../../../assets/Image/background/lesson1/warmup_5.2.png')}
      />
    </ImageBackground>
  );
};

export default Warmup_5;
