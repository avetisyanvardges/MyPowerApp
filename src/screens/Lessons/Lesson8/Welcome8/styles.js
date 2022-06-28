import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      ...FontStyle.title,
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: vScale(10),
    },
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
    },
  });
};

export {styles};
