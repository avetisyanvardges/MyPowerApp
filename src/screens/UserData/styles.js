import {StyleSheet} from 'react-native';
import {FontStyle, fullScreen, Padding, Sizes} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      width: fullScreen.width,
      height: fullScreen.height + Sizes.size100,
      paddingHorizontal: Padding.horizontal,
      paddingBottom:
        deviceInfo.ios || deviceInfo.deviceHeight < 800
          ? Sizes.size120
          : Sizes.size100,
    },

    content: {
      flex: 1,
      marginTop:
        deviceInfo.ios || deviceInfo.deviceHeight < 800
          ? Sizes.size40
          : Sizes.size70,
    },

    title: {
      ...FontStyle.headline_6,
      letterSpacing: 0.15,
    },

    //------------------------------NAME SCREEN--------------------------

    input_container: {
      marginTop:
        deviceInfo.ios || deviceInfo.deviceHeight < 800
          ? Sizes.size70
          : Sizes.size120,
    },

    subtitle: {
      ...FontStyle.headline_5,
    },

    input: {
      marginTop: Sizes.size37,
      padding:
        deviceInfo.ios || deviceInfo.deviceHeight < 800
          ? Sizes.size8
          : Sizes.size12,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'rgba(11, 43, 62, .2)',
      borderRadius: Sizes.size4,
    },

    //------------------------------NAME SCREEN--------------------------

    //------------------------------AGE SCREEN--------------------------

    age_subtitle: {
      marginTop: Sizes.size9,
      ...FontStyle.text,
      letterSpacing: 0.5,
    },

    select_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Sizes.size120,
    },

    //------------------------------AGE SCREEN--------------------------
  });
};

export {styles};
