import {StyleSheet} from 'react-native';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, Padding} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: Padding.horizontal,
    },
    title_container: {
      width: '100%',
      height: hScale('300'),
      backgroundColor: '#fff',
      zIndex: 1,
      borderRadius: 8,
      padding: 20,
      marginVertical: 50,
    },

    text: {
      ...FontStyle.body_1,
      marginBottom: 10,
    },
    title: {
      ...FontStyle.headline_5,
      color: 'white',
      marginTop: vScale(120),
      textAlign: 'center',
    },
    bkt_text: {
      color: '#111111',
      fontSize: 12,
      opacity: 0.6,
      fontWeight: '700',
    },
  });
};

export {styles};
