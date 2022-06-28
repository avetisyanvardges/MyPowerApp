import React, {useEffect, useState} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {styles} from './styles';
import Orientation from 'react-native-orientation-locker';
import RotatePphone from '../../Rotate_phone';
import Video from './components/Video';
import Light_component from './components/Light_component';

function Lights() {
  const [landscape, setLandscape] = useState();

  useEffect(() => {
    Orientation.addOrientationListener(event => {
      if (event === 'LANDSCAPE-LEFT' || event === 'LANDSCAPE-RIGHT') {
        setLandscape(true);
      } else {
        setLandscape(false);
      }
    });
    return Orientation.removeOrientationListener(event => {
      if (event === 'LANDSCAPE-LEFT' || event === 'LANDSCAPE-RIGHT') {
        setLandscape(true);
      } else {
        setLandscape(false);
      }
    });
  }, []);
  const {container} = styles();
  const {width, height} = useWindowDimensions();
  return (
    <View style={{width, height}}>
      {!landscape && <RotatePphone />}
      <View style={container}>
        <View style={{flex: 1}}>
          <Video />
        </View>
        <View style={{flex: 0.2}}>
          <Light_component />
        </View>
      </View>
    </View>
  );
}

export default Lights;
