import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '../../assets/RootStyles';
import {deviceInfo} from '../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
    },

    left_container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    back_text: {
      fontSize: Sizes.size14,
      fontWeight: deviceInfo.ios ? '600' : 'bold',
      lineHeight: 24,
    },

    btnContainerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#BD3150',
      padding: Sizes.size5,
      borderRadius: 5,
      width: '100%',
    },

    btnTextStyle: {
      marginRight: Sizes.size4,
      color: Colors.white,
      fontSize: Sizes.size15,
      lineHeight: 15.7,
      textAlign: 'center',
    },
  });
};

export {styles};
