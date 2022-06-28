import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome_lesson from '../../screens/Lessons/lesson1/Welcome';
import Warmup from '../../screens/Lessons/lesson1/Warmup/warmup_1';
import video_init from '../../screens/Lessons/lesson1/Video_init/video_init';
import Warmup_2 from '../../screens/Lessons/lesson1/Warmup/warmup_2';
import Warmup_3 from '../../screens/Lessons/lesson1/Warmup/warmup_3';
import Warmup_4 from '../../screens/Lessons/lesson1/Warmup/warmup_4';
import Warmup_5 from '../../screens/Lessons/lesson1/Warmup/warmup_5';
import Excercise from '../../screens/Lessons/lesson1/Excercise';
import THINK from '../../screens/Lessons/lesson1/THINK';
import GameInitial from '../../screens/Lessons/lesson1/GameInitial';
import Scenario_1 from '../../screens/Lessons/lesson1/GameInitial/Scenario_1';
import Warmup_6 from '../../screens/Lessons/lesson1/Warmup/warmup_6';
import YELL from '../../screens/Lessons/lesson1/YELL';
import RUN from '../../screens/Lessons/lesson1/RUN';
import FIGHT from '../../screens/Lessons/lesson1/FIGHT';
import TELL from '../../screens/Lessons/lesson1/TELL';
import RECORD from '../../screens/Lessons/lesson1/RECORD';
import FAQ from '../../screens/Lessons/lesson1/FAQ';
import EXPERT from '../../screens/Lessons/lesson1/EXPERT';
import ACHIEVEMENT from '../../screens/Lessons/lesson1/ACHIEVEMENT';
import NotEveryVideo from '../../screens/Lessons/lesson1/NotEveryVideo';
import OutroScreen from '../../screens/Lessons/lesson1/Outro';
import IntroScreen from '../../screens/Lessons/lesson1/Intro';

const Stack = createStackNavigator();

export const Lesson_1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName="Welcome_lesson">
      <Stack.Screen name="Welcome_lesson" component={Welcome_lesson} />
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="Warmup" component={Warmup} />
      <Stack.Screen name="Warmup_2" component={Warmup_2} />
      <Stack.Screen name="Warmup_3" component={Warmup_3} />
      <Stack.Screen name="Warmup_4" component={Warmup_4} />
      <Stack.Screen name="Warmup_5" component={Warmup_5} />
      <Stack.Screen name="Warmup_6" component={Warmup_6} />
      <Stack.Screen name="Video_init" component={video_init} />
      <Stack.Screen name="Louder_numbers" component={video_init} />
      <Stack.Screen name="Softer_numbers" component={video_init} />
      <Stack.Screen name="Excercise" component={Excercise} />
      <Stack.Screen name="Voices3" component={Excercise} />
      <Stack.Screen name="Fight_about" component={Excercise} />
      <Stack.Screen name="THINK" component={THINK} />
      <Stack.Screen name="YELL" component={YELL} />
      <Stack.Screen name="RUN" component={RUN} />
      <Stack.Screen name="FIGHT" component={FIGHT} />
      <Stack.Screen name="TELL" component={TELL} />
      <Stack.Screen name="RECORD" component={RECORD} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="EXPERT" component={EXPERT} />
      <Stack.Screen name="ACHIEVEMENT" component={ACHIEVEMENT} />
      <Stack.Screen name="GameInitial" component={GameInitial} />
      <Stack.Screen name="Scenario_1" component={Scenario_1} />
      <Stack.Screen name="NotEveryVideo" component={NotEveryVideo} />
      <Stack.Screen name="Outro" component={OutroScreen} />
    </Stack.Navigator>
  );
};
