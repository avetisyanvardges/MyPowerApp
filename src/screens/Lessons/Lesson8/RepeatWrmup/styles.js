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
      marginVertical: deviceInfo.small_screen ? 10 : 30,
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: vScale(10),
      textAlign: 'center',
    },
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
    },
    content: {
      flex: deviceInfo.ios ? 1.7 : 1.5,
    },
    text_container: {
      marginTop: vScale(12),
    },
  });
};

export {styles};
