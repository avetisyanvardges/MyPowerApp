import {StyleSheet} from 'react-native';
import {hScale, vScale} from '../../../assets/RootStyles/Scale';
import {deviceInfo} from '../../../assets/deviceInfo';
import {
  BorderStyles,
  Colors,
  FontStyle,
  fullScreen,
  Padding,
} from '../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      paddingHorizontal: vScale(20),
    },

    videoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: deviceInfo.ios ? vScale(80) : vScale(130),
    },

    title: {
      fontWeight: '500',
      fontSize: 24,
      color: '#EF7D90',
    },

    videoBtn: {
      width: 100,
      height: 100,
      marginTop: vScale(140),
    },

    swipe_title: {
      alignItems: 'flex-start',
      fontWeight: '600',
      fontSize: 16,
      color: '#0B2B3E',
      paddingBottom: 10,
      fontFamily: 'Poppins',
    },

    swipe_description: {
      ...FontStyle.text,
      opacity: 0.8,
    },

    //--------------------------------VIDEO HOME-----------------------------
    container: {
      justifyContent: 'center',
    },
    header: {
      flex: 1,
      width: fullScreen.width,
      zIndex: 999,
      position: 'absolute',
      top: vScale(40),
      paddingHorizontal: Padding.horizontal,
    },
    close_btn: {
      zIndex: 1,
    },
    btn_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },

    bottom_sheet: {
      width: fullScreen.width - Padding.horizontal,
      height: vScale(500),
      position: 'absolute',
      top: fullScreen.height / 1.4,
      backgroundColor: Colors.white,
      borderRadius: BorderStyles.radius.s,
    },

    line: {
      width: hScale(75),
      borderTopWidth: vScale(4),
      borderColor: Colors.light_gray,
      alignSelf: 'center',
      marginVertical: vScale(15),
      borderRadius: vScale(2),
    },

    //--------------------------------VIDEO HOME-----------------------------
  });
};
export {styles};
