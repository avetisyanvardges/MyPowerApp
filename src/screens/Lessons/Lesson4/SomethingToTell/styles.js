import {StyleSheet} from 'react-native';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      width: fullScreen.width,
      height: fullScreen.height + vScale(100),
      paddingHorizontal: Padding.horizontal,
      paddingBottom: deviceInfo.ios ? vScale(150) : vScale(100),
    },
    subtitle: {
      ...FontStyle.body_1,
      letterSpacing: 0.15,
      marginVertical: hScale(5),
    },
    title: {
      ...FontStyle.title,
      fontWeight: '500',
      lineHeight: 30,
      letterSpacing: 0.18,
      marginVertical: hScale(5),
    },
    text: {
      color: '#0B2B3E',
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 20,
    },
    skip_content: {
      marginVertical: vScale(20),
      alignItems: 'center',
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
    record_title: {
      ...FontStyle.headline_5,
      marginBottom: 10,
      color: '#EF7D90',
      textAlign: 'center',
    },
  });
};

export {styles};
