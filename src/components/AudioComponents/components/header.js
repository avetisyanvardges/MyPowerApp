import React from 'react';
import {ArrowLeft} from '../../../assets/Svgs';
import {Colors, Sizes} from '../../../assets/RootStyles';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {OutlinePlay} from '../../../assets/Svgs/lesson_1/OutlinePlay';
import {Close} from '../../../assets/Svgs/video/Close';

const Audio_header = ({
  onPress,
  close,
  closePress,
  back,
  backPress,
  rightIcon,
}) => {
  const {header, left_container, back_text, btnContainerStyle, btnTextStyle} =
    styles();
  return (
    <View style={header}>
      {close && (
        <Pressable onPress={closePress} style={left_container}>
          <Close
            width={Sizes.size25}
            height={Sizes.size25}
            color={Colors.white}
          />
        </Pressable>
      )}
      {back && (
        <Pressable onPress={backPress} style={left_container}>
          <ArrowLeft
            width={Sizes.size25}
            height={Sizes.size25}
            color={Colors.black}
          />
          <Text style={back_text}>Back</Text>
        </Pressable>
      )}
      {rightIcon && (
        <View style={{justifyContent: 'flex-end'}}>
          <Pressable onPress={onPress} disabled={true}>
            <View style={[btnContainerStyle]}>
              <Text style={btnTextStyle}> Bk2Baln</Text>
              <OutlinePlay width={Sizes.size20} height={Sizes.size20} />
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Audio_header;
