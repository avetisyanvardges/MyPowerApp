import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    title: {
      ...FontStyle.title,
      textAlign: 'center',
      marginTop: 50,
    },
    redTitle: {
      ...FontStyle.title,
      color: '#BD3150',
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: vScale(10),
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
      height: 350,
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
