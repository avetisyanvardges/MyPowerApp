import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome from '../../screens/Lessons/Lesson7/Welcome';
import Intro from '../../screens/Lessons/Lesson7/Intro';
import EmpoweringAffirmation from '../../screens/Lessons/Lesson7/EmpoweringAffirmation';
import GameInstructions from '../../screens/Lessons/Lesson7/GameInstruction';
import Defend_game from '../../screens/Lessons/Lesson7/Defend_game';
import RecordYourSelf from '../../screens/Lessons/Lesson7/RecordYourSelf';
import Warmup from '../../screens/Lessons/Lesson7/Warmup';
import Videos from '../../screens/Lessons/Lesson7/Videos';
import VideoRecord from '../../screens/Lessons/Lesson7/VideoRecord';
import Vulnerable_game from '../../screens/Lessons/Lesson7/Vulnerable_game';
import PalmHellKnee from '../../screens/Lessons/Lesson7/PalmHellKnee/PalmHellKnee';
import Challenging from '../../screens/Lessons/Lesson7/Challenging';
import Textbox from '../../screens/Lessons/Lesson7/Textbox';
import Great from '../../screens/Lessons/Lesson7/Great';
import PlayGameAgain from '../../screens/Lessons/Lesson7/PlayGameAgain';
import PersonsInstinct from '../../screens/Lessons/Lesson7/PersonsInstinct';
import LowElbows from '../../screens/Lessons/Lesson7/LowElbows';
import NameInit from '../../screens/Lessons/Lesson7/NameInit';
import LetsPractice from '../../screens/Lessons/Lesson7/LetsPractice';
import HelpBox from '../../screens/Lessons/Lesson7/HelpBox';
import GroinStrike from '../../screens/Lessons/Lesson7/GroinStrike';
import Know7 from '../../screens/Lessons/Lesson7/DidYouKnow';
import SuccessStory7 from '../../screens/Lessons/Lesson7/SuccessStory7';
import Outro from '../../screens/Lessons/Lesson7/Outro';
import Horizontal_defend_game from '../../screens/Lessons/Lesson7/Horizontal_defend_game';
import ACHIEVEMENT from '../../screens/Lessons/Lesson7/ACHIEVEMENT';
import ThatFeel from '../../screens/Lessons/Lesson7/ThatFeel';
import Textbox_feel from '../../screens/Lessons/Lesson7/Textbox_Feel';

const Stack = createStackNavigator();

export const Lesson_7 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'Welcome'}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen
        name="EmpoweringAffirmation"
        component={EmpoweringAffirmation}
      />
      <Stack.Screen name="GameInstructions" component={GameInstructions} />
      <Stack.Screen name="Defend_game" component={Defend_game} />
      <Stack.Screen name="Videos" component={Videos} />
      <Stack.Screen name="Warmup" component={Warmup} />
      <Stack.Screen name="RecordYourSelf" component={RecordYourSelf} />
      <Stack.Screen name="PalmHellKnee" component={PalmHellKnee} />
      <Stack.Screen name="Challenging" component={Challenging} />
      <Stack.Screen name="Textbox" component={Textbox} />
      <Stack.Screen name="Textbox_feel" component={Textbox_feel} />
      <Stack.Screen name="Great" component={Great} />
      <Stack.Screen name="PlayGameAgain" component={PlayGameAgain} />
      <Stack.Screen name="PersonsInstinct" component={PersonsInstinct} />
      <Stack.Screen name="ThatFeel" component={ThatFeel} />
      <Stack.Screen name="LowElbows" component={LowElbows} />
      <Stack.Screen name="NameInit" component={NameInit} />
      <Stack.Screen name="LetsPractice" component={LetsPractice} />
      <Stack.Screen name="HelpBox" component={HelpBox} />
      <Stack.Screen name="GroinStrike" component={GroinStrike} />
      <Stack.Screen name="Know7" component={Know7} />
      <Stack.Screen name="SuccessStory7" component={SuccessStory7} />
      <Stack.Screen name="Outro" component={Outro} />
      <Stack.Screen name="VideoRecord" component={VideoRecord} />
      <Stack.Screen name="Vulnerable_game" component={Vulnerable_game} />
      <Stack.Screen
        name="Horizontal_defend_game"
        component={Horizontal_defend_game}
      />
      <Stack.Screen name="ACHIEVEMENT" component={ACHIEVEMENT} />
    </Stack.Navigator>
  );
};
