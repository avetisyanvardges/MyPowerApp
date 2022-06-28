import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {
  BackgroundColors,
  FontStyle,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BackgroundColors.white,
      paddingHorizontal: Padding.horizontal,
      paddingVertical:
        deviceInfo.ios && deviceInfo.deviceWidth > 800 ? Sizes.size22 : 0,
    },
    content: {
      flex: 1,
      zIndex: 1,
    },
    title_container: {
      marginTop: vScale(20),
    },
    warmup_title: {
      ...FontStyle.title,
    },
    text_container: {
      marginTop: vScale(12),
    },
    text: {
      ...FontStyle.text,
      marginBottom: 30,
    },
  });
};

export {styles};
