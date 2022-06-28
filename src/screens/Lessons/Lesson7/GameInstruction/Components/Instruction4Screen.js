import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {styles} from '../../GameInstruction/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Instructions4Screen = () => {
  const {container, title, background, subtitle} = styles();
  const navigation = useNavigation();
  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson4/warmupBg3x.png')}>
        <ScrollView>
          <Text style={title}>RUN, Don’t Walk!</Text>
          <Text style={subtitle}>
            In this exercise you will see a few scenarios. The first time
            through you will watch the entire scene. The scenes are not
            pleasant. The second time through use the RUN button to signal when
            you would have chosen to walk away.{' '}
          </Text>

          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size200 : Sizes.size400,
              justifyContent: 'flex-end',
            }}>
            <Button text="Next" onPress={() => navigation.navigate('Game1')} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Instructions4Screen;
