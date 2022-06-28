import React, {useEffect} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import {deviceInfo} from '../../../../assets/deviceInfo';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useSelector} from 'react-redux';

const NoVideo = ({navigation}) => {
  const workout = useSelector(store => store.lesson_2.Workout_room);
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
  return (
    <VideoPlayer
      source={workout.safety_no}
      video_name="Safety Stance with 'NO!'"
      onPress={() => {
        navigation.navigate('RecordSelfNO');
      }}
      description={
        "Step forward and bring your hands up in front of your face 'Clothesline', 'No'"
      }
      sheet_text={'Do this a few times until it feels more comfortable.'}
    />
  );
};

export default NoVideo;
