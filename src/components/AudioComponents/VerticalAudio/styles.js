import {StyleSheet} from 'react-native';
import {vScale} from '../../../assets/RootStyles/Scale';
import {
  Colors,
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../assets/RootStyles';
import {deviceInfo} from '../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...FontStyle.headline_5,
      textAlign: 'center',
    },
    subtitle: {
      ...FontStyle.body_2,
      marginTop: vScale(10),
    },
    background: {
      height: fullScreen.height,
      marginTop: 0,
    },
    content: {
      alignItems: 'center',
      marginTop: fullScreen.height < 800 ? 0 : Sizes.size20,
      marginHorizontal: Padding.horizontal,
    },
    image_default_style: {
      width: fullScreen.width - Sizes.size40,
      height: Sizes.size335,
      marginTop: fullScreen.height < 800 ? 0 : Sizes.size50,
    },
    controls_container: {
      position: 'absolute',
      top: fullScreen.height / 2,
    },
    progress_bar_container: {
      flex: deviceInfo.small_screen ? 0.78 : 0.7,
      marginHorizontal: Padding.horizontal,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    progress_seek_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn_container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: Sizes.size18,
      marginHorizontal: Padding.horizontal,
    },
    btn_text_container: {
      alignItems: 'center',
      marginBottom: Sizes.size20,
    },
    btn_text: {
      ...FontStyle.body_1,
      color: Colors.bright_gray,
    },
    endCAllContainer: {
      flexDirection: 'row',
      marginHorizontal: Sizes.size30,
      justifyContent: 'space-between',
    },
    callText: {
      color: '#fff',
    },
  });
};

export {styles};
