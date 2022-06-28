import React, {useEffect, useState} from 'react';
import VideoWithoutController from '../../../../components/VideoComponents/VideoWithoutController';
import {useSelector} from 'react-redux';

const SayA_Z_Video = ({navigation, route}) => {
  const louder = useSelector(store => store.lesson_5.a_Z.louder);
  const quieter = useSelector(store => store.lesson_5.z_a.quieter);
  const angrier = useSelector(store => store.lesson_5.a_Z.angrier);

  const [current_screen, setScreen] = useState('a_z_1');

  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, [navigation, route]);
  const screens = {
    a_z_1: (
      <VideoWithoutController
        videoUrl={louder}
        closePress={() => navigation.navigate('WarmupGreateScreens')}
        sheetHeight="30%"
        resizeMode="cover"
        pause={true}
      />
    ),
    z_a_1: (
      <VideoWithoutController
        videoUrl={quieter}
        closePress={() =>
          navigation.navigate('WarmupGreateScreens', {screen: 'angrier'})
        }
        sheetHeight="30%"
        resizeMode="cover"
        pause={true}
      />
    ),
    a_z_2: (
      <VideoWithoutController
        videoUrl={angrier}
        closePress={() =>
          navigation.navigate('WarmupGreateScreens', {screen: 'fantastic'})
        }
        sheetHeight="30%"
        resizeMode="cover"
        pause={true}
      />
    ),
    a_z_3: (
      <VideoWithoutController
        videoUrl={louder}
        closePress={() => navigation.navigate('Exercise')}
        sheetHeight="30%"
        resizeMode="cover"
        pause={true}
      />
    ),
  };

  return screens[current_screen];
};

export default SayA_Z_Video;
