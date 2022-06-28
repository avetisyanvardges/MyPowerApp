import {StyleSheet} from 'react-native';
import {hScale, vScale} from '../../assets/RootStyles/Scale';
import {Colors, fullScreen, Padding, Sizes} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
      paddingTop: Sizes.size20,
    },
    subtitle: {
      fontSize: 14,
      letterSpacing: 0.15,
      marginVertical: hScale(5),
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      lineHeight: 30,
      letterSpacing: 0.18,
      marginVertical: hScale(5),
    },
    select_container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: vScale(60),
    },

    input: {
      color: Colors.black,
      marginTop: vScale(37),
      padding: hScale(12),
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'rgba(11, 43, 62, .2)',
      borderRadius: hScale(4),
    },
    whiteBackground: {
      backgroundColor: '#0B2B3E',
      width: fullScreen.width,
      height: fullScreen.height + vScale(100),
      paddingHorizontal: Padding.horizontal,
      paddingBottom: deviceInfo.ios ? vScale(150) : vScale(100),
      alignItems: 'center',
      paddingVertical: hScale(150),
    },
    whiteTitle: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: '500',
      lineHeight: 42,
      letterSpacing: 0.18,
      marginTop: hScale(15),
    },
    whitSubtitle: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 42,
      letterSpacing: 0.18,
    },
    top_content: {
      justifyContent: 'flex-start',
      paddingTop: Sizes.size20,
    },
    center_content: {
      flex: 3,
    },
    bottom_content: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
    },
  });
};

export {styles};
