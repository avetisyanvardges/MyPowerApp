import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Support = ({setScreen}) => {
  const navigation = useNavigation();

  // useEffect(() => {
  //     const unsubscribe = navigation.addListener('focus', () => {
  //         Orientation.lockToPortrait();
  //     });
  //
  //     return unsubscribe;
  // }, [navigation]);
  const {title, background, subtitle} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <Text style={title}>Support Circles</Text>
        <Text style={subtitle}>
          Here is what you need to know about ESD support circles and the
          different options available. Support circles serve a unique purpose.
          While it is impossible for us to physically show you this in an APP,
          we can show you how to build your own support circle. In many classes
          the teacher stands in front facing the students. In ESD classes we
          encourage people to stand in circles, shoulder to shoulder, as equals.
          While the instructor has more knowledge about the tools of ESD, they
          do not have more knowledge about you, your experiences, or your body.
          You are the expert of those! Also, not that long ago, that teacher was
          standing in her first ESD circle as a beginner, just like you are
          today. Everyone in this field started out as someone looking to
          explore their personal power, their ability to stand up for and to
          defend themselves. In these support circles we share. How did that
          feel? What do you think about it? Did it raise questions? Did it help
          you find answers? Sharing is what allows you to feel supported,
          accepted, and understood, creating a sense of closeness, solidarity,
          and cooperation, as an alternative to loneliness and shame. Our ESD
          support circles help students cope with personal barriers on the way
          to discovering their ability to protect themselves. In this APP you
          will find a way to create community, support circles, so that you too
          can get the support you deserve as you progress. In other words, we
          believe that by creating support circles and learning the ESD tools
          for violence prevention we are helping to create safer communities.
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginTop: deviceInfo.small_screen ? Sizes.size30 : Sizes.size40,
          }}>
          <Button
            text="Next"
            onPress={() => navigation.navigate('GoodSupport')}
            containerStyle={{marginBottom: 50}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Support;
