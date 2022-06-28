import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome_lesson3 from '../../screens/Lessons/lesson3/Welcome/WelcomeLesson3';
import Voice from '../../screens/Lessons/lesson3/Voice';
import BellyBreathing from '../../screens/Lessons/lesson3/BellyBreathing';
import PreVideo3 from '../../screens/Lessons/lesson3/PreVideo';
import Elbow from '../../screens/Lessons/lesson3/UserElbow';
import BitCaution from '../../screens/Lessons/lesson3/BitCaution';
import WarmupS from '../../screens/Lessons/lesson3/Warmup';
import Know from '../../screens/Lessons/lesson3/DidYouKnow';
import SuccessStory3 from '../../screens/Lessons/lesson3/SuccessStory';
import IntroScreen3 from '../../screens/Lessons/lesson3/intro3';
import MarchInPlace from '../../screens/Lessons/lesson3/MarchInPlace';
import FightIsAbout from '../../screens/Lessons/lesson3/FightIsAbout';
import RecordSelf3 from '../../screens/Lessons/lesson3/RecordYourSelf';
import Record3 from '../../screens/Lessons/lesson3/Record3';
import ElbowStrike from '../../screens/Lessons/lesson3/ElbowStrike';
import IntroFinish from '../../screens/Lessons/lesson3/IntroFinish';
import ACHIEVEMENT3 from '../../screens/Lessons/lesson3/ACHIEVEMENT';
import BreatheIn from '../../screens/Lessons/lesson3/BreatheIn';
import BreatheOut from '../../screens/Lessons/lesson3/BreatheOut';
import Challenge3 from '../../screens/Lessons/lesson3/Challenge';
import Outro3 from '../../screens/Lessons/lesson3/Outro3';
import MidQuestion from '../../screens/Lessons/lesson3/MidQuestion';

const Stack = createStackNavigator();

export const Lesson_3 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'Welcome_lesson'}>
      <Stack.Screen name="Welcome_lesson" component={Welcome_lesson3} />
      <Stack.Screen name="IntroScreen3" component={IntroScreen3} />
      <Stack.Screen name="BreatheIn" component={BreatheIn} />
      <Stack.Screen name="BreatheOut" component={BreatheOut} />
      <Stack.Screen name="Challenge3" component={Challenge3} />
      <Stack.Screen name="Voice" component={Voice} />
      <Stack.Screen name="MarchInPlace" component={MarchInPlace} />
      <Stack.Screen name="MidQuestion" component={MidQuestion} />
      <Stack.Screen name="RecordSelf3" component={RecordSelf3} />
      <Stack.Screen name="FightIsAbout" component={FightIsAbout} />
      <Stack.Screen name="Record3" component={Record3} />
      <Stack.Screen name="BellyBreathing" component={BellyBreathing} />
      <Stack.Screen name="PreVideo3" component={PreVideo3} />
      <Stack.Screen name="ElbowStrike" component={ElbowStrike} />
      <Stack.Screen name="Elbow" component={Elbow} />
      <Stack.Screen name="BitCaution" component={BitCaution} />
      <Stack.Screen name="WarmupS" component={WarmupS} />
      <Stack.Screen name="Know" component={Know} />
      <Stack.Screen name="SuccessStory3" component={SuccessStory3} />
      <Stack.Screen name="IntroFinish" component={IntroFinish} />
      <Stack.Screen name="Outro3" component={Outro3} />
      <Stack.Screen name="ACHIEVEMENT3" component={ACHIEVEMENT3} />
    </Stack.Navigator>
  );
};
