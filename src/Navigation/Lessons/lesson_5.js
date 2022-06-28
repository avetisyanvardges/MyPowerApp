import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome_lesson5 from '../../screens/Lessons/Lesson5/Welcome/WelcomeLesson5';
import IntroScreen5 from '../../screens/Lessons/Lesson5/Intro5';
import EmproweringAffirmation5 from '../../screens/Lessons/Lesson5/EmproweringAffirmation';
import VideoDefault from '../../screens/Lessons/Lesson5/VideoDefault';
import Question5 from '../../screens/Lessons/Lesson5/MidQuestion';
import SayA_Z_Video from '../../screens/Lessons/Lesson5/SayA_Z_Video';
import WarmupGreateScreens from '../../screens/Lessons/Lesson5/WarmupGreatScreens';
import Exercise from '../../screens/Lessons/Lesson5/Exercise';
import ExerciseSafety from '../../screens/Lessons/Lesson5/ExerciseSafety';
import ExerciseDefaultVideo5 from '../../screens/Lessons/Lesson5/Exercise5DefaultVideo';
import S_G_T_B from '../../screens/Lessons/Lesson5/S_G_T_B';
import Grab_Record from '../../screens/Lessons/Lesson5/Grab_Record';
import L_M_A from '../../screens/Lessons/Lesson5/L_M_A';
import L_M_A_Video from '../../screens/Lessons/Lesson5/L_M_A_Video';
import L_M_A_2 from '../../screens/Lessons/Lesson5/L_M_A_2';
import KneeStrike5 from '../../screens/Lessons/Lesson5/KneeStrike';
import HowYouFell from '../../screens/Lessons/Lesson5/HowYouFell';
import Know5 from '../../screens/Lessons/Lesson5/DidYouKnow5';
import Frame from '../../screens/Lessons/Lesson5/Frame';
import Outro5 from '../../screens/Lessons/Lesson5/Outro5';
import ACHIEVEMENT5 from '../../screens/Lessons/Lesson5/ACHIEVEMENT5';
import FewPhrases from '../../screens/Lessons/Lesson5/FewPhrases/FewPhrases';
import ExAudio2 from '../../screens/Lessons/Lesson5/ExAudio2/ExAudio2';

const Stack = createStackNavigator();

export const Lesson_5 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'Welcome_lesson5'}>
      <Stack.Screen name="Welcome_lesson5" component={Welcome_lesson5} />
      <Stack.Screen name="IntroScreen5" component={IntroScreen5} />
      <Stack.Screen
        name="EmproweringAffirmation5"
        component={EmproweringAffirmation5}
      />
      <Stack.Screen name="VideoDefault" component={VideoDefault} />
      <Stack.Screen name="Question5" component={Question5} />
      <Stack.Screen name="SayA_Z_Video" component={SayA_Z_Video} />
      <Stack.Screen
        name="WarmupGreateScreens"
        component={WarmupGreateScreens}
      />
      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen name="ExerciseSafety" component={ExerciseSafety} />
      <Stack.Screen name="FewPhrases" component={FewPhrases} />
      <Stack.Screen
        name="ExerciseDefaultVideo5"
        component={ExerciseDefaultVideo5}
      />
      <Stack.Screen name="ExAudio2" component={ExAudio2} />
      <Stack.Screen name="S_G_T_B" component={S_G_T_B} />
      <Stack.Screen name="Grab_Record" component={Grab_Record} />
      <Stack.Screen name="L_M_A" component={L_M_A} />
      <Stack.Screen name="L_M_A_Video" component={L_M_A_Video} />
      <Stack.Screen name="L_M_A_2" component={L_M_A_2} />
      <Stack.Screen name="KneeStrike5" component={KneeStrike5} />
      <Stack.Screen name="HowYouFell" component={HowYouFell} />
      <Stack.Screen name="Know5" component={Know5} />
      <Stack.Screen name="Frame" component={Frame} />
      <Stack.Screen name="Outro5" component={Outro5} />
      <Stack.Screen name="ACHIEVEMENT5" component={ACHIEVEMENT5} />
    </Stack.Navigator>
  );
};
