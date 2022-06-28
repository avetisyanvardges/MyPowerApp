import React, {useEffect, useState} from 'react';
import SafetyStance3 from './Components/SafetyStence';
import FirstTechnique from './Components/FirstTechnique';
import UserKnee from './Components/UserKnee';
import SecondTechnique from './Components/SecondTechnique';
import NotSure from './Components/NotSure';
import NotFeeling from './Components/NotFeeling';
import PowerfullStrike from './Components/PowefullStrike';
import KneeStrike from './Components/KneeStrike';
import {View} from 'react-native';
import {Padding} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';

const PreVideo3 = ({navigation, route}) => {
  const [current_screen, setScreen] = useState('safetyStence');

  useEffect(() => {
    if (route.params) {
      setScreen(route.params.screen);
    }
  }, [navigation, route]);

  const screens = {
    safetyStence: <SafetyStance3 setScreen={setScreen} />,
    powerfullStrike: <PowerfullStrike setScreen={setScreen} />,
    technique: <FirstTechnique setScreen={setScreen} />,
    kneeStrike: <KneeStrike setScreen={setScreen} />,
    knee: <UserKnee setScreen={setScreen} />,
    secondTechnique: <SecondTechnique setScreen={setScreen} />,
    notSure: <NotSure setScreen={setScreen} />,
    notFeeling: <NotFeeling setScreen={setScreen} />,
  };

  return (
    <View style={{flex: 1}}>
      {current_screen === 'powerfullStrike' ||
      current_screen === 'kneeStrike' ? null : (
        <View style={{paddingHorizontal: Padding.horizontal}}>
          <Header onPress={() => navigation.goBack()} rightIcon={true} />
        </View>
      )}
      {screens[current_screen]}
    </View>
  );
};

export default PreVideo3;
