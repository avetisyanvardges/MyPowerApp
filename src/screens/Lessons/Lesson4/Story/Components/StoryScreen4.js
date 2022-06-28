import React, {useEffect} from 'react';
import Background from '../../../../../assets/Image/background/commintmentBg.png';

import {BackHandler, ImageBackground, Text} from 'react-native';
import {styles} from '../../Story/styles';
import {View} from 'react-native-animatable';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import {Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import RadioForm from 'react-native-simple-radio-button';

const StoryScreen4 = ({setScreen}) => {
  const {background,top_content, center_content,bottom_content,title} = styles();
  const radio_props = [
    {label: 'Yes', value: 0},
    {label: 'No', value: 1},
  ];
  const backAction = () => {
        setScreen('story3');
        return true;
    };
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
  return (
    <ImageBackground style={background} source={Background}>
      <Header onPress={() => setScreen('story3')} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>Does it matter? </Text>
          <RadioForm
              style={{height: 100, justifyContent: 'space-around', marginTop: 60}}
              radio_props={radio_props}
              initial={0}
              onPress={value => value === value}
              buttonColor={'#AAAAAA'}
              selectedButtonColor={'#AAAAAA'}
              buttonSize={10}
              buttonOuterSize={20}
          />
      </View>
        <View style={center_content}></View>
      <View
        style={bottom_content}>
        <Button
          text={'Next'}
          onPress={() => setScreen('story5')}
        />
      </View>
    </ImageBackground>
  );
};

export default StoryScreen4;
