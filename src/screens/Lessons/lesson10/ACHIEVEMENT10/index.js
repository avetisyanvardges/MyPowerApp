import React from 'react';
import Achievement from '../../../../components/Achievement';
import {hScale} from '../../../../assets/RootStyles/Scale';
import {SvgXml} from 'react-native-svg';
import Icon from '../../../../assets/Svgs/Achievement/Winner5.svg';

const ACHIEVEMENT10 = ({navigation}) => {
  return (
    <Achievement
      achievementImage={
        <SvgXml xml={Icon} width={hScale(80)} height={hScale(80)} />
      }
      onPress={() => navigation.navigate('Lesson_11')}
      lesson="Lesson 10"
    />
  );
};

export default ACHIEVEMENT10;
