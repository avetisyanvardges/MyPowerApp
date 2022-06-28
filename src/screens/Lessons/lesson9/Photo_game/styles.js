import {StyleSheet} from 'react-native';
import {Colors, FontStyle, Padding, Sizes} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.black,
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Padding.horizontal,
    },
    content: {
      flex: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sub_text: {
      ...FontStyle.body_1,
      color: Colors.bright_gray,
      marginTop: Sizes.size30,
    },
    emotion_text: {
      ...FontStyle.headline_5,
      color: Colors.white,
      marginVertical: Sizes.size50,
    },
    oval_container: {
      width: Sizes.size300,
      height: Sizes.size300,
      borderRadius: 150,
      transform: [{scaleY: 1.5}],
      borderColor: 'rgba(255, 255, 255, 0.8)',
      borderWidth: 1,
      overflow: 'hidden',
    },

    btn_container: {
      width: Sizes.size50,
      height: Sizes.size50,
      borderRadius: Sizes.size25,
      backgroundColor: '#0B2B3E',
    },

    photo_btn: {
      flex: 1,
      backgroundColor: Colors.secondary_pink,
      borderRadius: Sizes.size25,
      margin: Sizes.size7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
      flex: 3,
      alignItems: 'center',
    },
  });
};

export {styles};
