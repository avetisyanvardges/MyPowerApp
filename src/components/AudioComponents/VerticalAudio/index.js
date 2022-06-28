import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  AppState,
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
import Header from '../components/header';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {EndCall} from '../../../assets/Image/background/lesson10/end.svg';
import {tell} from '../../../assets/Image/background/lesson10/tellIcon.svg';
import {deviceInfo} from '../../../assets/deviceInfo';
import UseCallbackState from '../../../Helper/UseCallbackState';
import {Slider} from 'native-base';

let sound;
Sound.setCategory('Playback');

const Vertical = ({
  interactive,
  endCall = false,
  auto_next,
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
  progress_bar_Style,
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
  const {height} = useWindowDimensions();
  const [progress, setProgress] = useState(1);
  const [duration, setDuration] = UseCallbackState(1);

  const [playback_count, setPlayBackCount] = useState(0);
  const [played, setPlayed] = useState(false);
  const [loader, setLoader] = useState(false);
  const [finished, setFinished] = UseCallbackState(false);
  const [error_message, setError] = UseCallbackState(false);
  const navigation = useNavigation();
  let timeLineUpdate = useRef(null);

  useLayoutEffect(() => {
    const appListener = AppState.addEventListener('change', res => {
      if (res === 'background' || res === 'inactive') {
        if (sound) {
          stopTimeLineUpdate();
          setPlayed(false);
          sound.pause();
        }
      }
    });
    return () => appListener.remove();
  }, []);

  const onLayout = ({nativeEvent: {layout}}) => {
    const {width} = layout;
    setProgressWidth(width - Padding.horizontal);
  };

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      if (!sound) {
        setSound();
      }
    });
    const unsubscribe = navigation.addListener('blur', () => {
      setPlayState('start');
      setPlayed(false);
      if (!interactive && sound) {
        sound.stop();
      }
      sound = null;
    });

    return unsubscribe, subscribe;
  }, [navigation]);

  useEffect(() => {
    if (!sound && finished.val && screen_content === 'LET! ME! GO!') {
      next_page();
    }
  }, [sound, finished]);

  useEffect(() => {
    if (interactive) {
      setSound();
      setPlayBackCount(0);
      setPlayed(true);
    }
  }, [filepath]);

  const setSound = () => {
    sound = new Sound(filepath, Sound.MAIN_BUNDLE, error => {
      if (error) {
        return console.log('failed to load the sound', error);
      }
    });
  };

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
      await sound.setCurrentTime(0);
      await setFinished({val: false});
      return;
    }
    if (sound) {
      if (played) {
        await stopTimeLineUpdate();
        await setPlayed(false);
        await sound.pause();
        return;
      }
      if (!played) {
        await setPlayState('played');
        await setLoader(true);
        await startTimeLineUpdate();
        await setLoader(false);
        await setPlayed(true);
        setTimeout(() => {
          sound?.play(onEnd);
        }, 1000);
        return;
      }
    }
  };

  const startTimeLineUpdate = async () => {
    if (sound) {
      if (timeLineUpdate) {
        clearInterval(timeLineUpdate.current);
      }
      await setDuration({val: sound.getDuration()});
      timeLineUpdate.current = setInterval(() => {
        if (sound) {
          sound.getCurrentTime(seconds => {
            setProgress((seconds / sound?.getDuration()) * 100);
          });
        }
      }, 250);
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

  const onEnd = success => {
    if (success) {
      stopTimeLineUpdate(() => {
        setPlayed(false);
        setFinished({
          val: true,
          callback: state => {
            if (interactive && finished) {
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

            if (!interactive && finished) {
              auto_next && auto_next();
              setError({val: false});
              return;
            }
          },
        });
        setProgress(1);
      });
    } else {
      setPlayed(false);
      setFinished({
        val: true,
        callback: () => {
          setProgress(1);
          setDuration({val: sound.getDuration()});
        },
      });
      setError({
        val: true,
        callback: async () => {
          await console.log(sound);
        },
      });
    }
  };

  function secondsToTime(time) {
    return (
      ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60 || '0')
    );
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
                {finished.val && error_message.val
                  ? 'OOPS! Try again'
                  : finished.val && finished_screen_title
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
            ) : finished.val ? (
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
          <View style={[progress_bar_container, progress_bar_Style]}>
            {/*<Progress.Bar*/}
            {/*  color={Colors.primary_red}*/}
            {/*  unfilledColor={'rgba(255,255,255,.4)'}*/}
            {/*  borderColor={'transparent'}*/}
            {/*  progress={progress}*/}
            {/*  useNativeDriver={true}*/}
            {/*  animationConfig={{bounciness: 10}}*/}
            {/*  width={progressWidth}*/}
            {/*/>*/}

            <Slider
              value={progress}
              onChange={res => {
                setProgress(res);
                sound.setCurrentTime((res * duration.val) / 100);
              }}
              colorScheme="red"
              size={'lg'}>
              <Slider.Track borderRadius={8} bgColor={'rgba(255,255,255,.4)'}>
                <Slider.FilledTrack bgColor={Colors.secondary_pink} />
              </Slider.Track>
              <Slider.Thumb zIndex={0} bgColor={Colors.secondary_pink} />
            </Slider>
            <View
              style={[
                progress_seek_container,
                {
                  width: progressWidth - Padding.horizontal,
                },
              ]}>
              <View>
                <Text style={{color: Colors.white}}>
                  {secondsToTime(Math.floor((progress * duration.val) / 100))}
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{color: Colors.white}}>
                  {secondsToTime(Math.floor(duration.val))}
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
