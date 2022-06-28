import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome_lesson4 from '../../screens/Lessons/Lesson4/Welcome/WelcomeLesson4';
import IntroScreen4 from '../../screens/Lessons/Lesson4/Intro4';
import EmproweringAffirmation from '../../screens/Lessons/Lesson4/EmproweringAffirmation';
import ShakeIt from '../../screens/Lessons/Lesson4/ShakeIt';
import WhatsGoing1 from '../../screens/Lessons/Lesson4/WhatsGoingPractice1';
import Wgoh from '../../screens/Lessons/Lesson4/WGOH';
import WhatsGoing2 from '../../screens/Lessons/Lesson4/WhatsGoingPractice2';
import WgohPalm from '../../screens/Lessons/Lesson4/WGOHPALM';
import WhatsGoing3 from '../../screens/Lessons/Lesson4/WhatsGoingPractice3';
import PalmHeelStrike from '../../screens/Lessons/Lesson4/PalmHeelStrike';
import Story from '../../screens/Lessons/Lesson4/Story';
import ClothesGame from '../../screens/Lessons/Lesson4/ClothesGame';
import SomethingToTell from '../../screens/Lessons/Lesson4/SomethingToTell';
import DidYouKnow from '../../screens/Lessons/Lesson4/DidYouKnow';
import Outro from '../../screens/Lessons/Lesson4/Outro';
import ACHIEVEMENT4 from '../../screens/Lessons/Lesson4/ACHIEVEMENT';

const Stack = createStackNavigator();

export const Lesson_4 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'SomethingToTell'}>
      <Stack.Screen name="Welcome_lesson4" component={Welcome_lesson4} />
      <Stack.Screen name="IntroScreen4" component={IntroScreen4} />
      <Stack.Screen
        name="EmproweringAffirmation"
        component={EmproweringAffirmation}
      />
      <Stack.Screen name="ShakeIt" component={ShakeIt} />
      <Stack.Screen name="WhatsGoing1" component={WhatsGoing1} />
      <Stack.Screen name="Wgoh" component={Wgoh} />
      <Stack.Screen name="WhatsGoing2" component={WhatsGoing2} />
      <Stack.Screen name="WgohPalm" component={WgohPalm} />
      <Stack.Screen name="WhatsGoing3" component={WhatsGoing3} />
      <Stack.Screen name="PalmHeelStrike" component={PalmHeelStrike} />
      <Stack.Screen name="Story" component={Story} />
      <Stack.Screen name="SomethingToTell" component={SomethingToTell} />
      <Stack.Screen name="DidYouKnow" component={DidYouKnow} />
      <Stack.Screen name="Outro" component={Outro} />
      <Stack.Screen name="ClothesGame" component={ClothesGame} />

      <Stack.Screen name="ACHIEVEMENT4" component={ACHIEVEMENT4} />
    </Stack.Navigator>
  );
};
