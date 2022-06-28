import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, Padding} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: Padding.horizontal,
    },
    title_container: {
      width: '100%',
      backgroundColor: '#fff',
      zIndex: 1,
      borderRadius: 8,
      padding: 20,
      marginVertical: 30,
    },

    text: {
      ...FontStyle.text,
    },
    title: {
      ...FontStyle.title,
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
    faqText: {
      ...FontStyle.subtitle_2,
      color: '#BD3150',
    },
  });
};

export {styles};
