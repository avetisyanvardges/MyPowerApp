import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      paddingHorizontal: Padding.horizontal,
    },
    title_container: {
      marginTop: Sizes.size10,
    },
    subtitle: {
      ...FontStyle.subtitle_1,
      textAlign: 'center',
      paddingHorizontal: Sizes.size50,
    },
    text_container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Sizes.size5,
    },
    record_title: {
      ...FontStyle.headline_5,
      marginBottom: 30,
      color: '#EF7D90',
      textAlign: 'center',
    },
    record_btn: {
      flex: 1,
      alignItems: 'center',
    },
    skip_content: {
      marginVertical: vScale(60),
      alignItems: 'center',
    },
  });
};

export {styles};