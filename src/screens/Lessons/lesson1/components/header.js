import React from 'react';
import {ArrowLeft} from '../../../../assets/Svgs';
import {Colors, Sizes} from '../../../../assets/RootStyles';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../styles';
import {OutlinePlay} from '../../../../assets/Svgs/lesson_1/OutlinePlay';

const Header = ({onPress, rightIcon}) => {
  const {header, left_container, back_text, btnContainerStyle, btnTextStyle} =
    styles();
  return (
    <View style={header}>
      <Pressable onPress={onPress} style={left_container}>
        <ArrowLeft
          width={Sizes.size20}
          height={Sizes.size20}
          color={Colors.black}
        />
        <Text style={back_text}>Back</Text>
      </Pressable>
      {rightIcon && (
        <View style={{justifyContent: 'flex-end'}}>
          <Pressable onPress={onPress} disabled={true}>
            <View style={[btnContainerStyle]}>
              <Text style={btnTextStyle}> Bk2Baln</Text>
              <OutlinePlay width={Sizes.size14} height={Sizes.size14} />
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Header;
