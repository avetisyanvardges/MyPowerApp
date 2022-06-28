import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome_lesson6 from '../../screens/Lessons/Lesson6/Welcome/WelcomeLesson6';
import IntroScreen6 from '../../screens/Lessons/Lesson6/Intro6';
import EmpoweringAffirmation6 from '../../screens/Lessons/Lesson6/EmpoweringAffirmation';
import AudioActive from '../../screens/Lessons/Lesson6/AudioActive/AudioActive';
import SelfRecording from '../../screens/Lessons/Lesson6/SelfRecordingActive';
import FightIf from '../../screens/Lessons/Lesson6/FightIf/FigthIf';
import GameInstructions from '../../screens/Lessons/Lesson6/GameInstruction';
import Game1 from '../../screens/Lessons/Lesson6/Game1';
import AfterGame from '../../screens/Lessons/Lesson6/AfterGame/AfterGame';
import Know6 from '../../screens/Lessons/Lesson6/DidYouKnow6';
import SuccessStory6 from '../../screens/Lessons/Lesson6/SuccessStory';
import Outro6 from '../../screens/Lessons/Lesson6/Outro6';
import ACHIEVEMENT6 from '../../screens/Lessons/Lesson6/ACHIEVEMENT6';
import RECORD from '../../screens/Lessons/Lesson6/RECORD';
import RepeatWarmup from '../../screens/Lessons/Lesson6/RepeatWarmup/RepeatWarmup';

const Stack = createStackNavigator();

export const Lesson_6 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'AudioActive'}>
      <Stack.Screen name="Welcome_lesson6" component={Welcome_lesson6} />
      <Stack.Screen name="IntroScreen6" component={IntroScreen6} />
      <Stack.Screen
        name="EmpoweringAffirmation6"
        component={EmpoweringAffirmation6}
      />
      <Stack.Screen name="AudioActive" component={AudioActive} />
      <Stack.Screen name="RepeatWarmup" component={RepeatWarmup} />
      <Stack.Screen name="SelfRecording" component={SelfRecording} />
      <Stack.Screen name="RECORD" component={RECORD} />
      <Stack.Screen name="FightIf" component={FightIf} />
      <Stack.Screen name="GameInstructions" component={GameInstructions} />
      <Stack.Screen name="Game1" component={Game1} />
      <Stack.Screen name="AfterGame" component={AfterGame} />
      <Stack.Screen name="Know6" component={Know6} />
      <Stack.Screen name="SuccessStory6" component={SuccessStory6} />
      <Stack.Screen name="Outro6" component={Outro6} />
      <Stack.Screen name="ACHIEVEMENT6" component={ACHIEVEMENT6} />
    </Stack.Navigator>
  );
};
