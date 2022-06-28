import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...FontStyle.headline_5,
      textAlign: 'center',
    },
    subtitle: {
      ...FontStyle.body_2,
      marginTop: vScale(10),
    },
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
      paddingTop: Sizes.size20,
    },
    content: {
      alignItems: 'center',
      marginTop: 20,
    },
  });
};

export {styles};
