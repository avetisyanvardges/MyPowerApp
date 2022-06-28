import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    container: {flex: 1},
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
    questionContainer: {
      flex: deviceInfo.ios ? 1.7 : 1.5,
      justifyContent: 'center',
    },
    question_btns: {},
    skip_content: {
      marginTop: 80,
      alignItems: 'center',
    },
  });
};

export {styles};
