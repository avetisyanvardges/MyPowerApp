import React, {useEffect} from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useSelector} from 'react-redux';
import {BackHandler} from 'react-native';

const Excercise = ({navigation, route}) => {
  const Non_exercise = useSelector(store => store.lesson_1.Non_exercise);
  const backAction = () => {
    navigation.navigate('THINK');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const screens = {
    excercise_1: (
      <VideoPlayer
        closePress={() => navigation.navigate('THINK')}
        backPress={() => navigation.navigate('Warmup_5')}
        onPress={() => navigation.navigate('THINK')}
        source={Non_exercise.whats_going}
        video_name="Whats Going On Here"
        sheet_text={'Now, you give it a try! '}
      />
    ),
    voice: (
      <VideoPlayer
        closePress={() => navigation.navigate('RUN')}
        backPress={() => navigation.navigate('YELL')}
        onPress={() => navigation.navigate('RUN')}
        source={Non_exercise.montage_of_women}
      />
    ),
    about: (
      <VideoPlayer
        closePress={() => navigation.navigate('FIGHT')}
        backPress={() => navigation.navigate('RUN')}
        onPress={() => navigation.navigate('FIGHT')}
        source={Non_exercise.fight_is_about}
        video_name="Fight is about"
        description={
          'FIGHT is about using the weapon that is with you all of the time\n' +
          '\n' +
          '-- your body -- \n' +
          '\n' +
          'to defend yourself from someone who means you harm. \n' +
          '\n' +
          'This means learning how to hit and to hurt.\n' +
          '\n' +
          '\n' +
          'it also means using your head to think about what you want, and your voice to set boundaries and say what you want. \n' +
          '\n' +
          'We hope that this tool will only be used when there is no other option. \n' +
          '\n' +
          'That being said, it is important to feel as comfortable using the physical skills as any of the others. '
        }
        sheet_text={'Now, you give it a try! '}
      />
    ),
  };

  return screens[route?.params?.screen || 'excercise_1'];
};

export default Excercise;
