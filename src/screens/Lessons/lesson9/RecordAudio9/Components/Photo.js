import React, {useEffect, useRef, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Border} from '../../../../../assets/Svgs/Border';
import {
  Colors,
  FontStyle,
  fullScreen,
  Sizes,
} from '../../../../../assets/RootStyles';
import {Capture} from '../../../../../assets/Svgs';
import {styles} from '../styles';

const Photo = ({setScreen, selectedPos, setPath}) => {
  const camera = useRef();
  const {btn_container, photo_btn} = styles();
  const [start_timer, setStart] = useState(false);
  const [count, setCount] = useState(5);

  const photos = {
    Strong: require('../../../../../assets/Image/lessons/lesson9/strong.png'),
    Invincible: require('../../../../../assets/Image/lessons/lesson9/invincible.png'),
    Illana: require('../../../../../assets/Image/lessons/lesson9/Illana.png'),
    Supermam: require('../../../../../assets/Image/lessons/lesson9/supermam.png'),
    WonderWoman: require('../../../../../assets/Image/lessons/lesson9/wonderWoman.png'),
    Victory: require('../../../../../assets/Image/lessons/lesson9/victory.png'),
  };

  useEffect(() => {
    if (start_timer) {
      if (count > 0) {
        setTimeout(() => {
          setCount(count - 1);
        }, 1000);
      }
      if (count === 0) {
        take_photo();
      }
    }
  }, [start_timer, count]);

  const take_photo = async () => {
    if (camera.current) {
      const options = {quality: 0.5, base64: true};
      await camera.current.takePictureAsync(options).then(async res => {
        console.log(res.uri);
        await setPath(res.uri);
        await setScreen('Result');
      });
    }
  };

  return (
    <RNCamera
      ref={camera}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      defaultVideoQuality={RNCamera.Constants.VideoQuality['480p']}
      type={RNCamera.Constants.Type.front}
      permissionDialogTitle={'Permission to use camera'}
      permissionDialogMessage={
        'We need your permission to use your camera phone'
      }>
      <View style={{alignItems: 'center'}}>
        <Border width={fullScreen.width - Sizes.size70} height={'80%'} />
        <Image
          style={{
            width: fullScreen.width,
            height: '80%',
            position: 'absolute',
            top: -Sizes.size65,
          }}
          source={photos[selectedPos.title]}
        />
        <Text
          style={{
            ...FontStyle.headline_5,
            color: Colors.white,
            marginTop: Sizes.size30,
            marginBottom: Sizes.size30,
          }}>
          My Favorite Power Pose
        </Text>

        <View style={btn_container}>
          <Pressable onPress={() => setStart(true)} style={photo_btn}>
            {start_timer ? <Text>{count}</Text> : <Capture />}
          </Pressable>
        </View>
      </View>
    </RNCamera>
  );
};

export default Photo;
