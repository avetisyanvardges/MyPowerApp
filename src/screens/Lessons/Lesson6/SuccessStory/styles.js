import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {
      width: fullScreen.width,
      marginTop: deviceInfo.ios ? vScale(20) : 0,
      paddingHorizontal: Padding.horizontal,
    },
    header: {
      height: deviceInfo.ios ? vScale(50) : vScale(100),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Padding.horizontal,
    },
    title: {
      ...FontStyle.title,
      color: '#fff',
      textAlign: 'center',
      marginVertical: 60,
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: vScale(10),
    },
    sub_title: {
      ...FontStyle.text,
      marginTop: vScale(10),
      fontWeight: '600',
      color: '#111111',
    },
    background: {
      height: 200,
    },
  });
};

export {styles};
