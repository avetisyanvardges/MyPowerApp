import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    title: {
      ...FontStyle.title,
      textAlign: 'center',
      color: '#EF7D90',
    },
    subtitle: {
      ...FontStyle.body_1,
      marginTop: vScale(10),
      textAlign: 'center',
      color: '#50555C',
    },
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
    },
    skip_content: {
      marginVertical: vScale(10),
      alignItems: 'center',
    },
  });
};

export {styles};
