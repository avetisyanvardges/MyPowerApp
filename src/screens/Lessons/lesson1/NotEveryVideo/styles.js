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
  });
};

export {styles};
