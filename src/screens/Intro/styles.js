import {StyleSheet} from 'react-native';
import {hScale, vScale} from '../../assets/RootStyles/Scale';
import {
  BackgroundColors,
  Colors,
  FontStyle,
  fullScreen,
  Padding,
} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    header_container: {
      width: '100%',
      position: 'absolute',
      marginTop:
        deviceInfo.ios || fullScreen.height < 800 ? vScale(160) : vScale(200),
    },

    header: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: Padding.horizontal,
      paddingHorizontal: hScale(10),
    },

    image_container: {
      flex: 1,
    },

    slide: {
      width: '100%',
      height: fullScreen.height,
    },

    active_dot: {
      width: hScale(9),
      height: hScale(9),
      backgroundColor: Colors.primary_red,
      bottom: fullScreen.height < 800 ? vScale(250) : vScale(270),
    },

    dot: {
      width: hScale(9),
      height: hScale(9),
      backgroundColor: 'rgba(189, 49, 79,.2)',
      bottom: fullScreen.height < 800 ? vScale(250) : vScale(270),
    },

    btnContainerStyle: {
      marginVertical: vScale(10),
      backgroundColor: BackgroundColors.primary_red,
      paddingVertical: vScale(12),
      borderRadius: hScale(8),
      width: '100%',
    },

    btnTextStyle: {
      color: Colors.white,
      ...FontStyle.text,
      textAlign: 'center',
    },

    text: {
      ...FontStyle.text,
      textAlign: 'center',
    },
  });
};

export {styles};
