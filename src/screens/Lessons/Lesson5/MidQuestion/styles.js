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
      textAlign: 'center',
    },
    redSubtitle: {
      ...FontStyle.text,
      color: '#BD3150',
    },
    background: {
      width: fullScreen.width,
      height: fullScreen.height,
      marginTop: deviceInfo.ios ? vScale(20) : 0,
      paddingHorizontal: Padding.horizontal,
    },
    questionContainer: {
      flex: deviceInfo.ios ? 1.7 : 1.5,
      justifyContent: 'center',
    },
    question_btns: {
      paddingVertical: vScale(30),
    },
    modalView: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'white',
      shadowColor: '#000',
      width: '100%',
      height: deviceInfo.small_screen ? Sizes.size250 : Sizes.size300,
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    gotIt: {
      color: '#BD3150',
      textAlign: 'right',
      ...FontStyle.subtitle_2,
    },
  });
};

export {styles};
