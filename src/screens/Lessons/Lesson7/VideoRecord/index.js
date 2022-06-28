import React, {useState} from 'react';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';
import {UploadFile} from '../../../../Services/firebase';

const VideoRecord = ({navigation, route}) => {
  const video = useSelector(
    store => store.lesson_7.Workout_room.Palm_heel_Strike,
  );
  const [loader, setLoader] = useState(false);
  const upload_record = async (uri, route_name) => {
    setLoader(true);
    const body = {
      lesson_name: 'Lesson_7',
      file_type: 'Video',
      file_format: 'mp4',
      file_name: 'Palm-heel_strike',
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
      source={video}
      backPress={() => navigation.goBack()}
      loader={loader}
      onPress={async uri => {
        await upload_record(uri, 'ThatFeel');
      }}
    />
  );
};

export default VideoRecord;
