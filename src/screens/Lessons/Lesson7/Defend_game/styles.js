import {StyleSheet} from 'react-native';
import {
  Colors,
  fullScreen,
  Padding,
  Shadow,
  Sizes,
} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    background: {
      width: fullScreen.width,
      height: fullScreen.height + Sizes.size70,
      paddingHorizontal: Padding.horizontal,
      backgroundColor: 'white',
    },
    right_image: {
      width: Sizes.size40,
      height: Sizes.size40,
      position: 'absolute',
      zIndex: 999,
      backgroundColor: Colors.white,
      borderRadius: Sizes.size20,
    },
    wrong_image: {
      width: Sizes.size60,
      height: Sizes.size60,
      position: 'absolute',
      zIndex: 999,
      borderRadius: Sizes.size20,
    },
    message_container: {
      minHeight: Sizes.size200,
      backgroundColor: Colors.white,
      marginBottom: Sizes.size30,
      marginHorizontal: Padding.horizontal,
      borderRadius: Sizes.size8,
      padding: Padding.horizontal,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 999,
      ...Shadow,
    },
  });
};

export {styles};
