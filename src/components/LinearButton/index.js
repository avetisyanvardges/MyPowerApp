import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

export const LinearButton = ({
  text,
  onPress,
  disabled,
  containerStyle,
  textStyle,
  startColor,
  endColor,
  start,
  end,
}) => {
  const {btnTextStyle, btnContainerStyle} = styles();

  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <LinearGradient
        start={start || {x: 0, y: 0}}
        end={end || {x: 0, y: 0}}
        colors={[startColor, endColor]}
        style={[btnContainerStyle, containerStyle]}>
        <Text style={[btnTextStyle, textStyle]}> {text} </Text>
      </LinearGradient>
    </Pressable>
  );
};
