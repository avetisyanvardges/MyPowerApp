import {StyleSheet} from 'react-native';
import {Colors, FontStyle, fullScreen, Sizes} from '../../../assets/RootStyles';
import {deviceInfo} from '../../../assets/deviceInfo';

const styles = (width, height) => {
  return StyleSheet.create({
    container: {
      width: fullScreen.width,
      height: fullScreen.height,
      backgroundColor: Colors.black,
    },
    video_timeLine: {
      color: Colors.white,
    },
    gradientStyle: {
      width: Sizes.size170,
      height: height + Sizes.size20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    lightContainer: {
      flex: 1,
      width: Sizes.size100,
      marginVertical: Sizes.size23,
      borderRadius: Sizes.size68,
    },
    listContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selected_color_container: {
      flex: 1,
      width: Sizes.size100,
      marginVertical: Sizes.size23,
      alignItems: 'center',
      zIndex: 985,
    },
    color_container: {
      width: Sizes.size100,
      height: Sizes.size100,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopRightRadius: Sizes.size50,
      borderBottomRightRadius: Sizes.size50,
      backgroundColor: Colors.white,
    },
    answer_container: {
      width: Sizes.size300,
      minHeight: Sizes.size164,
      borderRadius: Sizes.size8,
      position: 'absolute',
      zIndex: 999,
      right: Sizes.size125,
      backgroundColor: Colors.white,
    },
    color: {
      width: Sizes.size80,
      height: Sizes.size80,
      borderRadius: Sizes.size40,
    },
    answer_title_container: {
      flex: 1,
    },
    answer_title: {
      ...FontStyle.subtitle_2,
      color: Colors.bright_gray,
    },
    answer_text: {
      ...FontStyle.body_2,
      color: Colors.bright_gray,
    },
  });
};

export {styles};
