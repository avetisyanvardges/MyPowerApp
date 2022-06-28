import React, {useEffect} from 'react';
import Navigation from './Navigation';
import {Fonts} from './assets/RootStyles';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import {AppState, LogBox} from 'react-native';
import {navigationRef} from './RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useDispatch} from 'react-redux';
import {makeAction} from './store/makeAction';
import {SET_USER_DATA} from './types/USER_ACTIONS';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        database()
          .ref(`/Users/${user.uid}`)
          .once('value')
          .then(snapshot => {
            dispatch(makeAction(SET_USER_DATA, snapshot.val()));
          });
      }
    });

    const customTextInputProps = {style: {fontFamily: Fonts.regular}};
    const customTextProps = {style: {fontFamily: Fonts.regular}};

    setCustomText(customTextProps);
    setCustomTextInput(customTextInputProps);
    AppState.addEventListener('change', handleAppStateChange);
    LogBox.ignoreAllLogs();
  }, []);

  const handleAppStateChange = async nextAppState => {
    if (nextAppState === 'background' || nextAppState === 'inactive') {
      await AsyncStorage.setItem(
        'page',
        JSON.stringify(navigationRef.current.getCurrentRoute().name),
      );
    }
  };

  return <Navigation />;
};

export default Main;
