import React, {useEffect, useState} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import {deviceInfo} from '../../../../assets/deviceInfo';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';
import {UploadFile} from '../../../../Services/firebase';

const Record = ({navigation, route}) => {
  const Workout_room = useSelector(store => store.lesson_3.Workout_room);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getPermission();
  }, []);
  const getPermission = () => {
    request(
      deviceInfo.ios ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
    )
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };

  const upload_record = async (uri, route_name) => {
    setLoader(true);
    const body = {
      lesson_name: 'Lesson_3',
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

  const [current_screen, setScreen] = useState(
    route?.params?.screen || 'kneeStrike1',
  );

  const screens = {
    kneeStrike1: (
      <VideoCamera
        source={Workout_room.knee_strike}
        video_name="Knee Strike"
        onPress={async uri => {
          await upload_record(uri, 'PreVideo3');
        }}
        closePress={() => {
          navigation.navigate('PreVideo3', {screen: 'knee'});
        }}
        loader={loader}
      />
    ),
    ElbowStrike: (
      <VideoCamera
        source={Workout_room.elbow_rear}
        video_name="Elbow Strike - Rear Low"
        onPress={async uri => {
          await upload_record(uri, 'Elbow');
        }}
        closePress={() => {
          navigation.navigate('Elbow');
        }}
        loader={loader}
      />
    ),
  };

  return screens[current_screen];
};

export default Record;
