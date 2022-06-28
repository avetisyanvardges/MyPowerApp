import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Video from 'react-native-video';
import {styles} from './styles';
import * as Progress from 'react-native-progress';
import {Colors, Sizes} from '../../../assets/RootStyles';
import {Close, Pause, Play} from '../../../assets/Svgs';
import {hScale} from '../../../assets/RootStyles/Scale';
import Orientation from 'react-native-orientation-locker';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../../Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../assets/deviceInfo';
import RotatePphone from '../../Rotate_phone';

const VideoGame = ({
  source,
  require,
  lightData,
  renderLightColor,
  selectedColor,
  current_scene,
  setSelectedColor,
  setCurrentScene,
  onPress,
  setEnded,
  closePress,
}) => {
  const video = useRef(null);
  const inset = useSafeAreaInsets();
  const {height, width} = useWindowDimensions();
  const [progressWidth, setProgressWidth] = useState(width);
  const [duration, setDuraion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [seekDuration, setSeekDuration] = useState(0);
  const [finished, setFinished] = useState(false);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [position_center, setPositionCenter] = useState(0);
  const [landscape, setLandscape] = useState(false);

  const {
    container,
    video_timeLine,
    gradientStyle,
    lightContainer,
    listContainer,
    selected_color_container,
    color_container,
    answer_container,
    color,
    answer_title_container,
    answer_title,
    answer_text,
  } = styles(width, height);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setPaused(true);
    });

    return unsubscribe;
  }, [navigation]);

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

  const play = () => {
    !finished && setPaused(!paused);
  };

  const onLayout = event => {
    const {width} = event.nativeEvent.layout;
    setProgressWidth(width);
  };

  const answerLayout = event => {
    const {height} = event.nativeEvent.layout;
    console.log(height);
    const center = (height - Sizes.size100) / 2;
    setPositionCenter(center);
  };

  const colorPosition = color_name => {
    const positions = {
      Red: {justifyContent: 'flex-start'},
      Yellow: {justifyContent: 'center'},
      Green: {justifyContent: 'flex-end'},
    };

    return positions[color_name];
  };

  const answerPosition = color_name => {
    const positions = {
      Red: {top: Sizes.size46 - 0.3},
      Yellow: {bottom: 70},
      Green: {bottom: Sizes.size46 + 0.3},
    };

    return positions[color_name];
  };

  const pressAnswerButton = () => {
    setSelectedColor('');
    setEnded(false);
    if (current_scene.nextScene) {
      setCurrentScene(current_scene.nextScene);
    } else {
      onPress();
    }
  };

  const renderVideoSlider = () => {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: Sizes.size10,
            }}>
            <View
              onLayout={onLayout}
              style={{
                flex: 1,
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
                <Pause width={Sizes.size40} height={Sizes.size40} />
              ) : (
                <Play width={Sizes.size40} height={Sizes.size40} />
              )}
            </Pressable>
          </View>

          <View
            style={{
              width: progressWidth,
              marginHorizontal: Sizes.size10,
              marginBottom: Sizes.size10,
              flexDirection: 'row',
            }}>
            <View>
              <Text style={video_timeLine}>
                {secondsToTime(Math.floor(progress * duration))}
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={video_timeLine}>
                {secondsToTime(Math.floor(seekDuration))}
              </Text>
            </View>
          </View>
        </View>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          locations={[0, 0.6, 0.3]}
          colors={['rgba(0,0,0,.0)', Colors.black]}
          style={gradientStyle}>
          <View
            style={[
              lightContainer,
              {backgroundColor: selectedColor ? 'transparent' : Colors.white},
            ]}>
            {selectedColor ? (
              <View
                style={[
                  selected_color_container,
                  colorPosition(selectedColor.color_name),
                ]}>
                <View style={{flexDirection: 'row'}}>
                  <View style={color_container}>
                    <View
                      style={[color, {backgroundColor: selectedColor.color}]}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <FlatList
                keyExtractor={item => item.id}
                data={lightData}
                renderItem={renderLightColor}
                ItemSeparatorComponent={() => (
                  <View style={{height: Sizes.size15}} />
                )}
                contentContainerStyle={listContainer}
              />
            )}
          </View>
        </LinearGradient>
      </View>
    );
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
  };

  return (
    <SafeAreaView style={{flex: 1}} edges={['top', 'left', 'right']}>
      {!landscape && <RotatePphone />}
      <View
        style={[
          container,
          {
            width: width + inset.left,
            height: height + Sizes.size20,
            left: deviceInfo.ios && !deviceInfo.small_screen ? -inset.right : 0,
          },
        ]}>
        <View
          style={{
            width: width + inset.left,
            marginTop: hScale(5),
            position: 'absolute',
            zIndex: 999,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginHorizontal: hScale(12),
            }}>
            <TouchableOpacity
              onPress={closePress}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginTop: Sizes.size18,
              }}>
              <Close
                width={Sizes.size30}
                height={Sizes.size30}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
        {!loaded && (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator
              style={{width: Sizes.size60, height: Sizes.size60}}
              color={Colors.primary_red}
            />
          </View>
        )}
        <Video
          resizeMode="cover"
          ref={video}
          style={{
            width: width + Sizes.size50,
            height: height + Sizes.size20,
            backgroundColor: Colors.black,
            zIndex: 0,
          }}
          source={source ? {uri: source} : require}
          fullscreen
          fullscreenOrientation="landscape"
          onProgress={handlesProgress}
          onLoad={handleLoad}
          onEnd={() => {
            setEnded(true);
            setFinished(true);
          }}
          paused={paused}
        />
        <View
          style={{
            width: width + inset.left,
            height: height,
            zIndex: 990,
            position: 'absolute',
            flexDirection: 'row',
          }}>
          {renderVideoSlider()}
        </View>
        {selectedColor ? (
          <View
            onLayout={answerLayout}
            style={[
              answer_container,
              answerPosition(selectedColor.color_name),
            ]}>
            <View style={{padding: 20}}>
              <View style={answer_title_container}>
                <Text
                  style={
                    answer_title
                  }>{`You Chose ${selectedColor.color_name}`}</Text>
                <Text style={answer_text}>{selectedColor.text}</Text>
              </View>
              <View
                style={{
                  height: Sizes.size40,
                  justifyContent: 'flex-end',
                  marginTop: Sizes.size13,
                }}>
                <Button text="Next" onPress={pressAnswerButton} />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default VideoGame;
