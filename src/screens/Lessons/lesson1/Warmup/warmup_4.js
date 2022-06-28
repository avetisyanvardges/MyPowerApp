import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';
import {FontStyle, fullScreen, Sizes} from '../../../../assets/RootStyles';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';
import {LoudSpeaker} from '../../../../assets/Svgs';
import {styles} from './styles';
import Header from '../components/header';
import background from '../../../../assets/Image/background/lesson1/warmup_1.png';
import {Button} from '../../../../components/Button';

const Warmup_4 = ({navigation}) => {
  const {container, content} = styles();
  const backAction = () => {
    navigation.navigate('Warmup_3');
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
              color={'#0B2B3E'}
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
              Count to ten getting louder and louder as you count.
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
          justifyContent: 'flex-end',
          marginBottom: Sizes.size50,
        }}>
        <Button
          text="Start"
          onPress={() => {
            navigation.navigate('Louder_numbers', {screen: 'louder'});
          }}
        />
      </View>
    </View>
  );
};

export default Warmup_4;
