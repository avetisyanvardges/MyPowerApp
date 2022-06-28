import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TouchableOpacity,
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
import {Colors, fullScreen} from '../../../assets/RootStyles';
import VideoSheet from '../../BottomSheet';
import {Pause, Play} from '../../../assets/Svgs';

const VideoWithoutController = ({
  videoUrl,
  sheetTitle,
  sheetContent,
  skipPress,
  sheetHeight,
  closePress,
  showMuted,
  controls,
  resizeMode,
  pause,
  onEnd,
  videoRequire,
}) => {
  const video = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState({});
  const [muted, setMuted] = useState(false);
  const [paused, setPaused] = useState(false);

  const {container, header, btn_container, close_btn} = styles();

  return (
    <View style={container}>
      <View style={header}>
        {closePress && (
          <TouchableOpacity style={close_btn} onPress={closePress}>
            <SvgXml xml={X} width={hScale(20)} height={hScale(20)} />
          </TouchableOpacity>
        )}
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
      </View>
      {!loaded && (
        <ActivityIndicator
          size={hScale(30)}
          style={{
            position: 'absolute',
            alignSelf: 'center',
            width: '100%',
            height: '100%',
            zIndex: 998,
          }}
          color={Colors.primary_red}
        />
      )}
      <Video
        ref={video}
        style={{
          alignSelf: 'center',
          width: '100%',
          height: '100%',
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
        controls={controls}
        onLoad={res => setLoaded(true)}
        onVideoLoad={res => console.log(res)}
        paused={paused}
        onEnd={onEnd}
      />
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

export default VideoWithoutController;
