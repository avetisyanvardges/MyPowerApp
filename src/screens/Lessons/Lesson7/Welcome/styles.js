import {StyleSheet} from 'react-native';
import {
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...FontStyle.headline_6,
    },
    subtitle: {
      ...FontStyle.subtitle_2,
      marginTop: Sizes.size17,
    },
    welcome_image: {
      width: fullScreen.width,
      height: Sizes.size350,
      marginTop: Sizes.size50,
    },
    background: {
      width: fullScreen.width,
      height: fullScreen.height,
      marginTop: deviceInfo.ios ? Sizes.size20 : 0,
      paddingHorizontal: Padding.horizontal,
      justifyContent: 'center',
    },
    btn_container: {
      height: deviceInfo.ios ? Sizes.size80 : Sizes.size200,
      justifyContent: 'flex-end',
      marginBottom: Sizes.size50,
    },
  });
};

export {styles};
