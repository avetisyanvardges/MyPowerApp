import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';

import Welcome_lesson2 from '../../screens/Lessons/lesson2/Welcome/Welcome_lesson2';
import Challenge from '../../screens/Lessons/lesson2/Challenge';
import StartWarmup from '../../screens/Lessons/lesson2/StartWarmup';
import SafetyStance from '../../screens/Lessons/lesson2/SafetyStance';
import PROMO from '../../screens/Lessons/lesson2/Promo';
import FactStat from '../../screens/Lessons/lesson2/FactStat';
import SuccessStory from '../../screens/Lessons/lesson2/SuccessStory';
import ACHIEVEMENT from '../../screens/Lessons/lesson2/ACHIEVEMENT';
import IntroScreen2 from '../../screens/Lessons/lesson2/Intro2';
import PracticeVideo from '../../screens/Lessons/lesson2/Practice';
import Outro from '../../screens/Lessons/lesson2/Outro';
import Record from '../../screens/Lessons/lesson2/RECORD';
import RecordSelf from '../../screens/Lessons/lesson2/RecordYourSelf';
import RecordVoice from '../../screens/Lessons/lesson2/RecordVoice';
import NoVideo from '../../screens/Lessons/lesson2/SafetyNoVideo';
import RecordSelf2 from '../../screens/Lessons/lesson2/RecordYourSelf2';
import Game from '../../screens/Lessons/lesson2/Game';
import Workout from '../../screens/Lessons/lesson2/Workout';
import PreVideo from '../../screens/Lessons/lesson2/SafetyStance/Components/PreVideo';

const Stack = createStackNavigator();

export const Lesson_2 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'Welcome_lesson'}>
      <Stack.Screen name="Welcome_lesson" component={Welcome_lesson2} />
      <Stack.Screen name="IntroScreen2" component={IntroScreen2} />
      <Stack.Screen name="Challenge" component={Challenge} />
      <Stack.Screen name="StartWarmup" component={StartWarmup} />
      <Stack.Screen name="SafetyStance" component={SafetyStance} />
      <Stack.Screen name="PreVideo" component={PreVideo} />
      <Stack.Screen name="Workout" component={Workout} />
      <Stack.Screen name="RecordSelf" component={RecordSelf} />
      <Stack.Screen name="PracticeVideo" component={PracticeVideo} />
      <Stack.Screen name="RecordSelf2" component={RecordSelf2} />
      <Stack.Screen name="RecordVoice" component={RecordVoice} />
      <Stack.Screen name="RecordSelfNO" component={RecordSelf} />
      <Stack.Screen name="NoVideo" component={NoVideo} />
      <Stack.Screen name="PROMO" component={PROMO} />
      <Stack.Screen name="FactStat" component={FactStat} />
      <Stack.Screen name="SuccessStory" component={SuccessStory} />
      <Stack.Screen name="Record" component={Record} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Outro" component={Outro} />
      <Stack.Screen name="ACHIEVEMENT" component={ACHIEVEMENT} />
    </Stack.Navigator>
  );
};
