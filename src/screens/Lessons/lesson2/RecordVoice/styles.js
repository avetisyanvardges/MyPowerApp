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
    title_container: {},
    subtitle: {
      ...FontStyle.subtitle_1,
      justifyContent: 'center',
      textAlign: 'center',
    },
    text_container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    record_title: {
      ...FontStyle.headline_5,
      marginBottom: 30,
      color: '#EF7D90',
      textAlign: 'center',
    },
    skip_content: {
      marginVertical: vScale(60),
      alignItems: 'center',
    },
  });
};

export {styles};
