import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    title: {
      ...FontStyle.title,
      textAlign: 'center',
    },
    subtitle: {
      ...FontStyle.body_1,
      marginTop: vScale(10),
    },
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
    },
    skip_content: {
      marginVertical: vScale(20),
      alignItems: 'center',
    },
  });
};

export {styles};
