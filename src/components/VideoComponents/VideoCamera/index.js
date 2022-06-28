import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Video from 'react-native-video';
import {styles} from './styles';
import * as Progress from 'react-native-progress';
import {
  BorderStyles,
  Colors,
  FontStyle,
  Sizes,
} from '../../../assets/RootStyles';
import {ArrowLeft, Close, Pause, Play, Retry} from '../../../assets/Svgs';
import {hScale, vScale} from '../../../assets/RootStyles/Scale';
import Orientation from 'react-native-orientation-locker';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../Button';
import {RNCamera} from 'react-native-camera';
import {Youtube} from '../../../assets/Svgs/video/Youtube';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../assets/deviceInfo';
import RotatePphone from '../../Rotate_phone';
import {check, PERMISSIONS, request} from 'react-native-permissions';
import * as PermissionsAndroid from 'react-native-permissions';

const VideoCamera = ({
  source,
  require,
  closePress,
  backPress,
  description,
  video_name,
  sheet_text,
  onPress,
  loader,
}) => {
  const video = useRef(null);
  const inset = useSafeAreaInsets();
  const {height, width} = useWindowDimensions();
  const [progressWidth, setProgressWidth] = useState(width);
  const [duration, setDuraion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [seekDuration, setSeekDuration] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isPlay, setIsPlay] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [paused, setPaused] = useState(isPlay);
  const [showDesc, setShowDesc] = useState(false);
  const [landscape, setLandscape] = useState(false);
  const [rec_uri, setUri] = useState('');
  const camera = useRef(null);
  const {videoLayout} = styles();

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setFinished(true);
      setPaused(true);
      setIsPlay(true);
    });

    const subscribe = navigation.addListener('focus', () => {
      checkPermission();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getPermission();
  }, [navigation]);

  const checkPermission = async () => {
    await check(
      deviceInfo.ios
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO,
    ).then(audioPermission => {
      check(
        deviceInfo.ios ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
      ).then(async cameraPermission => {
        if (audioPermission !== 'blocked' && cameraPermission !== 'denied') {
          playVideo();
        } else {
          await getPermission();
        }
      });
    });
  };

  const getPermission = async () => {
    await request(
      deviceInfo.ios
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO,
    )
      .then(async res => {
        if (res === 'denied' || res === 'blocked') {
          await closePress();
        } else {
          await request(
            deviceInfo.ios
              ? PERMISSIONS.IOS.CAMERA
              : PERMISSIONS.ANDROID.CAMERA,
          )
            .then(async res => {
              if (res === 'denied' || res === 'blocked') {
                await closePress();
              } else {
                if (!finished) {
                  await playVideo();
                  if (loaded && !paused) {
                    await setIsPlay(false);
                    await Submit();
                  }
                }
              }
            })
            .catch(e => {
              closePress();
            });
        }
      })
      .catch(e => {
        closePress();
      });
  };

  useEffect(() => {
    Orientation.unlockAllOrientations();
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

  useEffect(() => {
    setShowDesc(false);
    console.log(finished, 888888);
  }, [finished]);

  useEffect(() => {
    if (!finished) {
      if (loaded && !paused) {
        setIsPlay(false);
        Submit();
      }
    }
  }, [loaded, paused]);

  const replayVideo = async () => {
    video.current.seek(0);
    setFinished(false);
    setIsPlay(true);
  };

  const play = () => {
    !finished && setPaused(!paused);
  };

  const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setProgressWidth(width);
  };

  const playVideo = () => {
    setPaused(false);
  };

  //------------------ VIDEO CONTROLS --------------------------
  const renderControllers = () => {
    if (finished) {
      return (
        <TouchableOpacity onPress={replayVideo} style={{alignItems: 'center'}}>
          <Retry width={Sizes.size60} height={Sizes.size60} />
          <Text
            style={{
              fontSize: hScale(14),
              fontWeight: '400',
              lineHeight: 30,
              color: '#FFFFFF',
              marginTop: vScale(16),
            }}>
            Replay
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...FontStyle.headline_6, color: Colors.white}}>
            {video_name}
          </Text>
          <TouchableOpacity onPress={playVideo} activeOpacity={0.7}>
            {!paused && !loaded ? (
              <ActivityIndicator
                style={{
                  width: Sizes.size60,
                  height: Sizes.size60,
                }}
                color={Colors.primary_red}
              />
            ) : (
              <Youtube width={Sizes.size60} height={Sizes.size60} />
            )}
          </TouchableOpacity>
        </View>
      );
    }
  };
  //------------------ VIDEO CONTROLS --------------------------

  //------------------ VIDEO PROGRESS BAR --------------------------
  const renderVideoSlider = () => {
    return (
      <View style={{width: width, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              onLayout={onLayout}
              style={{
                flex: 1,
                marginHorizontal: hScale(5),
              }}>
              <Progress.Bar
                color={Colors.primary_red}
                unfilledColor={'rgba(255,255,255,.4)'}
                borderColor={'transparent'}
                progress={progress}
                useNativeDriver
                animationConfig={{bounciness: 10}}
                width={progressWidth}
              />
            </View>
            <Pressable onPress={play}>
              {!paused ? (
                <Pause width={hScale(20)} height={hScale(20)} />
              ) : (
                <Play width={hScale(20)} height={hScale(20)} />
              )}
            </Pressable>
          </View>
          <View
            style={{
              width: progressWidth,
              marginHorizontal: hScale(5),
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{color: Colors.white}}>
                {secondsToTime(Math.floor(progress * duration))}
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{color: Colors.white}}>
                {secondsToTime(Math.floor(seekDuration))}
              </Text>
            </View>
          </View>
        </View>
        {showDesc && (
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            locations={[0, 0.6, 0.3]}
            colors={['rgba(0,0,0,.0)', Colors.black]}
            style={{
              width: hScale(120),
              height: height + Sizes.size20,
              paddingTop: Sizes.size58,
            }}>
            <ScrollView>
              <Text style={{color: Colors.white}}>{description}</Text>
            </ScrollView>
          </LinearGradient>
        )}
      </View>
    );
  };
  //------------------ VIDEO PROGRESS BAR --------------------------

  function secondsToTime(time) {
    return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
  }

  const handlesProgress = progress => {
    setProgress(progress.currentTime / duration);
    setSeekDuration(progress.seekableDuration);
  };
  const handleLoad = meta => {
    setLoaded(true);
    setDuraion(meta.duration);
  };

  const Submit = async () => {
    if (camera) {
      const {uri, codec = 'mp4'} = await camera.current.recordAsync({
        mute: true,
      });
      await setUri(uri);
      console.info(uri);
    }
  };
  const Stop = () => {
    camera.current.stopRecording();
  };

  return (
    <View style={{width, height}}>
      {!landscape && <RotatePphone />}
      {isPlay ? (
        <View
          style={[
            videoLayout,
            {
              width: width + inset.left,
              height: height + Sizes.size18,
            },
          ]}>
          <View
            style={{
              width,
              height: height + inset.top,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {renderControllers()}
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            height: height,
            zIndex: 2,
            position: 'absolute',
            flexDirection: 'row',
          }}>
          {renderVideoSlider()}
        </View>
      )}
      <View
        style={{
          width,
          marginTop: hScale(5),
          position: 'absolute',
          zIndex: 998,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: hScale(12),
          }}>
          <Pressable
            onPress={async () => {
              if (closePress && !isPlay) {
                await closePress();
              } else {
                await backPress();
              }
            }}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginTop: Sizes.size18,
            }}>
            {!isPlay || finished ? (
              <Close
                width={Sizes.size30}
                height={Sizes.size30}
                color={Colors.white}
              />
            ) : (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <ArrowLeft
                  width={Sizes.size30}
                  height={Sizes.size30}
                  color={Colors.white}
                />
                <Text style={{...FontStyle.subtitle_2, color: Colors.white}}>
                  Back
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Video
          resizeMode="cover"
          ref={video}
          style={{
            width: width / 2,
            height: height + Sizes.size20,
            backgroundColor: Colors.black,
          }}
          source={source ? {uri: source} : require}
          fullscreen
          fullscreenOrientation="landscape"
          onProgress={handlesProgress}
          onLoad={handleLoad}
          onEnd={() => {
            setFinished(true);
            setIsPlay(true);
            Stop();
          }}
          paused={paused}
        />
        <RNCamera
          ref={camera}
          style={{width: width / 1.5}}
          defaultVideoQuality={RNCamera.Constants.VideoQuality['480p']}
          type={RNCamera.Constants.Type.front}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
        />
      </View>
      {finished && (
        <View
          style={{
            width: width + inset.left,
            height: Sizes.size90,
            backgroundColor: Colors.white,
            borderRadius: BorderStyles.radius.xs,
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: 999,
            position: 'absolute',
            top: height - Sizes.size70,
            paddingHorizontal: Sizes.size10,
          }}>
          <View style={{flex: 1}}>
            <Text>{sheet_text}</Text>
          </View>
          {loader ? (
            <ActivityIndicator size={Sizes.size30} color={Colors.primary_red} />
          ) : (
            <Button
              text={'Next'}
              onPress={() => {
                onPress(rec_uri);
              }}
              containerStyle={{
                paddingVertical: Sizes.size10,
                paddingHorizontal: Sizes.size30,
              }}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default VideoCamera;
