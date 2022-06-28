import {StyleSheet} from 'react-native';
import {vScale} from '../../assets/RootStyles/Scale';
import {fullScreen, Padding} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      width: fullScreen.width,
      height: fullScreen.height + vScale(100),
      paddingHorizontal: Padding.horizontal,
      paddingBottom: deviceInfo.ios ? vScale(150) : vScale(100),
    },
  });
};

export {styles};
