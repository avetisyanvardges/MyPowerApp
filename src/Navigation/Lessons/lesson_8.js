import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Welcome from '../../screens/Lessons/Lesson7/Welcome';
import Welcome8 from '../../screens/Lessons/Lesson8/Welcome8';
import IntroScreen8 from '../../screens/Lessons/Lesson8/intro8';
import EmproweringAffirmation8 from '../../screens/Lessons/Lesson8/EmproweringAffirmation8';
import VideoDefault8 from '../../screens/Lessons/Lesson8/VideoDefault8';
import RecordSelf8 from '../../screens/Lessons/Lesson8/RecordYourSelf8';
import VideoRecord8 from '../../screens/Lessons/Lesson8/VideoRecord8';
import Discomfort from '../../screens/Lessons/Lesson8/Discomfort';
import Video_Audio from '../../screens/Lessons/Lesson8/Video_Audio_Question';
import Support from '../../screens/Lessons/Lesson8/Support';
import GoodSupport from '../../screens/Lessons/Lesson8/GoodSupport';
import PeopleSupport from '../../screens/Lessons/Lesson8/PeopleSupport';
import Practice from '../../screens/Lessons/Lesson8/Practice';
import RecordAudio from '../../screens/Lessons/Lesson8/RecordAudio';
import Yes_No from '../../screens/Lessons/Lesson8/Yes_No';
import Formula from '../../screens/Lessons/Lesson8/Formula';
import YesScreen8 from '../../screens/Lessons/Lesson8/Yes';
import RecordAudio_2 from '../../screens/Lessons/Lesson8/RecordAudio2';
import GroundingTechnique from '../../screens/Lessons/Lesson8/GroundingTechnique';
import FollovingColors from '../../screens/Lessons/Lesson8/FollovingColors';
import RepeatWarmup8 from '../../screens/Lessons/Lesson8/RepeatWrmup';
import PlayGame from '../../screens/Lessons/Lesson8/PlayGame';
import Game8 from '../../screens/Lessons/Lesson8/Game';
import HowDidFell from '../../screens/Lessons/Lesson8/HowDidFell';
import SupportCircle from '../../screens/Lessons/Lesson8/SupportCircle';
import Game8_2 from '../../screens/Lessons/Lesson8/Game2';
import HowDidFell2 from '../../screens/Lessons/Lesson8/HowDidFell2';
import SupportCircle2 from '../../screens/Lessons/Lesson8/SupportCircle2';
import Know8 from '../../screens/Lessons/Lesson8/DidYouKnow8';
import SuccessStory8 from '../../screens/Lessons/Lesson8/SuccessStory8';
import QuiqChek from '../../screens/Lessons/Lesson8/QuiqCheck';
import QuiqChek2 from '../../screens/Lessons/Lesson8/QuiqCheck2';
import QuiqChek3 from '../../screens/Lessons/Lesson8/QuiqCheck3';
import Outro8 from '../../screens/Lessons/Lesson8/Outro8';
import ACHIEVEMENT8 from '../../screens/Lessons/Lesson8/ACHIEVEMENT8';
import Pt_1 from '../../screens/Lessons/Lesson8/Pt_1';
import Impact from '../../screens/Lessons/Lesson8/Impact';
import Pt_2 from '../../screens/Lessons/Lesson8/Pt_2';

const Stack = createStackNavigator();

export const Lesson_8 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
      initialRouteName={'Welcome'}>
      <Stack.Screen name="Welcome" component={Welcome8} />
      <Stack.Screen name="IntroScreen8" component={IntroScreen8} />
      <Stack.Screen
        name="EmproweringAffirmation8"
        component={EmproweringAffirmation8}
      />
      <Stack.Screen name="VideoDefault8" component={VideoDefault8} />
      <Stack.Screen name="RecordSelf8" component={RecordSelf8} />
      <Stack.Screen name="VideoRecord8" component={VideoRecord8} />
      <Stack.Screen name="Discomfort" component={Discomfort} />
      <Stack.Screen name="Pt_1" component={Pt_1} />
      <Stack.Screen name="Impact" component={Impact} />
      <Stack.Screen name="Pt_2" component={Pt_2} />
      <Stack.Screen name="Video_Audio" component={Video_Audio} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="GoodSupport" component={GoodSupport} />
      <Stack.Screen name="PeopleSupport" component={PeopleSupport} />
      <Stack.Screen name="Practice" component={Practice} />
      <Stack.Screen name="RecordAudio" component={RecordAudio} />
      <Stack.Screen name="Yes_No" component={Yes_No} />
      <Stack.Screen name="Formula" component={Formula} />
      <Stack.Screen name="YesScreen8" component={YesScreen8} />
      <Stack.Screen name="RecordAudio_2" component={RecordAudio_2} />
      <Stack.Screen name="GroundingTechnique" component={GroundingTechnique} />
      <Stack.Screen name="FollovingColors" component={FollovingColors} />
      <Stack.Screen name="RepeatWarmup8" component={RepeatWarmup8} />
      <Stack.Screen name="PlayGame" component={PlayGame} />
      <Stack.Screen name="Game8" component={Game8} />
      <Stack.Screen name="HowDidFell" component={HowDidFell} />
      <Stack.Screen name="SupportCircle" component={SupportCircle} />
      <Stack.Screen name="Game8_2" component={Game8_2} />
      <Stack.Screen name="HowDidFell2" component={HowDidFell2} />
      <Stack.Screen name="SupportCircle2" component={SupportCircle2} />
      <Stack.Screen name="Know8" component={Know8} />
      <Stack.Screen name="SuccessStory8" component={SuccessStory8} />
      <Stack.Screen name="QuiqChek" component={QuiqChek} />
      <Stack.Screen name="QuiqChek2" component={QuiqChek2} />
      <Stack.Screen name="QuiqChek3" component={QuiqChek3} />
      <Stack.Screen name="Outro8" component={Outro8} />
      <Stack.Screen name="ACHIEVEMENT8" component={ACHIEVEMENT8} />
    </Stack.Navigator>
  );
};
