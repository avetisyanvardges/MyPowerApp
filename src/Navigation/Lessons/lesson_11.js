import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome10 from '../../screens/Lessons/lesson10/Welcome10';
import IntroScreen10 from '../../screens/Lessons/lesson10/intro10';
import EmpoweringAffirmation10 from '../../screens/Lessons/lesson10/EmproweringAffirmation10';
import PowerPoses10 from '../../screens/Lessons/lesson10/PowerPoses10';
import SettingPhrases from '../../screens/Lessons/lesson10/SettingPhrases';
import RecordYourSelf10 from '../../screens/Lessons/lesson10/RecordYourself10';
import Yes_No10 from '../../screens/Lessons/lesson10/Yes_No10';
import VideoRecord10 from '../../screens/Lessons/lesson10/VideoRecord10';
import RecordAudio10 from '../../screens/Lessons/lesson10/RecordAudio10';
import CircleGame from '../../screens/Lessons/lesson10/CircleGame';
import Balance from '../../screens/Lessons/lesson10/Balance';
import ElbowStrike10 from '../../screens/Lessons/lesson10/ElbowStrike';
import RoundElbow from '../../screens/Lessons/lesson10/RoundElbow';
import Cta from '../../screens/Lessons/lesson10/CTA';
import RoundRecord from '../../screens/Lessons/lesson10/RecordRound/RecordRound';
import FeedBack from '../../screens/Lessons/lesson10/Feedbavk';
import RisingElbow from '../../screens/Lessons/lesson10/RisingElbow';
import Cta2 from '../../screens/Lessons/lesson10/CTA2';
import FeedBack2 from '../../screens/Lessons/lesson10/Feedback2';
import RecordRising from '../../screens/Lessons/lesson10/RecordRising/RecordRound';
import CrossElbow from '../../screens/Lessons/lesson10/CrossElbow';
import Cta3 from '../../screens/Lessons/lesson10/CTA3';
import RecordCross from '../../screens/Lessons/lesson10/RecordCross/RecordRound';
import FeedBack3 from '../../screens/Lessons/lesson10/Feedback3';
import Know10 from '../../screens/Lessons/lesson10/DidYouKnow10';
import SuccessStory10 from '../../screens/Lessons/lesson10/SuccessStory10';
import Outro10 from '../../screens/Lessons/lesson10/Outro10';
import ACHIEVEMENT10 from '../../screens/Lessons/lesson10/ACHIEVEMENT10';
import Game10 from '../../screens/Lessons/lesson10/Game10';
import IncomingCall from '../../screens/Lessons/lesson10/IncomingCall/IncomingCall';
import CallEnded from '../../screens/Lessons/lesson10/CallEnded';
import Light_game from '../../screens/Lessons/Lesson11/Light_game';

const Stack = createStackNavigator();

export const Lesson_11 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'Lights_game'}>
      <Stack.Screen name="Lights_game" component={Light_game} />
    </Stack.Navigator>
  );
};
