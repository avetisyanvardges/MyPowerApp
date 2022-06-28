import React, {useState} from 'react';
import VideoCamera from '../../../../components/VideoComponents/VideoCamera';
import {useSelector} from 'react-redux';
import {UploadFile} from '../../../../Services/firebase';

const VideoRecord8 = ({navigation, route}) => {
  const video = useSelector(store => store.lesson_8.Non_exercise.muscle);

  const [loader, setLoader] = useState(false);

  const upload_record = async (uri, route_name) => {
    setLoader(true);
    const body = {
      lesson_name: 'Lesson_8',
      file_type: 'Video',
      file_format: 'mp4',
      file_name: 'Embarrassment_muscle',
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
      closePress={() => navigation.navigate('Discomfort')}
      sheet_text={'Great!'}
      source={video}
      onPress={async uri => {
        await upload_record(uri, 'Discomfort');
      }}
      loader={loader}
    />
  );
};

export default VideoRecord8;
