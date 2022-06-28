import {StyleSheet} from 'react-native';
import {Shadow, Sizes} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    pausePlay: {
      width: 15,
      height: 22,
      backgroundColor: 'red',
    },
    color_container: {
      width: Sizes.size80,
      height: Sizes.size80,
      borderRadius: Sizes.size40,
      ...Shadow,
    },
  });
};

export {styles};
