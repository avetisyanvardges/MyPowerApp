import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    title: {
      ...FontStyle.title,
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: vScale(10),
    },
    red_title: {
      ...FontStyle.title,
      fontSize: 20,
      fontWeight: '600',
      color: '#BD3150',
      textAlign: 'center',
    },
    background: {
      width: fullScreen.width,
      height: fullScreen.height,
      justifyContent: 'center',
    },
    content: {
      flex: deviceInfo.ios ? 1.7 : 1.5,
      alignItems: 'center',
    },
  });
};

export {styles};
