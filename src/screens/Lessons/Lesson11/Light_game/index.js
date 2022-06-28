import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Lights from '../../../../components/Games/Lights';

function Light_game() {
  const {} = styles();
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Lights />
    </View>
  );
}

export default Light_game;
