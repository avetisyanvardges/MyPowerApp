import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    title: {
      ...FontStyle.title,
      textAlign: 'center',
      color: '#fff',
    },
    subtitle: {
      ...FontStyle.body_1,
      marginTop: vScale(10),
    },
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
    },
    top_content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Sizes.size20,
    },
    center_content: {
      flex: 2,
      justifyContent: 'center',
      paddingHorizontal: Padding.horizontal,
    },
    bottom_content: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
      paddingHorizontal: Padding.horizontal,
    },
    title_container: {
      width: '100%',
      backgroundColor: '#fff',
      zIndex: 1,
      borderRadius: 8,
      padding: 20,
      marginVertical: 30,
    },
    small_text: {
      color: '#111111',
      opacity: 0.6,
      fontSize: 12,
      paddingVertical: 10,
    },
  });
};

export {styles};
