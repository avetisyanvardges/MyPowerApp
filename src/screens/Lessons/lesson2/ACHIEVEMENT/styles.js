import {StyleSheet} from 'react-native';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';
import {fullScreen, Padding} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      width: fullScreen.width,
      height: fullScreen.height + vScale(100),
      paddingHorizontal: Padding.horizontal,
      paddingBottom: deviceInfo.ios ? vScale(150) : vScale(100),
      paddingVertical: vScale(30),
    },
    subtitle: {
      fontSize: 14,
      letterSpacing: 0.15,
    },
    sub_title: {
      fontSize: 16,
      letterSpacing: 0.15,
      textAlign: 'center',
    },
    big_title: {
      fontSize: 30,
      fontWeight: '500',
      lineHeight: 30,
      letterSpacing: 0.18,
      marginVertical: hScale(40),
      textAlign: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      lineHeight: 30,
      letterSpacing: 0.18,
      textAlign: 'center',
      color: '#000',
    },
    container: {
      flex: 1,
    },
    header: {
      position: 'absolute',
      top: deviceInfo.ios ? vScale(20) : vScale(40),
      zIndex: 1,
      right: hScale(20),
    },
    btn_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn_text: {
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 30,
      color: '#50555C',
    },
  });
};

export {styles};
