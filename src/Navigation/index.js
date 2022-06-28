import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Lessons from './Lessons';
import {navigationRef} from '../RootNavigation';
import {Onboarding} from './Onboarding';
import NavAllScreens from '../screens/NavAllScreens';
import {Lesson_1} from './Lessons/lesson_1';
import {Lesson_2} from './Lessons/lesson_2';
import {Lesson_3} from './Lessons/lesson_3';
import {Lesson_4} from './Lessons/Lesson_4';
import {Lesson_5} from './Lessons/lesson_5';
import {Lesson_6} from './Lessons/lesson_6';
import {Lesson_7} from './Lessons/lesson_7';
import {Lesson_8} from './Lessons/lesson_8';
import firebaseTest from '../screens/firebaseTest';
import {Lesson_9} from './Lessons/lesson_9';
import {Lesson_10} from './Lessons/lesson_10';
import {Lesson_11} from './Lessons/lesson_11';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
        initialRouteName="Lesson_11">
        <Stack.Screen name="NavAllScreens" component={NavAllScreens} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="Lesson_1" component={Lesson_1} />
        <Stack.Screen name="Lesson_2" component={Lesson_2} />
        <Stack.Screen name="Lesson_3" component={Lesson_3} />
        <Stack.Screen name="Lesson_4" component={Lesson_4} />
        <Stack.Screen name="Lesson_5" component={Lesson_5} />
        <Stack.Screen name="Lesson_6" component={Lesson_6} />
        <Stack.Screen name="Lesson_7" component={Lesson_7} />
        <Stack.Screen name="Lesson_8" component={Lesson_8} />
        <Stack.Screen name="Lesson_9" component={Lesson_9} />
        <Stack.Screen name="Lesson_10" component={Lesson_10} />
        <Stack.Screen name="Lesson_11" component={Lesson_11} />
        <Stack.Screen name="Fire" component={firebaseTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
