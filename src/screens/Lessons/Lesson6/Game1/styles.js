import {StyleSheet} from 'react-native';
import {hScale} from '../../../../assets/RootStyles/Scale';

const styles = () => {
  return StyleSheet.create({
    subtitle: {
      fontSize: 14,
      letterSpacing: 0.15,
      marginVertical: hScale(5),
      textAlign: 'left',
    },
    title: {
      fontSize: 20,
      fontWeight: '500',
      lineHeight: 30,
      letterSpacing: 0.18,
      marginVertical: hScale(5),
      textAlign: 'left',
    },
    modalView: {
      position: 'absolute',
      bottom: 235,
      shadowColor: '#000',
      width: '80%',
      height: 350,
      paddingHorizontal: 20,
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    runBtnContent: {
      backgroundColor: 'white',
      borderRadius: 100,
      height: 200,
      justifyContent: 'flex-end',
    },
  });
};

export {styles};
