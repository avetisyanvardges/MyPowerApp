import {StyleSheet} from 'react-native';
import {
  BackgroundColors,
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
      backgroundColor: BackgroundColors.white,
      paddingHorizontal: Padding.horizontal,
    },
    header: {
      paddingTop: deviceInfo.small_screen ? Sizes.size20 : Sizes.size45,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    back_container: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    left_container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    back_text: {
      fontSize: Sizes.size14,
      fontWeight: deviceInfo.ios ? '600' : 'bold',
      lineHeight: 24,
    },
    title: {
      ...FontStyle.title,
    },

    subtitle: {
      ...FontStyle.text,
      marginTop: Sizes.size10,
    },
    background: {
      width: fullScreen.width,
      height: fullScreen.height,
      marginTop: deviceInfo.ios ? Sizes.size20 : 0,
      paddingHorizontal: Padding.horizontal,
    },
    content: {
      flex: 1,
      zIndex: 1,
    },
    btnContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#BD3150',
      padding: Sizes.size5,
      borderRadius: 5,
      width: '100%',
    },
    btnTextStyle: {
      marginRight: Sizes.size4,
      color: Colors.white,
      fontSize: Sizes.size12,
      lineHeight: 15.7,
      textAlign: 'center',
    },
    footer: {
      marginVertical: Sizes.size18,
    },
  });
};

export {styles};
