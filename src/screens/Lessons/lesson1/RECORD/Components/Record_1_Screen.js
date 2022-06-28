import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles';
import Header from '../../components/header';
import {SvgXml} from 'react-native-svg';
import record_icon from '../../../../../assets/Svgs/lesson_1/recordIcon.svg';
import record_cancel from '../../../../../assets/Svgs/lesson_1/canselRecord.svg';
import {hScale} from '../../../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';
import AudioRecord from 'react-native-audio-record';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {PERMISSIONS, request} from 'react-native-permissions';
import Sound from 'react-native-sound';
import Clap from '../../../../../assets/Svgs/clap.svg';
import refresh from '../../../../../assets/Svgs/lesson_1/rotate-ccw.svg';
import {Bulb, Pause, Play} from '../../../../../assets/Svgs';
import {Sizes} from '../../../../../assets/RootStyles';
import Footer from '../../components/footer';
import {UpdateData, UploadFile} from '../../../../../Services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Record_1Screen = ({setScreen}) => {
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [audio_file, setAudioFile] = useState(null);
  const [record_end, setRecordEnd] = useState(false);
  const [playing, setPlay] = useState(false);
  const [granted, setGranted] = useState(false);
  const {
    container,
    title_container,
    warmup_title,
    text_container,
    record_text,
    text,
    skip_content,
    modalView,
    gotIt,
    title,
    subtitle,
  } = styles();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    getPermission();
  }, []);

  useEffect(() => {
    if (recording) {
      setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
  }, [timer, recording]);
  const backAction = () => {
    navigation.navigate('GameInitial');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  function secondsToTime(time) {
    return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
  }

  const getPermission = async () => {
    await request(
      deviceInfo.ios
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO,
    )
      .then(res => res === 'granted' && setGranted(true))
      .catch(error => {
        console.log(error);
      });
  };

  const startRecording = async () => {
    const options = {
      sampleRate: 16000, // default 44100
      channels: 1, // 1 or 2, default 1
      bitsPerSample: 16, // 8 or 16, default 16
      audioSource: 6, // android only (see below)
      wavFile: 'test.wav', // default 'audio.wav'
    };

    await AudioRecord.init(options);
    await setRecording(true);
    await AudioRecord.start();
    setTimer(timer + 1);
  };

  const stopRecording = async () => {
    await setRecording(false);
    const audioFile = await AudioRecord.stop();
    let sound = Sound.setCategory('Playback');
    sound = new Sound(audioFile, '', error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log('loaded', sound.getDuration());
    });
    await setAudioFile(sound);
    await setRecordEnd(true);
  };

  const upload_audio = async () => {
    const body = {
      lesson_name: 'Lesson_1',
      file_type: 'Audio',
      file_name: 'TELL',
      file_format: 'wav',
      file_path: audio_file._filename,
      cb: () => {
        navigation.navigate('FAQ');
      },
    };
    await UploadFile(body);
  };

  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../../assets/Image/background/lesson1/recordBg.png')}
      style={container}>
      <Header
        onPress={() => navigation.navigate('GameInitial')}
        rightIcon={true}
      />
      {record_end ? (
        <View style={{flex: 1}}>
          <View style={title_container}>
            <SvgXml
              xml={Clap}
              width={hScale(130)}
              height={hScale(70)}
              style={{marginVertical: 50}}
            />
            <Text style={warmup_title}>Good Job, Yudit!</Text>
            <View
              style={{
                width: Sizes.size200,
                height: Sizes.size50,
                backgroundColor: 'rgba(11, 43, 62,.1)',
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: Sizes.size10,
                marginVertical: Sizes.size10,
                borderRadius: Sizes.size8,
              }}>
              <TouchableOpacity
                style={{marginRight: Sizes.size5}}
                onPress={() => {
                  setPlay(true);
                  audio_file.play(success => {
                    setPlay(false);
                  });
                }}>
                {playing ? (
                  <Pause width={Sizes.size30} height={Sizes.size30} />
                ) : (
                  <Play width={Sizes.size30} height={Sizes.size30} />
                )}
              </TouchableOpacity>
              <Image
                source={require('../../../../../assets/Image/lessons/lesson1/Wave.png')}
                style={{width: Sizes.size145, height: Sizes.size20}}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setRecordEnd(false);
                setRecording(false);
                setTimer(0);
                setAudioFile(null);
              }}
              style={{flexDirection: 'row', justifyContent: 'center'}}>
              <SvgXml xml={refresh} width={hScale(30)} height={hScale(25)} />
              <Text style={record_text}>Record again</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={{backgroundColor: 'rgba(17,17,17,0.3)', flex: 1}}>
              <View style={modalView}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Bulb width={100} height={100} />
                  <Text style={title}>Find your recordings</Text>
                </View>
                <Text style={subtitle}>
                  You can always go back to your recordings, selfies, vocal
                  exercises and more in your profile tab at the navigation menu
                </Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={gotIt}>Got it! Thanks</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View style={title_container}>
            <Text style={warmup_title}>TELL</Text>
          </View>
          <View style={text_container}>
            <Text style={record_text}>Record yourself</Text>
            <Text style={text}>
              Record a story, for yourself, of a time you used one of these
              principles to defend yourself.{' '}
            </Text>
            <Pressable onPress={recording ? stopRecording : startRecording}>
              {recording ? (
                <SvgXml
                  xml={record_cancel}
                  width={hScale(100)}
                  height={hScale(100)}
                />
              ) : (
                <SvgXml
                  xml={record_icon}
                  width={hScale(100)}
                  height={hScale(100)}
                />
              )}
            </Pressable>
            <Text>{secondsToTime(timer)}</Text>
          </View>
        </View>
      )}

      {record_end ? (
        <Footer onPress={upload_audio} />
      ) : (
        <View style={skip_content}>
          <TouchableOpacity
            disabled={recording}
            onPress={() => navigation.navigate('FAQ')}>
            {recording ? (
              <Text style={text}>Recordin Audio...</Text>
            ) : (
              <Text style={text}>Skip</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
};

export default Record_1Screen;
