import {StyleSheet} from 'react-native';
import {Sizes} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = theme => {
  return StyleSheet.create({
    btnContainerStyle: {
      backgroundColor: '#BD3150',
      paddingVertical:
        deviceInfo.ios || deviceInfo.deviceHeight < 800
          ? Sizes.size15
          : Sizes.size12,
      borderRadius: 5,
      width: '100%',
    },
    btnTextStyle: {
      color: '#ffffff',
      fontSize: 16,
      textAlign: 'center',
    },
    btnContainerStyleWhite: {
      backgroundColor: '#ffffff',
      paddingVertical: 8,
      borderRadius: 5,
      width: '100%',
    },
    btnTextStyleWhite: {
      color: '#BD3150',
      fontSize: 16,
      textAlign: 'center',
    },
    btn_disabled: {
      backgroundColor: '#EEEEEE',
      color: '#111111',
    },
  });
};

export {styles};
