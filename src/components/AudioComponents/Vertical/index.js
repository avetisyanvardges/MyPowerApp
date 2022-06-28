import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from './styles';
import {Colors, Padding, Sizes} from '../../../assets/RootStyles';
import VideoSheet from '../../BottomSheet';
import {Button} from '../../Button';
import Sound from 'react-native-sound';
import {Pause, Play, Retry} from '../../../assets/Svgs';
import * as Progress from 'react-native-progress';
import Header from '../components/header';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {EndCall} from '../../../assets/Image/background/lesson10/end.svg';
import {tell} from '../../../assets/Image/background/lesson10/tellIcon.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {deviceInfo} from '../../../assets/deviceInfo';
import UseCallbackState from '../../../Helper/UseCallbackState';

let sound;
Sound.setCategory('Playback');

const Vertical = ({
  interactive,
  endCall = false,
  endCallText,
  partText,
  next_audio,
  next_page,
  screen_title,
  finished_screen_title,
  screen_content,
  finished_screen_content,
  title_style,
  subtitle_style,
  sheet_title,
  sheet_content,
  sheet_height,
  onPress,
  background_source,
  image_source,
  image_style,
  buttonVisible = false,
  sheetVisible = false,
  filepath,
  progressVisible = false,
  text_in_button,
  goBack,
  closePress,
  empty_content,
}) => {
  const {
    container,
    title,
    subtitle,
    image_default_style,
    controls_container,
    background,
    content,
    progress_bar_container,
    progress_seek_container,
    btn_container,
    btn_text_container,
    btn_text,
    endCAllContainer,
    callText,
  } = styles();
  const [progressWidth, setProgressWidth] = useState(0);
  const [play_state, setPlayState] = useState('start');
  const {width, height} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [state, setState] = useState({
    play_seconds: 0,
    duration: 0,
    progress: 0,
  });
  const [playback_count, setPlayBackCount] = useState(0);
  const [played, setPlayed] = useState(false);
  const [loader, setLoader] = useState(false);
  const [finished, setFinished] = UseCallbackState(false);
  const navigation = useNavigation();
  let timeLineUpdate = useRef(null);

  useLayoutEffect(() => {
    sound = new Sound(filepath, '', () => {
      setState({
        ...state,
        duration: sound.getDuration(),
      });
    });
  }, []);

  const onLayout = ({nativeEvent: {layout}}) => {
    const {width} = layout;
    setProgressWidth(width - Padding.horizontal);
  };

  useEffect(() => {
    const subscribe = navigation.addListener('blur', () => {
      setPlayState('start');
      if (!interactive && sound) {
        sound.stop();
      }
      sound = null;
    });

    return subscribe;
  }, [navigation]);

  useEffect(() => {
    if (!sound && finished.val && screen_content === 'LET! ME! GO!') {
      next_page();
    }
  }, [sound, finished]);

  useEffect(() => {
    if (interactive) {
      const setSound = async () => {
        sound = await new Sound(filepath, '', () => {
          setPlayBackCount(0);
          setPlayed(true);
          setState({
            ...state,
            duration: sound.getDuration(),
          });
        });
      };
      setSound();
    }
  }, [filepath]);

  // useEffect(() => {
  //   if (sound && play_state === 'start') {
  //     if (state.duration !== 0) {
  //       startTimeLineUpdate();
  //       sound.play(onEnd);
  //     }
  //   }
  // }, [sound, state.duration]);

  const next = async () => {
    await setFinished({val: false});
    await setPlayState('start');
    await next_audio();
  };

  // useEffect(() => {
  //   if (endCall) {
  //     playPause();
  //   }
  // }, [endCall]);

  const playPause = async () => {
    if (finished.val) {
      setFinished({val: false});
      sound.setCurrentTime(0);
    }
    if (sound) {
      if (played) {
        await stopTimeLineUpdate();
        await setPlayed(false);
        await sound.pause();
      } else {
        await setPlayState('played');
        await setLoader(true);
        await startTimeLineUpdate();
        await setLoader(false);
        await setPlayed(true);
        await sound.play(onEnd);
      }
    } else {
      sound = new Sound(filepath, '', () => {
        try {
          console.log(7777);
          setLoader(true);
          setPlayed(true);
          setState({
            ...state,
            duration: sound.getDuration(),
          });
          setPlayState('played');
          setLoader(false);
        } catch (e) {
          console.log(e, 'ERROR');
        }
      });
    }
  };

  const startTimeLineUpdate = () => {
    if (sound) {
      if (timeLineUpdate) {
        clearInterval(timeLineUpdate.current);
      }
      timeLineUpdate.current = setInterval(() => {
        if (sound) {
          sound.getCurrentTime(seconds => {
            setState({
              ...state,
              progress: seconds ? seconds / state.duration : 1,
              play_seconds: seconds,
            });
          });
        }
      }, 100);
    }
  };

  const stopTimeLineUpdate = cb => {
    try {
      if (timeLineUpdate.current) {
        clearInterval(timeLineUpdate.current);
        if (cb) {
          setTimeout(() => {
            cb();
          }, 0);
        }
      }
    } catch (e) {
      console.log(e, 'ERROR');
    }
  };

  const onEnd = async success => {
    if (success) {
      await stopTimeLineUpdate(() => {
        setPlayed(false);
        setFinished({
          val: true,
          callback: state => {
            console.log(state, 7777);
            if (interactive && finished.val) {
              if (playback_count < 2) {
                setPlayBackCount(playback_count + 1);
                startTimeLineUpdate();
                sound.play(onEnd);
                setPlayed(true);
                setFinished({val: false});
              } else {
                sound = null;
                next();
              }
            }
          },
        });
        setState({
          ...state,
          progress: 1,
        });
      });
    }
  };

  const {progress, duration, play_seconds} = state;
  function secondsToTime(time) {
    return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
  }

  return (
    <View onLayout={onLayout} style={container}>
      <ImageBackground
        style={[
          background,
          {height: deviceInfo.small_screen ? height : height + Sizes.size60},
        ]}
        source={background_source}>
        <View
          style={{
            marginHorizontal: Padding.horizontal,
            paddingVertical: Sizes.size15,
          }}>
          {!endCall ? (
            <Header
              onPress={onPress}
              back={play_state === 'start' || interactive}
              backPress={goBack}
              close={play_state !== 'start' && !interactive}
              closePress={closePress}
              rightIcon={true}
            />
          ) : null}
        </View>
        {endCall ? (
          <View style={endCAllContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SvgXml
                style={{marginRight: 5}}
                xml={tell}
                width={Sizes.size15}
                height={Sizes.size13}
              />
              <Text style={callText}>{endCallText}</Text>
            </View>
            <View>
              <Text style={callText}>{partText}</Text>
            </View>
          </View>
        ) : null}

        <View style={content}>
          {empty_content && play_state !== 'start' && !finished.val ? null : (
            <>
              <Text style={[title, title_style]}>
                {finished.val && finished_screen_title
                  ? finished_screen_title
                  : screen_title}
              </Text>
              <Text style={[subtitle, subtitle_style]}>
                {finished.val && finished_screen_content
                  ? finished_screen_content
                  : screen_content}
              </Text>
              <Image
                source={image_source}
                style={[image_default_style, image_style]}
                resizeMode="contain"
              />
            </>
          )}
          <TouchableOpacity
            disabled={interactive && !sound}
            onPress={playPause}
            style={controls_container}>
            {loader ? (
              <ActivityIndicator
                size={Sizes.size30}
                color={Colors.primary_red}
              />
            ) : finished.val && endCall ? (
              <Retry width={Sizes.size70} height={Sizes.size70} />
            ) : !played && !endCall ? (
              <Play width={Sizes.size70} height={Sizes.size70} />
            ) : !endCall ? (
              <Pause width={Sizes.size70} height={Sizes.size70} />
            ) : null}
          </TouchableOpacity>
        </View>
        {(progressVisible && play_state !== 'start' && !finished.val) ||
        endCall ? (
          <View style={progress_bar_container}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Progress.Bar
                color={Colors.primary_red}
                unfilledColor={'rgba(255,255,255,.4)'}
                borderColor={'transparent'}
                progress={progress}
                useNativeDriver={true}
                animationConfig={{bounciness: 10}}
                width={progressWidth}
              />
            </View>
            <View
              style={[
                progress_seek_container,
                {
                  width: progressWidth,
                },
              ]}>
              <View>
                <Text style={{color: Colors.white}}>
                  {secondsToTime(Math.floor(progress * duration))}
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{color: Colors.white}}>
                  {secondsToTime(Math.floor(duration))}
                </Text>
              </View>
            </View>
            {endCall ? (
              <View style={{marginTop: 100}}>
                <TouchableOpacity
                  onPress={() => {
                    next_audio();
                    onPress();
                  }}>
                  <SvgXml
                    style={{marginRight: 20}}
                    xml={EndCall}
                    width={Sizes.size60}
                    height={Sizes.size60}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        ) : null}
        {buttonVisible || finished.val ? (
          <View style={btn_container}>
            {text_in_button && (
              <View style={btn_text_container}>
                <Text style={btn_text}>{text_in_button}</Text>
              </View>
            )}
            <Button text="Next" onPress={onPress} />
          </View>
        ) : null}
        {sheetVisible && !finished.val ? (
          <VideoSheet
            height={sheet_height}
            sheetTitle={sheet_title}
            sheetContent={sheet_content}
          />
        ) : null}
      </ImageBackground>
    </View>
  );
};

export default Vertical;
