import {StyleSheet} from 'react-native';
import {
  BackgroundColors,
  FontStyle,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BackgroundColors.white,
      paddingHorizontal: Padding.horizontal,
    },
    content: {
      flex: 1,
      zIndex: 1,
    },
    title_container: {
      marginTop: Sizes.size20,
    },
    warmup_title: {
      ...FontStyle.title,
    },
    text_container: {
      marginTop: Sizes.size12,
    },
    text: {
      ...FontStyle.text,
      marginBottom: Sizes.size30,
    },
  });
};

export {styles};
