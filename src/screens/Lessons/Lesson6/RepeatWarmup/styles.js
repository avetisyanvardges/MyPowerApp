import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...FontStyle.title,
      textAlign: 'center',
    },
    subtitle: {
      ...FontStyle.body_1,
      marginTop: vScale(10),
    },
    background: {
      width: fullScreen.width,
      height: fullScreen.height,
      marginTop: deviceInfo.ios ? vScale(20) : 0,
      paddingHorizontal: Padding.horizontal,
      textAlign: 'center',
    },
    content: {
      justifyContent: 'center',
      marginTop: deviceInfo.small_screen ? 10 : 150,
    },
    skip_content: {
      marginVertical: vScale(60),
      alignItems: 'center',
    },
  });
};

export {styles};
