import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Mute from '../../../assets/Svgs/video/volume-mute.svg';
import On from '../../../assets/Svgs/video/volume-on.svg';
import ArrowRight from '../../../assets/Svgs/video/arrow-right.svg';
import X from '../../../assets/Svgs/video/x.svg';
import Video from 'react-native-video';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import {hScale, vScale} from '../../../assets/RootStyles/Scale';
import {Colors, fullScreen, Sizes} from '../../../assets/RootStyles';
import VideoSheet from '../../BottomSheet';
import {Pause, Play} from '../../../assets/Svgs';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {OutlinePlay} from '../../../assets/Svgs/lesson_1/OutlinePlay';

const VerticalVideo = ({
  videoUrl,
  sheetTitle,
  sheetContent,
  skipPress,
  screen_title,
  visibleContent = false,
  sheetHeight,
  closePress,
  showMuted,
  controls,
  resizeMode,
  pause,
  onEnd,
  videoRequire,
  progressbar,
  videoHeight,
  repeat,
  showPlayPause,
  video_paused,
  onLoad,
  video_game = false,
  rightIcon = false,
  next_scene,
}) => {
  const video = useRef(null);
  const {width, height} = useWindowDimensions();
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState({});
  const [muted, setMuted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progressWidth, setProgressWidth] = useState(width);
  const [duration, setDuraion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [seekDuration, setSeekDuration] = useState(0);
  const navigation = useNavigation();

  const {
    container,
    header,
    btn_container,
    close_btn,
    title_screen,
    btnContainerStyle,
    btnTextStyle,
  } = styles();

  useEffect(() => {
    if (video_paused) {
      setPaused(true);
    } else {
      setPaused(false);
    }
  }, [video_paused]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', async () => {
      await setFinished(true);
      await setPaused(true);
    });
    const subscribe = navigation.addListener('focus', async () => {
      setPaused(false);
      await replayVideo();
    });

    return unsubscribe, subscribe;
  }, [navigation]);

  useEffect(() => {
    if (finished && video_game) {
      setFinished(false);
      setLoaded(false);
      repeat();
    } else if (finished) {
      setPaused(finished);
    }
  }, [finished]);

  const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setProgressWidth(width);
  };

  const play = () => {
    !finished && setPaused(!paused);
  };

  const replayVideo = async () => {
    video.current.seek(0);
    setFinished(false);
  };

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
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <View style={[container, {width, height: videoHeight}]}>
      <View style={header}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {closePress && (
            <TouchableOpacity style={close_btn} onPress={closePress}>
              <SvgXml xml={X} width={Sizes.size25} height={Sizes.size25} />
            </TouchableOpacity>
          )}
          {rightIcon && (
            <View>
              <Pressable>
                <View style={[btnContainerStyle]}>
                  <Text style={btnTextStyle}>Bk2Baln</Text>
                  <OutlinePlay width={Sizes.size20} height={Sizes.size20} />
                </View>
              </Pressable>
            </View>
          )}
        </View>
        <View style={btn_container}>
          {showMuted && (
            <Pressable onPress={() => setMuted(!muted)}>
              {muted ? (
                <SvgXml xml={Mute} width={hScale(18)} height={hScale(18)} />
              ) : (
                <SvgXml xml={On} width={hScale(18)} height={hScale(18)} />
              )}
            </Pressable>
          )}

          {skipPress && (
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={skipPress}>
              <Text style={{marginHorizontal: 10, color: Colors.white}}>
                Skip
              </Text>
              <SvgXml xml={ArrowRight} width={hScale(18)} height={hScale(18)} />
            </TouchableOpacity>
          )}
        </View>
        {visibleContent ? (
          <View style={{marginTop: Sizes.size70}}>
            <Text style={title_screen}>{screen_title}</Text>
          </View>
        ) : null}
      </View>
      {!loaded && (
        <ActivityIndicator
          size={hScale(30)}
          style={{
            position: 'absolute',
            alignSelf: 'center',
            width: '100%',
            height: '100%',
            zIndex: 990,
          }}
          color={Colors.primary_red}
        />
      )}
      <Video
        ref={video}
        style={{
          alignSelf: 'center',
          width: '100%',
          height: videoHeight || '100%',
          backgroundColor: Colors.black,
        }}
        source={
          videoUrl
            ? {
                uri: videoUrl,
              }
            : videoRequire
        }
        resizeMode={resizeMode || 'contain'}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        shouldPlay={true}
        useNativeControls={false}
        muted={muted}
        onProgress={handlesProgress}
        onLoad={handleLoad}
        paused={paused}
        onEnd={() => {
          setFinished(true);
          if (onEnd) {
            onEnd();
          }
        }}
        repeat={repeat || false}
      />
      {progressbar && (
        <View
          style={{
            flex: 1,
            height: height,
            zIndex: 0,
            position: 'absolute',
            bottom: fullScreen.height < 800 ? Sizes.size90 : Sizes.size50,
            flexDirection: 'row',
          }}>
          <View style={{width}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  onLayout={onLayout}
                  style={{
                    flex: 1,
                    marginHorizontal: Sizes.size18,
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
                {showPlayPause && (
                  <Pressable onPress={play} style={{width: 40, zIndex: 999}}>
                    {!paused ? (
                      <Pause width={Sizes.size30} height={Sizes.size30} />
                    ) : (
                      <Play width={Sizes.size30} height={Sizes.size30} />
                    )}
                  </Pressable>
                )}
              </View>
              <View
                style={{
                  width: progressWidth,
                  marginHorizontal: Sizes.size18,
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
          </View>
        </View>
      )}

      {pause && (
        <View style={{position: 'absolute', bottom: vScale(40)}}>
          <View
            style={{
              flex: 1,
              width: fullScreen.width,
              alignItems: 'center',
            }}>
            <Pressable onPress={() => setPaused(!paused)}>
              {paused ? (
                <Play width={hScale(70)} height={hScale(70)} />
              ) : (
                <Pause width={hScale(70)} height={hScale(70)} />
              )}
            </Pressable>
          </View>
        </View>
      )}

      {sheetContent || sheetTitle ? (
        <VideoSheet
          sheetContent={sheetContent}
          sheetTitle={sheetTitle}
          height={sheetHeight}
        />
      ) : null}
    </View>
  );
};

export default VerticalVideo;
