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
      textAlign: 'center',
    },
    redTitle: {
      ...FontStyle.title,
      color: '#BD3150',
      textAlign: 'center',
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
      marginTop: deviceInfo.ios ? vScale(20) : 100,
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
      shadowColor: '#000',
      width: '100%',
      height: 350,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalView2: {
      position: 'absolute',
      bottom: 0,
      shadowColor: '#000',
      width: '100%',
      height: 800,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    gotIt: {
      color: '#BD3150',
      textAlign: 'right',
      ...FontStyle.subtitle_2,
    },
    recort_title: {
      color: 'white',
    },
    modal_text: {
      color: '#fff',
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 50,
    },
    skip_content: {
      marginTop: Sizes.size50,
      alignItems: 'center',
    },
  });
};

export {styles};
