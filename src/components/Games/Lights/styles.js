import {StyleSheet} from 'react-native';
import {Colors, FontStyle, Sizes} from '../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    color: {
      width: Sizes.size80,
      height: Sizes.size80,
      borderRadius: Sizes.size40,
    },
    color_container: {
      width: Sizes.size100,
      height: Sizes.size100,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopRightRadius: Sizes.size50,
      borderBottomRightRadius: Sizes.size50,
      backgroundColor: Colors.white,
    },
    selected_color_container: {
      flex: 1,
      width: Sizes.size100,
      marginVertical: Sizes.size23,
      alignItems: 'center',
      zIndex: 985,
    },
    lightContainer: {
      flex: 1,
      width: Sizes.size100,
      marginVertical: Sizes.size23,
      borderRadius: Sizes.size68,
    },
    answer_container: {
      width: Sizes.size300,
      minHeight: Sizes.size164,
      borderRadius: Sizes.size8,
      position: 'absolute',
      zIndex: 999,
      right: Sizes.size140,
      backgroundColor: Colors.white,
    },
    answer_title_container: {
      flex: 1,
    },
    answer_title: {
      ...FontStyle.subtitle_2,
      color: Colors.bright_gray,
    },
    answer_text: {
      ...FontStyle.body_2,
      color: Colors.bright_gray,
    },
  });
};

export {styles};
