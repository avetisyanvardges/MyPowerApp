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

const Stack = createStackNavigator();

export const Lesson_10 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'Welcome10'}>
      <Stack.Screen name="Welcome10" component={Welcome10} />
      <Stack.Screen name="IntroScreen10" component={IntroScreen10} />
      <Stack.Screen
        name="EmpoweringAffirmation10"
        component={EmpoweringAffirmation10}
      />
      <Stack.Screen name="PowerPoses10" component={PowerPoses10} />
      <Stack.Screen name="SettingPhrases" component={SettingPhrases} />
      <Stack.Screen name="RecordYourSelf10" component={RecordYourSelf10} />
      <Stack.Screen name="VideoRecord10" component={VideoRecord10} />
      <Stack.Screen name="Yes_No10" component={Yes_No10} />
      <Stack.Screen name="RecordAudio10" component={RecordAudio10} />
      <Stack.Screen name="CircleGame" component={CircleGame} />
      <Stack.Screen name="IncomingCall" component={IncomingCall} />
      <Stack.Screen name="CallEnded" component={CallEnded} />
      <Stack.Screen name="Game10" component={Game10} />
      <Stack.Screen name="Balance" component={Balance} />
      <Stack.Screen name="ElbowStrike10" component={ElbowStrike10} />
      <Stack.Screen name="RoundElbow" component={RoundElbow} />
      <Stack.Screen name="Cta" component={Cta} />
      <Stack.Screen name="RoundRecord" component={RoundRecord} />
      <Stack.Screen name="FeedBack" component={FeedBack} />
      <Stack.Screen name="RisingElbow" component={RisingElbow} />
      <Stack.Screen name="Cta2" component={Cta2} />
      <Stack.Screen name="RecordRising" component={RecordRising} />
      <Stack.Screen name="FeedBack2" component={FeedBack2} />
      <Stack.Screen name="CrossElbow" component={CrossElbow} />
      <Stack.Screen name="Cta3" component={Cta3} />
      <Stack.Screen name="RecordCross" component={RecordCross} />
      <Stack.Screen name="FeedBack3" component={FeedBack3} />
      <Stack.Screen name="Know10" component={Know10} />
      <Stack.Screen name="SuccessStory10" component={SuccessStory10} />
      <Stack.Screen name="Outro10" component={Outro10} />
      <Stack.Screen name="ACHIEVEMENT10" component={ACHIEVEMENT10} />
    </Stack.Navigator>
  );
};
