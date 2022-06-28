import {StyleSheet} from 'react-native';
import {hScale} from '../../assets/RootStyles/Scale';
import {
  Colors,
  FontStyle,
  Padding,
  Shadow,
  Sizes,
} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      paddingHorizontal: Padding.horizontal,
      paddingVertical: Sizes.size10,
    },
    subtitle: {
      ...FontStyle.subtitle_2,
      letterSpacing: 0.15,
    },
    sub_title: {
      ...FontStyle.body_1,
      textAlign: 'center',
      color: Colors.black,
    },
    big_title: {
      ...FontStyle.headline_4,
      color: Colors.black,
      textAlign: 'center',
    },
    title: {
      ...FontStyle.headline_6,
      color: '#000',
    },
    container: {
      flex: 1,
    },
    header: {
      position: 'absolute',
      top: deviceInfo.small_screen ? Sizes.size20 : Sizes.size20,
      zIndex: 1,
      right: hScale(20),
    },
    btn_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    answer_container: {
      width: Sizes.size250,
      height: Sizes.size50,
      borderRadius: Sizes.size8,
      paddingHorizontal: Sizes.size15,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.white,
      ...Shadow,
    },
    smile_container: {
      marginRight: Sizes.size14,
    },
    btn_text: {
      ...FontStyle.body_1,
      color: '#50555C',
    },
  });
};

export {styles};
