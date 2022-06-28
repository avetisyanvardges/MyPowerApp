import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../components/header';
import {SvgXml} from 'react-native-svg';
import record_cancel from '../../../assets/Svgs/lesson_1/canselRecord.svg';
import {useNavigation} from '@react-navigation/native';
import AudioRecord from 'react-native-audio-record';
import {deviceInfo} from '../../../assets/deviceInfo';
import {check, PERMISSIONS, request} from 'react-native-permissions';
import Sound from 'react-native-sound';
import Clap from '../../../assets/Svgs/clap.svg';
import refresh from '../../../assets/Svgs/lesson_1/rotate-ccw.svg';
import {Bulb, Pause, Play} from '../../../assets/Svgs';
import {Sizes} from '../../../assets/RootStyles';
import {Rec} from '../../../assets/Svgs/lesson_1/Rec.svg';
import {Button} from '../../Button';

const VoiceRecord = ({
  background_source,
  skip_press,
  next_press,
  goBack,
  subtitle_style,
  screen_title,
  screen_subtitle,
  screen_content,
  finish_modal = false,
  finish_modal_title,
  finish_modal_content,
  finish_modal_btntext,
  finish_title,
  text_while_recording,
  recording_while_style,
  path_name,
}) => {
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [audio_file, setAudioFile] = useState(null);
  const [record_end, setRecordEnd] = useState(false);
  const [playing, setPlay] = useState(false);
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
    record_btn,
    recording_while_container,
    btn_container,
  } = styles();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);
  const [filePath, setFilePath] = useState('');
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

  function secondsToTime(time) {
    return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
  }

  const checkPermission = () => {
    check(
      deviceInfo.ios
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO,
    ).then(audioPermission => {
      if (audioPermission === 'blocked') {
        getPermission();
      }
    });
  };

  const getPermission = () => {
    request(
      deviceInfo.ios
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO,
    )
      .then(res => {
        if (res === 'denied') {
          skip_press();
        }
      })
      .catch(e => console.log(e));
  };

  const startRecording = async () => {
    const options = {
      sampleRate: 16000, // default 44100
      channels: 1, // 1 or 2, default 1
      bitsPerSample: 16, // 8 or 16, default 16
      audioSource: 6, // android only (see below)
      wavFile: `${path_name}`, // default 'audio.wav'
    };

    await AudioRecord.init(options);
    await setRecording(true);
    await AudioRecord.start();
    setTimer(timer + 1);
  };

  const stopRecording = async () => {
    const audioFile = await AudioRecord.stop();
    await setFilePath(audioFile);
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
    await setRecording(false);
  };

  return (
    <ImageBackground
      resizeMode={'cover'}
      source={background_source}
      style={container}>
      <Header back={true} backPress={goBack} rightIcon={true} />
      {record_end ? (
        <View style={{flex: 1}}>
          <View style={title_container}>
            <SvgXml
              xml={Clap}
              width={Sizes.size130}
              height={Sizes.size70}
              style={{marginVertical: 50}}
            />
            <Text style={warmup_title}>{finish_title}</Text>
            <View
              style={{
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
                source={require('../../../assets/Image/lessons/lesson1/Wave.png')}
                style={{
                  width: Sizes.size200,
                  height: Sizes.size20,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setRecordEnd(false);
                setRecording(false);
                setTimer(0);
                setAudioFile(null);
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml
                xml={refresh}
                width={Sizes.size30}
                height={Sizes.size25}
              />
              <Text style={record_text}>Record again</Text>
            </TouchableOpacity>
          </View>
          {finish_modal ? (
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
                    }}>
                    <Text style={title}>{finish_modal_title}</Text>
                    <Bulb width={Sizes.size70} height={Sizes.size70} />
                  </View>
                  <Text style={subtitle}>{finish_modal_content}</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={gotIt}>{finish_modal_btntext}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          ) : null}
        </View>
      ) : (
        <View style={{flex: 1}}>
          {!recording && (
            <>
              <View style={title_container}>
                <Text style={warmup_title}>{screen_title}</Text>
              </View>
              <View style={text_container}>
                <Text style={[record_text, subtitle_style]}>
                  {screen_subtitle}
                </Text>
                <Text style={text}>{screen_content}</Text>
              </View>
            </>
          )}
          {text_while_recording && recording ? (
            <View style={recording_while_container}>
              <Text style={recording_while_style}>{text_while_recording}</Text>
            </View>
          ) : null}
          <View style={record_btn}>
            <Pressable
              onPress={recording ? stopRecording : startRecording}
              style={{
                position: recording ? 'absolute' : 'relative',
                top: recording ? '85%' : 0,
              }}>
              {recording ? (
                <SvgXml
                  xml={record_cancel}
                  width={Sizes.size60}
                  height={Sizes.size60}
                />
              ) : (
                <SvgXml xml={Rec} width={Sizes.size60} height={Sizes.size60} />
              )}
            </Pressable>
          </View>
        </View>
      )}

      {record_end ? (
        <View style={btn_container}>
          <Button text={'Next'} onPress={() => next_press(filePath)} />
        </View>
      ) : (
        <View style={skip_content}>
          <TouchableOpacity disabled={recording} onPress={skip_press}>
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

export default VoiceRecord;
