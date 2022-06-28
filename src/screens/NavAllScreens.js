import React from 'react';
import {ImageBackground, PixelRatio, Pressable, Text} from 'react-native';
import {Sizes} from '../assets/RootStyles';
import * as RootNavigation from '../RootNavigation';

const NavAllScreens = () => {
  return (
    <ImageBackground
      source={require('./../assets/Image/background/lesson3/lesson3Bg.png')}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        onPress={() => RootNavigation.navigate('Onboarding')}
        style={{marginVertical: Sizes.size15}}>
        <Text>ONBOARDING</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_1')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 1</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_2')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 2</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_3')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 3</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_4')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 4</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_5')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 5</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_6')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 6</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_7')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 7</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_8')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 8</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_9')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 9</Text>
      </Pressable>
      <Pressable
        onPress={() => RootNavigation.navigate('Lesson_10')}
        style={{marginVertical: Sizes.size15}}>
        <Text>LESSON 10</Text>
      </Pressable>
    </ImageBackground>
  );
};

export default NavAllScreens;
