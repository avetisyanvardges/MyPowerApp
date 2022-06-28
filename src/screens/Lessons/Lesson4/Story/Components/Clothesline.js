import React, {useEffect} from 'react';
import Background from '../../../../../assets/Image/background/lesson4/ClothesBg.png';

import {BackHandler, ImageBackground, ScrollView, Text} from 'react-native';
import {styles} from '../../Story/styles';
import {View} from 'react-native-animatable';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {fullScreen, Sizes} from '../../../../../assets/RootStyles';
import {useNavigation} from '@react-navigation/native';

import Header from '../../../../../components/Header';

const Clothesline = () => {
  const {background,top_content,center_content, bottom_content,title, subtitle} = styles();
  const navigation = useNavigation();
    const backAction = () => {
        setScreen('readAgain');
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
          <Text style={title}>Clothesline Game</Text>
        </View>
          <View style={center_content}>
            <Text style={subtitle}>
                {"Were you raised on the idea of “not airing our dirty laundry in public?\" \n" +
                "\n" +
                "Many of us were. What do you think about that? Because now it's time to air our dirty laundry.\n" +
                "\n" +
                "A sentence describing an activity ranging from safe to dangerous will appear on the screen.\n" +
                "\n" +
                "Move the sentence to the appropriate place on the laundry line. \n" +
                "\n" +
                "You will play this game 5 times. \n" +
                "\n" +
                "\n"}
            </Text>
          </View>
        <View
            style={bottom_content}>
          <Button
              text={'Next'}
              onPress={() => navigation.navigate('ClothesGame')}
          />
        </View>
    </ImageBackground>
  );
};

export default Clothesline;
