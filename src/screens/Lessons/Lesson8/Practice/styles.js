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
    container: {
      flex: 1,
    },
    title: {
      ...FontStyle.title,
      textAlign: 'center',
    },
    subtitle: {
      ...FontStyle.body_1,
      marginTop: vScale(10),
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
    skip_content: {
      marginBottom: Sizes.size20,
      alignItems: 'center',
    },
  });
};

export {styles};
