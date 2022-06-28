import React from 'react';
import {View} from 'react-native';
import {styles} from '../styles';
import {Button} from '../../../../components/Button';

const Footer = ({onPress}) => {
  const {footer} = styles();
  return (
    <View style={footer}>
      <Button text="Next" onPress={onPress} />
    </View>
  );
};

export default Footer;
