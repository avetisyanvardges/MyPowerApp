import {StyleSheet} from 'react-native';
import {FontStyle, fullScreen, Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...FontStyle.title,
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: Sizes.size10,
    },
    background: {
      width: fullScreen.width,
      height: fullScreen.height,
      marginTop: deviceInfo.ios ? Sizes.size20 : 0,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    skip_content: {
      alignItems: 'center',
      marginBottom: 60,
    },
    redTitle: {
      ...FontStyle.title,
      color: '#BD3150',
      textAlign: 'center',
    },
    record_text: {
      ...FontStyle.text,
      color: '#BD3150',
    },
  });
};

export {styles};
