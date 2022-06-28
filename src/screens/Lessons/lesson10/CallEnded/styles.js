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
      marginTop: Sizes.size100,
    },
    subtitle: {
      ...FontStyle.body_1,
    },
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
      paddingTop: Sizes.size40,
    },

    top_content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    center_content: {
      flex: 1,
      alignItems: 'center',
    },
    bottom_content: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
    },
    end_call: {
      fontSize: 10,
      color: '#EC2D2D',
      marginLeft: 5,
    },
    small_text: {
      fontSize: 10,
      color: '#111',
      paddingTop: 10,
    },
  });
};

export {styles};
