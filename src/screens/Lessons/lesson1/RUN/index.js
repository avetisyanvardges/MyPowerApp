import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../components/header';
import Orientation from 'react-native-orientation-locker';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';

const RUN = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
    });

    return unsubscribe;
  }, [navigation]);
  const backAction = () => {
    navigation.navigate('YELL');
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
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson1/YellBG.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={warmup_title}>RUN</Text>
        </View>
        <View style={text_container}>
          <Text style={text}>
            RUN is both about leaving when you feel uncomfortable with a
            situation and running away if someone is physically attacking you.
            As we have mentioned, we want you to think of these principles on a
            spectrum. RUN can be as simple as saying “I am not interested in
            talking to you” and leaving or speeding away to safety as fast as
            you can! And, since not everyone can physically run, it also means
            getting away or leaving in whatever manner possible. Also, you most
            likely don’t know how fast an attacker can run, so it's good to have
            an idea of what your other options are for removing yourself from a
            dangerous situation at that moment. And, what if it depends on the
            shoes you put on this morning? Honestly, I don’t want to pick my
            shoes every morning based on something that might happen. I never
            want to have to choose my shoes out of fear. Therefore, it's a good
            idea to know what to do regardless of footwear. In addition, RUN is
            about what to do once you have defended yourself. “GO GET HELP!” We
            can say this to ourselves to remind us that we have the right to be
            supported, or it can be shouted out loud so others know that we need
            assistance.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: Sizes.size50,
          }}>
          <Button
            text="Next"
            onPress={() => {
              navigation.navigate('Fight_about', {screen: 'about'});
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RUN;
