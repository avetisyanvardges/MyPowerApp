import {StyleSheet} from 'react-native';
import {
  BackgroundColors,
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
      paddingTop: Sizes.size20,
    },
    container: {
      flex: 1,
      backgroundColor: BackgroundColors.white,
      paddingHorizontal: Padding.horizontal,
    },
    content: {
      flex: 1,
      zIndex: 1,
      marginTop: Sizes.size20,
    },
    title_container: {
      marginTop: vScale(20),
    },
    warmup_title: {
      ...FontStyle.title,
    },
    text_container: {
      marginTop: vScale(12),
    },
    text: {
      ...FontStyle.text,
    },
    bottom_content: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
    },
  });
};

export {styles};
