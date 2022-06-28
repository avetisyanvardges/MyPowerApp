import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Lesson_1} from './lesson_1';
import {Lesson_2} from './lesson_2';
import {Lesson_3} from './lesson_3';
import {Lesson_4} from './Lesson_4';
import {Lesson_5} from './lesson_5';
import {Lesson_6} from './lesson_6';
import {Lesson_7} from './lesson_7';
import {Lesson_8} from './lesson_8';
import {Lesson_9} from './lesson_9';

const Stack = createStackNavigator();

const Lessons = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Lesson_4">
      <Stack.Screen name="Lesson_1" component={Lesson_1} />
      <Stack.Screen name="Lesson_2" component={Lesson_2} />
      <Stack.Screen name="Lesson_3" component={Lesson_3} />
      <Stack.Screen name="Lesson_4" component={Lesson_4} />
      <Stack.Screen name="Lesson_5" component={Lesson_5} />
      <Stack.Screen name="Lesson_6" component={Lesson_6} />
      <Stack.Screen name="Lesson_7" component={Lesson_7} />
      <Stack.Screen name="Lesson_8" component={Lesson_8} />
      <Stack.Screen name="Lesson_9" component={Lesson_9} />
    </Stack.Navigator>
  );
};
export default Lessons;
