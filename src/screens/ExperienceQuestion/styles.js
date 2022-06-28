import {StyleSheet} from 'react-native';
import {vScale} from '../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding, Sizes} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
      paddingTop: Sizes.size90,
    },
    title: {
      ...FontStyle.title,
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: vScale(10),
    },
    top_content: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: Sizes.size20,
    },
    center_content: {
      flex: 1,
    },
    bottom_content: {
      flex: 3,
      justifyContent: 'flex-end',
      marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
    },
    toasts_screen_btn: {
      height: Sizes.size80,
      justifyContent: 'center',
    },
    input: {
      marginTop: Sizes.size37,
      padding: Sizes.size21,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'rgba(11, 43, 62, .2)',
      borderRadius: 4,
    },
  });
};

export {styles};
