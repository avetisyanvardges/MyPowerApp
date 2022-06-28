import React from 'react';
import Achievement from '../../../../components/Achievement';
import {hScale} from '../../../../assets/RootStyles/Scale';
import {SvgXml} from 'react-native-svg';
import Icon from '../../../../assets/Svgs/Achievement/Winner5.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UpdateData} from '../../../../Services/firebase';
import {useDispatch} from 'react-redux';
import {makeAction} from '../../../../store/makeAction';
import {RATE_LESSON} from '../../../../types/USER_ACTIONS';

const ACHIEVEMENT5 = ({navigation}) => {
  const dispatch = useDispatch();
  const complete_lesson = async res => {
    const data = {
      lesson_name: 'Lesson_5',
      rate: res,
    };
    dispatch(makeAction(RATE_LESSON, data));
  };
  return (
    <Achievement
      achievementImage={
        <SvgXml xml={Icon} width={hScale(80)} height={hScale(80)} />
      }
      onPress={res => complete_lesson(res)}
      lesson="Lesson 5"
    />
  );
};

export default ACHIEVEMENT5;
