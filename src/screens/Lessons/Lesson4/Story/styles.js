import {StyleSheet} from 'react-native';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';
import {FontStyle, fullScreen, Padding, Sizes} from '../../../../assets/RootStyles';
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
      marginVertical: vScale(10),
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
      flex:deviceInfo.small_screen?0.4:0.3,
      justifyContent: 'flex-end',
      marginBottom:deviceInfo.small_screen? Sizes.size20:Sizes.size40
    },
    faqText: {
      ...FontStyle.subtitle_2,
      color: '#BD3150',
    },
    skip_content: {
      alignItems: 'center',
    },
  });
};

export {styles};
