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
    title: {
      ...FontStyle.title,
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

    top_content: {
      flex: 0.5,
      alignItems: 'center',
    },
    center_content: {
      flex: 3,
      alignItems: 'center',
    },
    bottom_content: {
      flex: 0.5,
      justifyContent: 'flex-end',
      marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
    },
  });
};

export {styles};
