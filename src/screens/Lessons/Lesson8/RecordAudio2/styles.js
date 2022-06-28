import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {
  BackgroundColors,
  FontStyle,
  Padding,
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
      marginTop: vScale(20),
      alignItems: 'center',
    },
    warmup_title: {
      ...FontStyle.title,
    },
    text_container: {
      marginTop: vScale(100),
      alignItems: 'center',
    },
    record_text: {
      ...FontStyle.text,
      color: '#BD3150',
    },
    text: {
      ...FontStyle.text,
      marginBottom: 30,
    },
    skip_content: {
      marginBottom: vScale(80),
      alignItems: 'center',
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
