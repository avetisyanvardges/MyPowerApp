import {StyleSheet} from 'react-native';
import {FontStyle, fullScreen, Padding, Sizes} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
      paddingTop: Sizes.size20,
    },
    title: {
      ...FontStyle.title,
    },
    subtitle: {
      ...FontStyle.text,
      textAlign: 'center',
    },
    top_content: {
      flex: 1,
    },
    center_content: {
      flex: deviceInfo.small_screen ? 3 : 1.5,
      justifyContent: 'center',
    },
    bottom_content: {
      justifyContent: 'flex-end',
      marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
    },
    sub_text: {
      fontSize: 16,
      letterSpacing: 0.15,
    },
  });
};

export {styles};
