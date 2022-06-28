import React, {useEffect, useState} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import {deviceInfo} from '../../../../assets/deviceInfo';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';
import {UploadFile} from '../../../../Services/firebase';

const Grab_Record = ({navigation, route}) => {
  const Shoulder_grab = useSelector(store => store.lesson_5.Shoulder_grab);
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
  const [loader, setLoader] = useState(false);

  const upload_record = async (uri, route_name) => {
    setLoader(true);
    const body = {
      lesson_name: 'Lesson_2',
      file_type: 'Video',
      file_format: 'mp4',
      file_name: 'Shoulder_grab',
      file_path: uri,
      cb: () => {
        setLoader(false);
        navigation.navigate(route_name);
      },
    };
    await UploadFile(body);
  };

  return (
    <VideoCamera
      require={require('../../../../assets/Image/video/Lesson5.mp4')}
      source={Shoulder_grab}
      video_name="Shoulder Grab to Boundary"
      sheet_text={'Good job!'}
      onPress={async uri => {
        await upload_record(uri, 'L_M_A');
      }}
      closePress={() => {
        navigation.navigate('L_M_A');
      }}
      loader={loader}
    />
  );
};

export default Grab_Record;
