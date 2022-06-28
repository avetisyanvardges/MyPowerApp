import React, {useState} from 'react';
import Question1 from './Components/Question1';
import Question2 from './Components/Question2';
import Question3 from './Components/Question3';
import Question4 from './Components/Question4';
import {Padding} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {View} from 'react-native';

const MidQuestion = ({navigation}) => {
  const [current_screen, setScreen] = useState('question1');
  const screens = {
    question1: <Question1 setScreen={setScreen} />,
    question2: <Question2 setScreen={setScreen} />,
    question3: <Question3 setScreen={setScreen} />,
    question4: <Question4 setScreen={setScreen} />,
  };

  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      {screens[current_screen]}
    </View>
  );
};

export default MidQuestion;
