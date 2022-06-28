import {StyleSheet} from 'react-native';
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
    },
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
    },
    content: {
      justifyContent: 'center',
      marginTop: deviceInfo.small_screen ? 10 : 150,
    },
    challenge_text: {
      ...FontStyle.headline_6,
      textAlign: 'center',
      color: '#0B2B3E',
      fontWeight: '700',
      padding: 20,
    },
  });
};

export {styles};
