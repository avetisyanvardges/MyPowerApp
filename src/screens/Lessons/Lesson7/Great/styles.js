import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
    },
    title: {
      ...FontStyle.headline_5,
      marginTop: Sizes.size35,
      textAlign: 'center',
    },
    subtitle: {
      ...FontStyle.body_1,
      letterSpacing: 0.5,
      marginTop: Sizes.size18,
      textAlign: 'center',
    },
    content: {
      flex: deviceInfo.small_screen ? 1 : 1.2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    skip_content: {
      marginVertical: vScale(20),
      alignItems: 'center',
    },
  });
};

export {styles};
