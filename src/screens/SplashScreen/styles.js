import {StyleSheet} from 'react-native';
import {hScale, vScale} from '../../assets/RootStyles/Scale';
import {Colors} from '../../assets/RootStyles';

const styles = theme => {
  return StyleSheet.create({
    flex_1: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    logoContainer: {
      flex: 1,
      position: 'absolute',
      left: '23%',
    },
    logoS: {
      width: hScale(200),
      height: vScale(200),
    },

    header_container: {
      width: '100%',
      position: 'absolute',
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: vScale(160),
    },
    slide: {
      width: '100%',
      height: '100%',
    },
    active_dot: {
      width: 10,
      height: 10,
      backgroundColor: '#BD3150',
      bottom: vScale(300),
    },
    dot: {
      width: 10,
      height: 10,
      backgroundColor: 'rgba(189, 49, 79,.2)',
      bottom: vScale(300),
    },
    logo: {width: 100, height: 100},
    btnContainerStyle: {
      marginVertical: vScale(10),
      backgroundColor: '#BD3150',
      paddingVertical: vScale(12),
      borderRadius: hScale(8),
      width: '100%',
    },
    btnTextStyle: {
      color: '#ffffff',
      fontSize: 16,
      textAlign: 'center',
    },
    title: {
      fontSize: 16,
      lineHeight: 28,
      color: Colors.black,
      textAlign: 'center',
      letterSpacing: 0.6,
      fontWeight: '400',
      marginTop: 10,
    },
    text: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      marginTop: 10,
    },
  });
};
export {styles};
