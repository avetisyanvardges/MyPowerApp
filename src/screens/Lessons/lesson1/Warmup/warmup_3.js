import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';
import {Colors, FontStyle, fullScreen} from '../../../../assets/RootStyles';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';
import {LoudSpeaker} from '../../../../assets/Svgs';
import {styles} from './styles';
import Header from '../components/header';
import Footer from '../components/footer';
import background from '../../../../assets/Image/background/lesson1/warmup_3.png';

const Warmup_3 = ({navigation}) => {
  const {container, content} = styles();
  const backAction = () => {
    navigation.navigate('Warmup_2');
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
    <View style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={content}>
        <View style={{alignItems: 'center'}}>
          <View>
            <Text style={{...FontStyle.title}}>Loud voice practice</Text>
          </View>
          <View style={{marginVertical: vScale(15)}}>
            <LoudSpeaker
              width={hScale(76)}
              height={hScale(76)}
              color={Colors.black}
            />
          </View>
          <View>
            <Text
              style={{...FontStyle.subtitle, fontSize: 20, color: '#50555C'}}>
              Remember!
            </Text>
          </View>
          <View style={{marginTop: vScale(10)}}>
            <Text
              style={{
                fontSize: hScale(14),
                fontWeight: '400',
                lineHeight: 24,
                letterSpacing: 0.25,
                textAlign: 'center',
              }}>
              Many of the lessons will have you practicing your loud voice. Look
              for this sign so you can make sure you are in a good place for
              safely practicing these verbal skills.
            </Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={background}
        style={{
          width: fullScreen.width,
          height: fullScreen.height,
          position: 'absolute',
          zIndex: 0,
          top: fullScreen.height / 2,
        }}
      />
      <Footer
        onPress={() => {
          navigation.navigate('Warmup_4');
        }}
      />
    </View>
  );
};

export default Warmup_3;
