import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../GameInstruction/styles';
import {Button} from '../../../../../components/Button';

const Instructions1Screen = ({setScreen, navigation}) => {
  const {title, subtitle, btn_container} = styles();
  return (
    <>
      <Text style={title}>Strong vs. Vulnerable</Text>
      <Text style={subtitle}>
        {'In the following game you will be asked to identify the strong parts of your body that you might be able to use to strike somoene who is intending to harm you. You may have needed to defend yourself in the past, or you may feel like you should have and didn’t know what to  do.\n \n' +
          'Here is the place where you can begin thinking through what you would want to do in the future.\n \n' +
          'Remember, whatever happened in the past, the person at fault is the one who did not respect your boundaries, or your body.'}
      </Text>
      <View style={btn_container}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('Defend_game')}
        />
      </View>
    </>
  );
};

export default Instructions1Screen;
