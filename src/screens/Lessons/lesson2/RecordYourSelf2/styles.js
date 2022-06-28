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
    title_container: {
      marginTop: vScale(20),
    },
    subtitle: {
      ...FontStyle.subtitle_1,
      textAlign: 'center',
    },
    text_container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: vScale(12),
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
