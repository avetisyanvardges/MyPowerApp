import {StyleSheet} from 'react-native';
import {
  FontStyle,
  fullScreen,
  Padding,
  Shadow,
  Sizes,
} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...FontStyle.headline_6,
      textAlign: 'center',
    },
    subtitle: {
      ...FontStyle.body_1,
      marginTop: Sizes.size48,
    },
    background: {
      width: fullScreen.width,
      height: fullScreen.height + Sizes.size70,
      paddingHorizontal: Padding.horizontal,
    },
    text_container: {
      width: '100%',
      height: deviceInfo.small_screen ? Sizes.size170 : Sizes.size190,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'rgba(0, 0, 0, 0.13)',
      borderRadius: 8,
      zIndex: 1,
      paddingHorizontal: 20,
      ...Shadow,
    },
    fight_girl: {
      width: Sizes.size250,
      height: Sizes.size250,
      resizeMode: 'contain',
      position: 'absolute',
      bottom: 0,
      left: -Sizes.size60,
      zIndex: 0,
    },
    btn_container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: Sizes.size70,
      zIndex: 1,
    },
    challenge_text: {
      ...FontStyle.headline_6,
      textAlign: 'center',
      color: '#0B2B3E',
      fontWeight: '700',
    },
  });
};

export {styles};
