import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

import {styles} from '../../EmproweringAffirmation8/styles';
import {Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../../assets/deviceInfo';

const WarmupScreen4 = ({setScreen}) => {
  const {container, title, background, subtitle} = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />

      <Text style={title}>Embarrassment Muscle</Text>
      <Text style={subtitle}>
        Many times we are embarrassed to speak out because we worry what others
        may think about us. Exercising your embarrassment muscle helps release
        the tension of “Oh no! What will they think of me?” And, sometimes it is
        just fun to be a bit silly.
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size10,
        }}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('VideoDefault8')}
          containerStyle={{marginBottom: 50}}
        />
      </View>
    </ImageBackground>
  );
};

export default WarmupScreen4;
