import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '../../GameInstruction/styles';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Instructions3Screen = ({setScreen}) => {
  const {container, title, btn_container, subtitle} = styles();
  const navigation = useNavigation();
  return (
    <>
      <Text style={title}>Let’s play the game again. </Text>
      <Text style={subtitle}>
        {
          "This time the goal is to indentify an attacker's vulnerable targets.\n"
        }
      </Text>

      <View style={btn_container}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('Vulnerable_game')}
        />
      </View>
    </>
  );
};

export default Instructions3Screen;
