import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
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
import {
  ArrowLeft,
  Close,
  HideDescription,
  Pause,
  Play,
  Retry,
  ShowDescription,
} from '../../../assets/Svgs';
import {hScale} from '../../../assets/RootStyles/Scale';
import Orientation from 'react-native-orientation-locker';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../assets/deviceInfo';
import RotatePphone from '../../Rotate_phone';
import {SvgXml} from 'react-native-svg';
import voice from '../../../assets/Image/lessons/lesson3/voice.svg';
import {Slider} from 'native-base';

const VideoPlayer = ({
  source,
  require,
  closePress,
  backPress,
  description,
  video_name,
  sheet_text,
  onPress,
  sub_title,
}) => {
  const video = useRef(null);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {height, width} = useWindowDimensions();
  const [progressWidth, setProgressWidth] = useState(width);
  const [duration, setDuraion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [seekDuration, setSeekDuration] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isPlay, setIsPlay] = useState(true);
  const [paused, setPaused] = useState(isPlay);
  const [showDesc, setShowDesc] = useState(false);
  const [landscape, setLandscape] = useState(false);
  const [position, setPosition] = useState(false);
  const {container, videoLayout, subtitle} = styles();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setDuraion(0);
      setFinished(false);
      setLoaded(false);
      setIsPlay(true);
      setShowDesc(false);
      setPaused(true);
    });
    Orientation.unlockAllOrientations();
    Orientation.addOrientationListener(event => {
      if (event === 'LANDSCAPE-LEFT' || event === 'LANDSCAPE-RIGHT') {
        setLandscape(true);
      } else {
        setLandscape(false);
      }
    });

    return (
      unsubscribe,
      Orientation.removeOrientationListener(event => {
        if (event === 'LANDSCAPE-LEFT' || event === 'LANDSCAPE-RIGHT') {
          setLandscape(true);
        } else {
          setLandscape(false);
        }
      })
    );
  }, [source, require, onPress, backPress, description]);

  useEffect(() => {
    if (!isPlay) {
      !finished && setPaused(!paused);
    }
  }, [landscape]);

  useEffect(() => {
    setShowDesc(false);
    setIsPlay(true);
  }, [finished]);

  const replayVideo = async () => {
    video.current.seek(0);
    setFinished(false);
  };

  const play = () => {
    !finished && setPaused(!paused);
  };

  const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setProgressWidth(width);
  };
  //
  // const renderVideoSlider = () => {
  //   return (
  //     <View style={{flex: 1}}>
  //
  //     </View>
  //   );
  // };

  const renderControllers = () => {
    if (finished) {
      return (
        <TouchableOpacity onPress={replayVideo} style={{alignItems: 'center'}}>
          <Retry width={Sizes.size60} height={Sizes.size60} />
          <Text
            style={{
              fontSize: Sizes.size12,
              fontWeight: '400',
              lineHeight: 30,
              color: '#FFFFFF',
            }}>
            Play again
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              ...FontStyle.headline_6,
              color: Colors.white,
              textAlign: 'center',
            }}>
            {video_name}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setIsPlay(false);
              setPaused(false);
            }}
            activeOpacity={0.7}>
            {!paused && !loaded ? (
              <ActivityIndicator
                size={Sizes.size30}
                color={Colors.primary_red}
              />
            ) : (
              <Play width={Sizes.size60} height={Sizes.size60} />
            )}
          </TouchableOpacity>
          {sub_title ? (
            <View
              style={{
                paddingTop: 60,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <SvgXml xml={voice} width={Sizes.size50} height={Sizes.size50} />
              <Text style={subtitle}>
                Remember! you will be using your loud voice. We hope you learn
                to enjoy making noise!
              </Text>
            </View>
          ) : null}
        </View>
      );
    }
  };

  const renderVideoSlider = () => {
    return (
      <View style={{width: width, flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              onLayout={onLayout}
              style={{
                flex: 1,
                marginHorizontal: hScale(5),
              }}>
              {/*<Progress.Bar*/}
              {/*  color={Colors.primary_red}*/}
              {/*  unfilledColor={'rgba(255,255,255,.4)'}*/}
              {/*  borderColor={'transparent'}*/}
              {/*  progress={progress}*/}
              {/*  useNativeDriver*/}
              {/*  animationConfig={{bounciness: 10}}*/}
              {/*  width={progressWidth}*/}
              {/*/>*/}
              <Slider
                value={progress}
                onChange={res => {
                  console.log(res, duration, progress);
                  setProgress(res);
                  video.current.seek((res * duration) / 100);
                  // video.current.player.ref.seek((res * duration) / 100);
                }}
                size={'lg'}>
                <Slider.Track borderRadius={0} bgColor={'rgba(255,255,255,.4)'}>
                  <Slider.FilledTrack bgColor={Colors.secondary_pink} />
                </Slider.Track>
                <Slider.Thumb bgColor={Colors.secondary_pink} />
              </Slider>
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
              marginBottom: 20,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{color: Colors.white}}>
                {secondsToTime(Math.floor((progress * duration) / 100))}
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
              width: Sizes.size300,
              height: height + Sizes.size20,
              paddingTop: Sizes.size58,
              paddingHorizontal: Sizes.size10,
              right: -insets.left,
            }}>
            <ScrollView>
              <Text style={{color: Colors.white}}>{description}</Text>
            </ScrollView>
          </LinearGradient>
        )}
      </View>
    );
  };

  function secondsToTime(time) {
    return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
  }

  const handlesProgress = progress => {
    setProgress((progress.currentTime / duration) * 100);
    setSeekDuration(progress.seekableDuration);
  };
  const handleLoad = meta => {
    setLoaded(true);
    setDuraion(meta.duration);
  };
  console.log(landscape);
  return (
    <SafeAreaView style={{flex: 1}} edges={['top', 'left', 'right', 'bottom']}>
      {!landscape && <RotatePphone />}
      <View
        style={[
          container,
          {
            width: width + insets.right,
            left:
              deviceInfo.ios && !deviceInfo.small_screen ? -insets.right : 0,
          },
        ]}>
        {isPlay || !loaded ? (
          <View style={[videoLayout, {width: width + insets.left + 60}]}>
            <View
              style={{
                width: width + insets.left,
                height,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {renderControllers()}
            </View>
          </View>
        ) : (
          <View
            style={{
              width: width + insets.right,
              height,
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
            {description && !isPlay && !finished ? (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginTop: Sizes.size18,
                }}>
                <Pressable
                  onPress={() => setShowDesc(!showDesc)}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      ...FontStyle.subtitle_1,
                      color: Colors.white,
                      marginHorizontal: Sizes.size10,
                    }}>
                    {showDesc ? 'Hide Description' : 'Show Description'}
                  </Text>
                  {showDesc ? (
                    <HideDescription
                      width={Sizes.size20}
                      height={Sizes.size20}
                    />
                  ) : (
                    <ShowDescription
                      width={Sizes.size20}
                      height={Sizes.size20}
                    />
                  )}
                </Pressable>
              </View>
            ) : null}
          </View>
        </View>
        <Video
          resizeMode="cover"
          ref={video}
          style={{
            width: width + Sizes.size50,
            height: height + Sizes.size20,
            backgroundColor: Colors.black,
          }}
          source={source ? {uri: source} : require}
          fullscreen
          fullscreenOrientation="landscape"
          onProgress={handlesProgress}
          onLoad={handleLoad}
          onEnd={() => setFinished(true)}
          paused={paused}
          currentPosition={position}
        />
        {finished && (
          <View
            style={{
              width: deviceInfo.ios ? width : width + insets.left,
              height: Sizes.size90,
              backgroundColor: Colors.white,
              borderRadius: BorderStyles.radius.xs,
              flexDirection: 'row',
              alignItems: 'center',
              zIndex: 999,
              position: 'absolute',
              top: height - Sizes.size70,
              paddingHorizontal: Sizes.size15,
              paddingBottom:
                deviceInfo.ios && !deviceInfo.small_screen
                  ? Sizes.size20
                  : Sizes.size10,
            }}>
            <View style={{flex: 1}}>
              <Text>{sheet_text}</Text>
            </View>
            <Button
              text={'Next'}
              onPress={() => {
                onPress();
              }}
              containerStyle={{
                paddingVertical: Sizes.size10,
                paddingHorizontal: Sizes.size30,
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default VideoPlayer;
