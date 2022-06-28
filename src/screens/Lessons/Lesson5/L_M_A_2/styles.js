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
    },
    title_container: {
      marginTop: Sizes.size10,
    },
    subtitle: {
      ...FontStyle.subtitle_1,
      textAlign: 'center',
    },
    text_container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: deviceInfo.small_screen ? 1 : 10,
      paddingHorizontal: Sizes.size40,
    },
    record_title: {
      ...FontStyle.headline_5,
      marginBottom: 10,
      color: '#EF7D90',
      textAlign: 'center',
    },
    skip_content: {
      marginVertical: vScale(20),
      alignItems: 'center',
    },
  });
};

export {styles};
