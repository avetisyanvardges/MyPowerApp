import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';
import {
  Colors,
  FontStyle,
  fullScreen,
  Sizes,
} from '../../../../assets/RootStyles';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';
import {LoudSpeaker} from '../../../../assets/Svgs';
import {styles} from './styles';
import Header from '../components/header';
import background from '../../../../assets/Image/background/lesson1/warmup_1.png';
import {Button} from '../../../../components/Button';

const Warmup_6 = ({navigation}) => {
  const {container, content} = styles();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        console.log('1');
      },
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={content}>
        <View>
          <View
            style={{
              marginTop: vScale(25),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <LoudSpeaker
              width={hScale(45)}
              height={hScale(45)}
              color={Colors.black}
            />
            <Text style={{...FontStyle.title, marginHorizontal: hScale(11)}}>
              YELL
            </Text>
          </View>

          <View style={{marginTop: vScale(10)}}>
            <Text
              style={{
                ...FontStyle.subtitle,
                letterSpacing: 0.5,
              }}>
              Now count backwards getting softer.
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
      <View
        style={{
          flex: 1,
          marginBottom: Sizes.size50,
          justifyContent: 'flex-end',
        }}>
        <Button
          text="Start"
          onPress={() => {
            navigation.navigate('Softer_numbers', {screen: 'softer'});
          }}
        />
      </View>
    </View>
  );
};

export default Warmup_6;
