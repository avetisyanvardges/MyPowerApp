import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Button = ({
  text,
  onPress,
  disabled,
  containerStyle,
  textStyle,
}) => {
  const {btnTextStyle, btnContainerStyle, btnContainerStyleWhite} = styles();

  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View
        style={[
          btnContainerStyleWhite,
          btnContainerStyle,
          {backgroundColor: disabled ? '#EEEEEE' : '#BD3150'},
          containerStyle,
        ]}>
        <Text style={[btnTextStyle, textStyle]}> {text} </Text>
      </View>
    </Pressable>
  );
};
