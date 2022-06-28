import {StyleSheet} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';

const styles = () => {
  return StyleSheet.create({
    background: {
      flex:1,
      width: fullScreen.width,
      paddingHorizontal: Padding.horizontal,
    },
    title: {
      ...FontStyle.title,
    },
    subtitle: {
      ...FontStyle.text,
      marginTop: vScale(10),
    },
    top_content:{
      justifyContent:'flex-start',
      paddingTop:Sizes.size20,
    },
    center_content:{
      flex:2,
      justifyContent:'center'
    },
    bottom_content:{
      justifyContent: 'flex-end',
      marginBottom:deviceInfo.small_screen? Sizes.size20:Sizes.size40
    },
    challenge_text: {
      ...FontStyle.headline_6,
      textAlign: 'center',
      color: '#0B2B3E',
      fontWeight: '700',
    },
  });
};

export {styles};
