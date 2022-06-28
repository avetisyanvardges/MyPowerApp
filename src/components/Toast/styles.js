import {StyleSheet} from 'react-native';
import {deviceInfo} from '../../assets/deviceInfo';
import {FontStyle, fullScreen, Sizes} from '../../assets/RootStyles';

const styles = theme => {
  return StyleSheet.create({
    toast_container: {
      position: 'absolute',
      top:
        deviceInfo.ios || fullScreen.height < 800 ? Sizes.size30 : Sizes.size50,
      right: '21%',
      justifyContent: 'center',
      alignItems: 'center',
      width: Sizes.size240,
      height: Sizes.size50,
      backgroundColor: 'rgba(119, 202, 229, 0.2)',
    },
    toast_text: {
      ...FontStyle.text,
    },
  });
};

export {styles};
