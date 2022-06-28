import React, {useEffect, useState} from 'react';
import {
  check,
  PERMISSIONS,
  request,
  requestMultiple,
} from 'react-native-permissions';
import {deviceInfo} from '../../../../assets/deviceInfo';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';
import {UploadFile} from '../../../../Services/firebase';

const Record = ({navigation, route}) => {
  const Workout_room = useSelector(store => store.lesson_2.Workout_room);
  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      check(
        deviceInfo.ios ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
      ).then(res => {
        if (res === 'denied') {
          getPermission();
        }
      });
    });

    return subscribe;
  }, [navigation]);
  const getPermission = () => {
    // requestMultiple(
    //   deviceInfo.ios
    //     ? (PERMISSIONS.IOS.MICROPHONE, PERMISSIONS.IOS.CAMERA)
    //     : (PERMISSIONS.ANDROID.RECORD_AUDIO, PERMISSIONS.ANDROID.CAMERA),
    // )
    //   .then(res => console.log(res, 'PERMISSION'))
    //   .catch(e => console.log(e, 'PERMISSION'));
  };
  const [current_screen, setScreen] = useState(route.params.screen);
  const [loader, setLoader] = useState(false);
  const upload_record = async (uri, route_name) => {
    setLoader(true);
    const body = {
      lesson_name: 'Lesson_2',
      file_type: 'Video',
      file_format: 'mp4',
      file_name: current_screen,
      file_path: uri,
      cb: () => {
        setLoader(false);
        navigation.navigate(route_name);
      },
    };
    await UploadFile(body);
  };

  const screens = {
    safety: (
      <VideoCamera
        source={Workout_room.safety_silent}
        video_name="Taking your Safety Stance"
        sheet_text={'Good job! '}
        onPress={async uri => {
          await upload_record(uri, 'RecordVoice');
        }}
        closePress={() => {
          navigation.navigate('RecordVoice');
        }}
        loader={loader}
      />
    ),
    no: (
      <VideoCamera
        source={Workout_room.safety_no}
        video_name="Taking your Safety Stance"
        sheet_text={'Good job! '}
        onPress={async uri => {
          await upload_record(uri, 'PROMO');
        }}
        closePress={() => {
          navigation.navigate('PROMO');
        }}
        loader={loader}
      />
    ),
  };

  return screens[current_screen];
};

export default Record;
