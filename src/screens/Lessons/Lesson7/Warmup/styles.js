import {StyleSheet} from 'react-native';
import {
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...FontStyle.headline_5,
      marginTop: Sizes.size35,
    },
    subtitle: {
      ...FontStyle.body_1,
      letterSpacing: 0.5,
      marginTop: Sizes.size18,
    },
    background: {
      width: fullScreen.width,
      height: fullScreen.height + Sizes.size70,
      paddingHorizontal: Padding.horizontal,
    },
    btn_container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: Sizes.size70,
      zIndex: 1,
    },
    content: {
      justifyContent: 'center',
      marginTop: deviceInfo.small_screen ? 10 : 150,
    },
    headline_6: {
      ...FontStyle.headline_6,
      marginTop: Sizes.size24,
    },
    body_2: {
      ...FontStyle.body_2,
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
