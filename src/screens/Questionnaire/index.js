import React, {useState} from 'react';
import Background from '../../assets/Image/background/lesson5/agreeBg.png';
import {FlatList, ImageBackground, Text} from 'react-native';
import {styles} from './styles';
import {View} from 'react-native-animatable';
import {Sizes} from '../../assets/RootStyles';
import {useSelector} from 'react-redux';
import {LinearButton} from '../../components/LinearButton';
import {useNavigation} from '@react-navigation/native';

const Questionnaire = ({setScreen}) => {
  const navigation = useNavigation();
  const {
    background,
    sub_text,
    subtitle,
    title,
    top_content,
    center_content,
    bottom_content,
  } = styles();
  const questions = useSelector(store => store.onBoarding.questions);
  const [current_question, setCurrent] = useState(questions.question_1);
  const agree = current_question.type === 'agree';

  const Buttons = [
    {
      text: '1',
      colors: {
        start: agree ? '#FF5757' : '#77C9E5',
        end: agree ? '#FF6B5A' : '#90BDDF',
      },
    },
    {
      text: '2',
      colors: {
        start: agree ? '#FF755C' : '#9BB8DC',
        end: agree ? '#FF8860' : '#B2ADD7',
      },
    },
    {
      text: '3',
      colors: {
        start: agree ? '#FF9362' : '#BDA7D4',
        end: agree ? '#E7A660' : '#CF9CC7',
      },
    },
    {
      text: '4',
      colors: {
        start: agree ? '#C7B45A' : '#D398C0',
        end: agree ? '#99C753' : '#DE8DAC',
      },
    },
    {
      text: '5',
      colors: {
        start: agree ? '#4CE846' : '#E388A3',
        end: agree ? '#7BD44E' : '#ED7D90',
      },
    },
  ];
  const next_screen = () => {
    navigation.navigate('Victim');
  };
  const next_press = () => {
    switch (current_question) {
      case questions.question_1:
        return setCurrent(questions.question_2);
      case questions.question_2:
        return setCurrent(questions.question_3);
      case questions.question_3:
        return setCurrent(questions.question_4);
      case questions.question_4:
        return setCurrent(questions.question_5);
      case questions.question_5:
        return setCurrent(questions.question_6);
      case questions.question_6:
        return setCurrent(questions.question_7);
      case questions.question_7:
        return setCurrent(questions.question_8);
      case questions.question_8:
        return setCurrent(questions.question_9);
      case questions.question_9:
        return setCurrent(questions.question_10);
      case questions.question_10:
        return setCurrent(questions.question_11);
      case questions.question_11:
        return setCurrent(questions.question_12);
      case questions.question_12:
        return setCurrent(questions.question_13);
      case questions.question_13:
        return setCurrent(questions.question_14);
      case questions.question_14:
        return setCurrent(questions.question_15);
      case questions.question_15:
        return next_screen();
    }
  };

  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={sub_text}>{agree ? '' : current_question.sub_text}</Text>
        <Text style={title}>{current_question.text}</Text>
      </View>

      <View style={center_content}>
        <Text style={subtitle}>
          {agree ? 'Strongly Disagree' : 'Not at all Confident'}
        </Text>
        <FlatList
          style={{height: 100}}
          data={Buttons}
          renderItem={({item, index}) => {
            return (
              <LinearButton
                onPress={next_press}
                start={
                  index === 2
                    ? {x: 3, y: 0}
                    : index === 3
                    ? {x: 1, y: 0}
                    : {x: 0, y: 0}
                }
                end={
                  index === 2
                    ? {x: 1, y: 4}
                    : index === 3
                    ? {x: 1, y: 0.4}
                    : {x: 0, y: 0}
                }
                startColor={item.colors.start}
                endColor={item.colors.end}
                text={item.text}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={{height: Sizes.size10}} />}
        />
        <Text style={subtitle}>
          {agree ? 'Strongly Agree' : 'Very Confident'}
        </Text>
        <View style={{flex: 1}} />
      </View>
    </ImageBackground>
  );
};

export default Questionnaire;
