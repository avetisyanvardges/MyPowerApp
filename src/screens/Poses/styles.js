import {StyleSheet} from 'react-native';
import {hScale, vScale} from '../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding, Sizes} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex: 1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
      paddingTop: Sizes.size40,
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: vScale(10),
    },
    title: {
      ...FontStyle.title,
    },

    container: {
      flex: 1,
    },
    itemA: {
      margin: 10,
    },
    header: {
      position: 'absolute',
      top: deviceInfo.ios ? vScale(20) : vScale(40),
      zIndex: 1,
      right: hScale(20),
    },
    btn_container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnText: {
      color: '#fff',
    },
    top_content: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: Sizes.size20,
    },
    center_content: {
      flex: 1,
      justifyContent: 'center',
    },
    bottom_content: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
    },
  });
};

export {styles};
