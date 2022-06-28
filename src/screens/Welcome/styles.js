import {StyleSheet} from 'react-native';
import {deviceInfo} from '../../assets/deviceInfo';
import {FontStyle, Padding, Sizes} from '../../assets/RootStyles';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      paddingHorizontal: Padding.horizontal,
    },

    videoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:
        deviceInfo.ios || deviceInfo.deviceHeight < 800
          ? Sizes.size80
          : Sizes.size130,
    },

    title: {
      ...FontStyle.headline_5,
      color: '#EF7D90',
    },

    videoBtn: {
      width: Sizes.size80,
      height: Sizes.size80,
      marginTop: Sizes.size140,
    },
  });
};
export {styles};
