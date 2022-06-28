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
    better_title: {
      color: '#EF7D90',
      ...FontStyle.title,
      paddingHorizontal: Sizes.size20,
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

    top_content: {
      alignItems: 'center',
      paddingTop: Sizes.size20,
    },
    center_content: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    bottom_content: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
    },
    skip_content: {
      marginVertical: Sizes.size20,
      alignItems: 'center',
    },
  });
};

export {styles};
