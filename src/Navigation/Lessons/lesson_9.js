import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome9 from '../../screens/Lessons/lesson9/Welcome9';
import IntroScreen9 from '../../screens/Lessons/lesson9/intro9';
import EmproweringAffirmation9 from '../../screens/Lessons/lesson9/EmproweringAffirmation9';
import Record9 from '../../screens/Lessons/lesson9/Record9';
import VideoMine from '../../screens/Lessons/lesson9/VideoMine';
import Question9 from '../../screens/Lessons/lesson9/Question9';
import WristStrike from '../../screens/Lessons/lesson9/WristStrike';
import HowDid from '../../screens/Lessons/lesson9/HowDid';
import MirrorChallenge from '../../screens/Lessons/lesson9/MirrorChallenge';
import PickPoses from '../../screens/Lessons/lesson9/PickPoses';
import HowDidFell9 from '../../screens/Lessons/lesson9/HowDidFell9';
import PowerPoses from '../../screens/Lessons/lesson9/PowerPoses';
import RecordPoses from '../../screens/Lessons/lesson9/RecordAudio9';
import HowDidFell9_2 from '../../screens/Lessons/lesson9/HowDidFell9_2';
import Warmup_9 from '../../screens/Lessons/lesson9/Help';
import Know9 from '../../screens/Lessons/lesson9/DidYouKnow9';
import SuccessStory9 from '../../screens/Lessons/lesson9/SuccessStory9';
import Outro9 from '../../screens/Lessons/lesson9/Outro9';
import ACHIEVEMENT9 from '../../screens/Lessons/lesson9/ACHIEVEMENT9';
import Photo_game from '../../screens/Lessons/lesson9/Photo_game';
import BodyParts from '../../screens/Lessons/lesson9/Body_parts';
import RecordEnd9 from '../../screens/Lessons/lesson9/Record9/Components/RecordEnd9';

const Stack = createStackNavigator();

export const Lesson_9 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'Welcome9'}>
      <Stack.Screen name="Welcome9" component={Welcome9} />
      <Stack.Screen name="IntroScreen9" component={IntroScreen9} />
      <Stack.Screen
        name="EmproweringAffirmation9"
        component={EmproweringAffirmation9}
      />
      <Stack.Screen name="Record9" component={Record9} />
      <Stack.Screen name="VideoMine" component={VideoMine} />
      <Stack.Screen name="Question9" component={Question9} />
      <Stack.Screen name="WristStrike" component={WristStrike} />
      <Stack.Screen name="HowDid" component={HowDid} />
      <Stack.Screen name="MirrorChallenge" component={MirrorChallenge} />
      <Stack.Screen name="BodyParts" component={BodyParts} />
      <Stack.Screen name="Photo_game" component={Photo_game} />
      <Stack.Screen name="PickPoses" component={PickPoses} />
      <Stack.Screen name="HowDidFell9" component={HowDidFell9} />
      <Stack.Screen name="PowerPoses" component={PowerPoses} />
      <Stack.Screen name="RecordPoses" component={RecordPoses} />
      <Stack.Screen name="HowDidFell9_2" component={HowDidFell9_2} />
      <Stack.Screen name="Warmup_9" component={Warmup_9} />
      <Stack.Screen name="Know9" component={Know9} />
      <Stack.Screen name="SuccessStory9" component={SuccessStory9} />
      <Stack.Screen name="Outro9" component={Outro9} />
      <Stack.Screen name="ACHIEVEMENT9" component={ACHIEVEMENT9} />
    </Stack.Navigator>
  );
};
