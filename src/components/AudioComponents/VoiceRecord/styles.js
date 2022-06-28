import {StyleSheet} from 'react-native';
import {
  BackgroundColors,
  Colors,
  FontStyle,
  Padding,
  Sizes,
} from '../../../assets/RootStyles';

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
      alignItems: 'center',
    },
    warmup_title: {
      ...FontStyle.headline_6,
    },
    text_container: {
      marginTop: Sizes.size100,
      alignItems: 'center',
    },
    record_text: {
      ...FontStyle.subtitle_2,
      color: Colors.primary_red,
    },
    record_btn: {
      flex: 1,
      alignItems: 'center',
    },
    recording_while_style: {
      ...FontStyle.headline_4,
    },
    recording_while_container: {
      width: '100%',
      height: '80%',
      justifyContent: 'center',
      position: 'absolute',
    },
    text: {
      ...FontStyle.body_1,
      marginBottom: 30,
    },
    skip_content: {
      marginBottom: Sizes.size80,
      alignItems: 'center',
    },
    btn_container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: Sizes.size30,
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
