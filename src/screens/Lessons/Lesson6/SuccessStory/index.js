import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const SuccessStory6 = () => {
  const {container, title, subtitle, sub_title, background} = styles();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          style={background}
          source={require('../../../../assets/Image/lessons/lesson6/story6.png')}>
          {/*<View style={{paddingHorizontal: Padding.horizontal}}>*/}
          {/*<Header onPress={() => navigation.goBack()} />*/}
          {/*</View>*/}

          <Text style={title}>When Run is a Family Affair</Text>
        </ImageBackground>
        <View style={container}>
          <Text style={sub_title}>
            My daughter had been dating a guy for a while and was already living
            with him. I honestly don’t remember who moved in with whom, but it
            doesn’t really matter. What I do remember is that when he joined us
            for family things there was a vibe that just didn’t feel right. Her
            sisters saw it more as they were just more frequently together. Yet,
            we all agreed something was off. We are not a shy bunch and I know
            that they held up the mirror for her so she might be able to see
            what we were seeing. And I know that she had a hard time looking
            directly into that mirror and accepting it. One afternoon, she
            called me. “Mom, I have to get out of here and I have to get out
            now!” It wasn’t 5 minutes before I was in my van, having chucked
            every possible thing out of it out (including the back seats) and on
            my way to pick up a friend to help with carrying the furniture. In
            under 2 hours, all of her stuff was packed and in the van and she
            was on the way to sleep at a friend’s house, which was her choice,
            until she could figure out what she needed to do next. I know that
            the next few weeks, and I am guessing maybe months, were tense with
            hoping not to run into him for fear of how he would react. This
            amazing young woman, who had taken the “required” self-defense
            classes because her mom made her, and had learned a little “martial
            arts” when she was a kid, was “still” a victim of interpersonal
            violence. Yes. And. And she was able to see it when the time was
            right for her. And she was able to use her voice to ask for help.
            And she was able to figure out a plan for finding her window of
            opportunity to move in the safest way possible for her. And she was
            empowered and supported in make her choice about what needs to
            happen. AND this is a success story! Why? Because she was able to
            ask for help when she decided that she needed it. AND because her
            community rose to the occasion without judgment or questioning. This
            is the power of RUN.{' '}
          </Text>

          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size100 : Sizes.size200,
              justifyContent: 'center',
            }}>
            <Button text="Next" onPress={() => navigation.navigate('Outro6')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SuccessStory6;
