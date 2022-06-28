import React, {useEffect} from 'react';
import {
  BackHandler,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../components/header';
import Orientation from 'react-native-orientation-locker';
import {useSelector} from 'react-redux';
import {Button} from '../../../../components/Button';

const THINK = ({navigation}) => {
  const wax_on = useSelector(store => store.lesson_1.Gifs.wax_on);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const backAction = () => {
    navigation.navigate('Excercise', {screen: 'excercise_1'});
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const {container, title_container, warmup_title, text_container, text} =
    styles();

  const up_text =
    'While THINK is not always the first principle we might need to use, if we can, it is the first we turn to. We can use our power of observation to recognize situations, moments, behaviors and conditions that make us uncomfortable.\n' +
    '\n' +
    'As you work through the lessons in this course we encourage you to talk out loud through the “what’s going on here?” piece of each scenario. \n' +
    '\n' +
    'For example: “I am seeing a scene in a home. Looks like there is tension between the two people there. She is serving dinner.” While you observe and describe this scene you are exercising your awareness muscle.\n' +
    '\n' +
    'A little bit about muscles.\n' +
    'For those who have seen the movie Karate Kid, you will remember the famous scene about "Wax on! Wax off!"';

  const bottom_text =
    'All of the different jobs that the Sensei (teacher) gave to the student were designed to develop different movements, different sets of muscles. \n' +
    '\n' +
    'While the student did not necessarily understand the reason for each of the tasks, in the end, the Sensei helped the student to put it all together.\n' +
    '\n' +
    'In the MyPwr App, you will be introduced to many different types of muscles.\n' +
    ' \n' +
    'While some of those muscles are physical ones, like those used in physical techniques, others might be verbal or emotional muscles. \n' +
    '\n' +
    'Some of this might make sense right away, and other parts of it might not make sense until you get to the very end of the course.\n' +
    '\n' +
    'If something is not clear to you along the way, please ask for help within the app. We have experts waiting to help you.\n';
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson1/warmup_5.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={warmup_title}>THINK</Text>
        </View>
        <View style={text_container}>
          <Text style={text}>{up_text}</Text>

          <View style={{alignItems: 'center'}}>
            <Image
              source={{uri: wax_on}}
              style={{
                width: '100%',
                height: Sizes.size200,
                resizeMode: 'contain',
              }}
            />
          </View>
          <Text style={text}>{bottom_text}</Text>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: Sizes.size50,
            }}>
            <Button
              text="Next"
              onPress={() => {
                navigation.navigate('YELL');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default THINK;
