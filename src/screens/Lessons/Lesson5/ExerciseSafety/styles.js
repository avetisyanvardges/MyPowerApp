import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    title: {
      ...FontStyle.title,
    },
    redTitle: {
      ...FontStyle.title,
      color: '#BD3150',
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: vScale(10),
    },
    redSubtitle: {
      ...FontStyle.text,
      color: '#BD3150',
    },
    background: {
      width: fullScreen.width,
      height: fullScreen.height,
      marginTop: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
      paddingHorizontal: Padding.horizontal,
    },
    questionContainer: {
      flex: deviceInfo.ios ? 1.7 : 1.5,
      justifyContent: 'center',
    },
    question_btns: {
      paddingVertical: vScale(30),
    },
  });
};

export {styles};
