import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Close from '../../../assets/Svgs/video/x.svg';
import Video from 'react-native-video';
import {SvgXml} from 'react-native-svg';
import {hScale, vScale} from '../../../assets/RootStyles/Scale';
import {BorderStyles, Colors, FontStyle} from '../../../assets/RootStyles';
import {Pause, Play, Retry} from '../../../assets/Svgs';
import {Button} from '../../Button';

const StepVideo = ({url, videoRequire, skipPress, onPress, sheet_text}) => {
  const video = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [paused, setPaused] = useState(true);
  const [finished, setFinished] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const btnPress = () => {
    if (finished) {
      video.current.seek(0);
      setFinished(false);
    } else {
      setPaused(!paused);
    }
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 999,
          paddingTop: 50,
        }}
        onPress={skipPress}>
        <SvgXml
          style={{marginHorizontal: 20, color: Colors.white}}
          xml={Close}
          width={hScale(30)}
          height={hScale(30)}
        />
      </TouchableOpacity>
      <Video
        ref={video}
        source={url ? {uri: url} : videoRequire}
        style={{
          alignSelf: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: Colors.black,
        }}
        resizeMode={'contain'}
        onLoadStart={() => setIsPlay(true)}
        onLoad={res => setLoaded(true)}
        paused={paused}
        controls={true}
        onEnd={() => setFinished(true)}
      />
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 998,
        }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {!isPlay && (
            <Text style={{...FontStyle.subtitle, color: Colors.white}}>
              Whats Going On Here
            </Text>
          )}
          {!loaded ? (
            <ActivityIndicator
              size={hScale(30)}
              style={{
                position: 'absolute',
                alignSelf: 'center',
                width: '100%',
                height: '100%',
                zIndex: 999,
              }}
              color={Colors.primary_red}
            />
          ) : (
            <Pressable onPress={btnPress}>
              {finished ? (
                <Retry width={hScale(60)} height={hScale(60)} />
              ) : paused ? (
                <Play width={hScale(60)} height={hScale(60)} />
              ) : (
                <Pause width={hScale(60)} height={hScale(60)} />
              )}
            </Pressable>
          )}
        </View>
        {finished && (
          <View
            style={{
              width: '100%',
              height: vScale(90),
              backgroundColor: Colors.white,
              borderRadius: BorderStyles.radius.xs,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: hScale(10),
            }}>
            <View style={{flex: 1}}>
              <Text>{sheet_text}</Text>
            </View>
            <Button
              text={'Next'}
              onPress={onPress}
              containerStyle={{
                paddingVertical: hScale(10),
                paddingHorizontal: hScale(30),
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default StepVideo;
