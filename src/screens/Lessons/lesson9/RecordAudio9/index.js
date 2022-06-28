import React, {useState} from 'react';
import {ImageBackground} from 'react-native';
import {styles} from './styles';
import Record from './Components/Record';
import Photo from './Components/Photo';
import Result from './Components/Result';

const RecordPoses = ({route}) => {
  const [current_screen, setScreen] = useState('Record');
  const [photo_path, setPath] = useState('');
  const selectedPos = route.params.selected_pos;
  const screens = {
    Record: <Record setScreen={setScreen} />,
    Photo: (
      <Photo
        setScreen={setScreen}
        selectedPos={selectedPos}
        setPath={setPath}
      />
    ),
    Result: (
      <Result
        setScreen={setScreen}
        photo_path={photo_path}
        title={selectedPos.title}
      />
    ),
  };
  const {container} = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson9/MirrorchallengeBg.png')}
      style={container}>
      {screens[current_screen]}
    </ImageBackground>
  );
};

export default RecordPoses;
