import {StyleSheet} from 'react-native';
import {
  BackgroundColors,
  Colors,
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

    text_container: {
      marginTop: Sizes.size100,
      alignItems: 'center',
    },
    record_text: {
      ...FontStyle.headline_5,
      color: Colors.secondary_pink,
    },
    record_btn: {
      marginBottom: Sizes.size50,
      alignItems: 'center',
    },

    text: {
      ...FontStyle.body_1,
      textAlign: 'center',
    },
    skip_content: {
      marginBottom: Sizes.size80,
      alignItems: 'center',
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

    modalView: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'white',
      shadowColor: '#000',
      width: '100%',
      height: 300,
      paddingHorizontal: 20,
    },
    title: {
      ...FontStyle.headline_6,
      textAlign: 'center',
    },
    subtitle: {
      ...FontStyle.body_1,
    },
    gotIt: {
      color: '#BD3150',
      textAlign: 'right',
      ...FontStyle.subtitle_2,
    },
  });
};

export {styles};
