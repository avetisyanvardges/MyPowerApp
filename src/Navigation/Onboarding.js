import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import UserData from '../screens/UserData';
import QuestionData from '../screens/Question';
import ExperienceQuestionData from '../screens/ExperienceQuestion';
import Login from '../screens/Login';
import PersonalCommintment from '../screens/PersonalCommitment';
import Poses from '../screens/Poses';
import Home from '../screens/Home';
import Back2Baln from '../screens/Back2Baln';
import Questionnaire from '../screens/Questionnaire';
import Victim from '../screens/Victim';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

export const Onboarding = () => {
  // useEffect(() => {
  //   AsyncStorage.getItem('token').then(() => {
  //     AsyncStorage.getItem('page').then(page => {
  //       if (page) {
  //         RootNavigation.navigate(JSON.parse(page));
  //       } else {
  //         RootNavigation.navigate('Login');
  //       }
  //     });
  //   });
  // }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Splash'}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="UserData" component={UserData} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="QuestionData" component={QuestionData} />
      <Stack.Screen
        name="ExperienceQuestionData"
        component={ExperienceQuestionData}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="PersonalCommintment"
        component={PersonalCommintment}
      />
      <Stack.Screen name="Poses" component={Poses} />
      <Stack.Screen name="Back2Baln" component={Back2Baln} />
      <Stack.Screen name="Questionnaire" component={Questionnaire} />
      <Stack.Screen name="Victim" component={Victim} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
