import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {RNCamera} from 'react-native-camera';
import {ArrowRight, Capture, Close} from '../../../../assets/Svgs';
import {Button} from '../../../../components/Button';
import {Colors, FontStyle, Padding, Sizes} from '../../../../assets/RootStyles';
import {UploadFile} from '../../../../Services/firebase';
import {makeAction} from '../../../../store/makeAction';
import {SET_EMOTION_PHOTOS} from '../../../../types/LESSON_9';
import {useDispatch} from 'react-redux';

const Photo_game = ({navigation, route}) => {
  const camera = useRef();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState('Angry');
  const [started, setStarted] = useState(false);
  const [captured, setCaptured] = useState(false);
  const [finished, setFinished] = useState(false);
  const [loader, setLoader] = useState(false);

  let timeLine = useRef(null);
  const [emotion, setEmotion] = useState({
    Angry: {
      title: 'Show Angry',
      seconds: 10,
      next: 'Happy',
      file_path: '',
    },
    Happy: {
      title: 'Show Happy',
      seconds: 20,
      next: 'Sarcastic',
      file_path: '',
    },
    Sarcastic: {
      title: 'Show Sarcastic',
      seconds: 10,
      next: 'Strong',
      file_path: '',
    },
    Strong: {
      title: 'Show Strong',
      seconds: 20,
      file_path: '',
    },
  });
  const current_emotion = emotion[current];

  useEffect(() => {
    if (started) {
      takePhoto();
    }
  }, [current, started]);

  useEffect(() => {
    setTimeout(() => {
      setCaptured(false);
    }, 300);
  }, [captured]);

  const next_emotion = () => {
    if (current_emotion.next) {
      setCurrent(current_emotion.next);
    } else {
      setFinished(true);
    }
  };

  const takePhoto = () => {
    timeLine.current = setTimeout(async () => {
      await photo();
      await next_emotion();
    }, current_emotion.seconds * 1000);
  };

  const photo = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      await camera.current.takePictureAsync(options).then(async res => {
        await setEmotion({
          ...emotion,
          [current]: {...current_emotion, file_path: res.uri},
        });
        await setCaptured(true);
      });
    }
  };

  const takePhotoPress = async () => {
    if (started) {
      if (timeLine.current) {
        await clearTimeout(timeLine.current);
      }
      await photo();
      await next_emotion();
    } else {
      await setStarted(true);
    }
  };

  const uploadPhotos = async () => {
    await setLoader(true);
    Object.entries(emotion).map(([key, value]) => {
      const body = {
        lesson_name: 'Lesson_9',
        file_name: key,
        file_format: 'jpg',
        file_path: value.file_path,
        file_type: 'Photo',
        cb: res => {
          setLoader(false);
          dispatch(makeAction(SET_EMOTION_PHOTOS, {key, value: res}));
          navigation.navigate('PickPoses');
        },
      };
      UploadFile(body);
    });
  };

  const {
    container,
    header,
    content,
    sub_text,
    btn_container,
    emotion_text,
    oval_container,
    photo_btn,
    footer,
  } = styles();
  return (
    <View style={container}>
      <View style={header}>
        <View style={{flex: 1}}>
          <Close
            width={Sizes.size17}
            height={Sizes.size17}
            color={Colors.white}
          />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('PowerPoses');
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              ...FontStyle.body_1,
              color: Colors.white,
              marginRight: Sizes.size8,
            }}>
            Skip
          </Text>
          <ArrowRight
            width={Sizes.size17}
            height={Sizes.size17}
            color={Colors.white}
          />
        </Pressable>
      </View>
      <View style={content}>
        <View style={oval_container}>
          {captured && (
            <View
              style={[
                oval_container,
                {
                  backgroundColor: 'rgba(255,255,255,.2)',
                  position: 'absolute',
                  zIndex: 999,
                },
              ]}
            />
          )}
          <RNCamera
            ref={camera}
            style={{
              flex: 1,
            }}
            type={RNCamera.Constants.Type.front}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={
              'We need your permission to use your camera phone'
            }
            ratio={'16:9'}
          />
        </View>
      </View>
      <View style={footer}>
        <Text style={sub_text}>Place your face here</Text>
        <Text style={emotion_text}>{current_emotion?.title}</Text>
        {!finished ? (
          <View style={btn_container}>
            <Pressable onPress={takePhotoPress} style={photo_btn}>
              {!started && <Capture />}
            </Pressable>
          </View>
        ) : loader ? (
          <ActivityIndicator size={Sizes.size30} color={Colors.primary_red} />
        ) : (
          <View style={{width: '100%', paddingHorizontal: Padding.horizontal}}>
            <Button onPress={uploadPhotos} text={'Next'} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Photo_game;
