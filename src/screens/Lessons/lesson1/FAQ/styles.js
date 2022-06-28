import {StyleSheet} from 'react-native';
import {FontStyle, Padding, Sizes} from '../../../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: Padding.horizontal,
    },
    content: {
      flex: 1,
      zIndex: 1,
    },
    title_container: {
      minHeight: Sizes.size400,
      backgroundColor: '#fff',
      zIndex: 1,
      borderRadius: 8,
      padding: Sizes.size20,
    },
    warmup_title: {
      ...FontStyle.title,
    },
    text_container: {
      marginTop: Sizes.size33,
    },
    text: {
      ...FontStyle.body_1,
      marginBottom: Sizes.size10,
    },
    faqText: {
      ...FontStyle.subtitle_2,
      color: '#BD3150',
    },
    title: {
      ...FontStyle.title,
      color: 'white',
      marginTop: Sizes.size90,
    },
    bkt_text: {
      color: '#111111',
      fontSize: Sizes.size12,
      opacity: 0.6,
      fontWeight: '700',
    },
  });
};

export {styles};
