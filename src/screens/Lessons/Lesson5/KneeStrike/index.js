import React, {useEffect, useState} from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';
import {deviceInfo} from '../../../../assets/deviceInfo';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';
import {UploadFile} from '../../../../Services/firebase';

const KneeStrike5 = ({navigation}) => {
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
      source={Shoulder_grab}
      video_name="Leave Me Alone!"
      sheet_text={'Good job!'}
      onPress={async uri => {
        await upload_record(uri, 'HowYouFell');
      }}
      closePress={() => {
        navigation.navigate('HowYouFell');
      }}
      loader={loader}
    />
  );
};

export default KneeStrike5;
