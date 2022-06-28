import React, {useEffect, useRef, useState} from 'react';
import {
  BackHandler,
  ImageBackground,
  TouchableOpacity,
  Vibration,
  Text,
  View,
} from 'react-native';
import {styles} from '../Game10/styles';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {EndCall} from '../../../../assets/Image/background/lesson10/end.svg';
import {Sizes} from '../../../../assets/RootStyles';
import {Icon} from '../../../../assets/Image/background/lesson10/Vector.svg';
import Sound from 'react-native-sound';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';

const IncomingCall = ({navigation}) => {
  let timin = useRef(null);
  const [audio, setAudio] = useState();
  const [start, setStart] = useState(true);
  const {
    top_content,
    title,
    small_text,
    background,
    bottom_content,
    center_content,
  } = styles();
  const count = useSelector(store => store.lesson_10.render_count);
  const backAction = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    const subscribe = navigation.addListener('focus', () => {
      let sound = Sound.setCategory('Playback');
      sound = new Sound(
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FGames%2FPhone%20Ringtone.mp3?alt=media&token=a586bb75-1d4b-4223-a0c5-77d499f5d7fa',
        '',
        error => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          setAudio(sound);
        },
      );
    });
    return subscribe;
  }, [navigation]);

  useEffect(() => {
    if (audio) {
      timin.current = setInterval(() => {
        Vibration.vibrate();
        audio.play();
      }, 1000);
    }
  }, [audio]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      clearInterval(timin.current);
      Vibration.cancel();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson10/incomingBg.png')}>
      <View style={top_content} />

      <View style={center_content}>
        <Text style={title}>Incoming call</Text>
        <Text style={small_text}>{count} of 4</Text>
      </View>
      <View style={bottom_content}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CallEnded');
            }}>
            <SvgXml
              style={{marginRight: 20}}
              xml={EndCall}
              width={Sizes.size60}
              height={Sizes.size60}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Game10');
            }}>
            <LottieView
              style={{width: Sizes.size100, height: Sizes.size100}}
              source={require('../../../../assets/call.json')}
              autoPlay
              loop
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default IncomingCall;
