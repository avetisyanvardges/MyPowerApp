import React, {useEffect} from 'react';
import Background from '../../../../../assets/Image/background/commintmentBg.png';

import {BackHandler, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../Story/styles';
import {View} from 'react-native-animatable';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';

const Challenge = ({setScreen}) => {
  const {background,top_content,center_content, bottom_content,title,skip_content, subtitle} = styles();
    const backAction = () => {
        setScreen('story5');
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
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>Challenge</Text>
          <Text style={subtitle}>
              Read the story again, and in your head change the genders of the
              people in the story. Does that feel different to you?
          </Text>
      </View>

        <View style={center_content}>

        </View>
      <View
        style={bottom_content}>
        <Button
          text={'Read again'}
          onPress={() => setScreen('readAgain')}
        />
          <View style={skip_content}>
              <TouchableOpacity
                  onPress={() => {
                      navigation.navigate('SelfRecording');
                  }}>
                  <Text style={subtitle}>Skip</Text>
              </TouchableOpacity>
          </View>
      </View>
    </ImageBackground>
  );
};

export default Challenge;
