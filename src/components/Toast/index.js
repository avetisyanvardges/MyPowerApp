import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Toast = ({text, style}) => {
  const {toast_container, toast_text} = styles();
  return (
    <TouchableOpacity style={toast_container}>
      <Text style={toast_text}>{text}</Text>
    </TouchableOpacity>
  );
};
