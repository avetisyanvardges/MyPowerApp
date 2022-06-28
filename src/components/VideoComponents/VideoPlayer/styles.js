import {StyleSheet} from 'react-native';
import {fullScreen, Sizes} from '../../../assets/RootStyles';
import {hScale, vScale} from '../../../assets/RootStyles/Scale';

const styles = () => {
  return StyleSheet.create({
    container: {
      width: fullScreen.width,
      height: fullScreen.height,
    },
    videos: {
      width: fullScreen.width,
      height: fullScreen.height,
      backgroundColor: 'red',
      zIndex: 1,
    },
    videoHeader: {
      height: Sizes.size50,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'black',
      paddingHorizontal: 10,
    },
    leftIcon: {width: '49%', alignItems: 'flex-start'},
    rightIcon: {width: '49%', alignItems: 'flex-end'},
    videoLayout: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 2,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    layoutTopContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingVertical: Sizes.size17,
      paddingHorizontal: Sizes.size17,
      marginBottom: 'auto',
    },

    layoutFullScreenContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingVertical: vScale(17),
      paddingHorizontal: vScale(16),
      marginBottom: vScale(10),
    },
    buttonContainer: {
      padding: hScale(3),
    },
    videoSliderContainer: {
      width: '100%',
      height: vScale(10),
    },
    videoNextContainer: {
      height: vScale(40),
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: vScale(8),
    },

    videoActiveSlider: {
      backgroundColor: '#FFF200',
      width: '20%',
      height: vScale(10),
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
    },

    videoNextActiveSlider: {
      backgroundColor: '#FFF200',
      width: '20%',
      height: vScale(40),
      borderTopLeftRadius: vScale(8),
      borderBottomLeftRadius: vScale(8),
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
    },
    videoRoundButton: {
      width: hScale(24),
      height: hScale(24),
      backgroundColor: '#FFFFFF',
      borderRadius: 50,
      marginRight: -5,
      zIndex: 1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    subtitle: {
      fontSize: 14,
      color: '#fff',
    },
  });
};

export {styles};
