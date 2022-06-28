import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../ExerciseSafety/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const SafetyPreVideo1 = ({setScreen}) => {
  const {container, subtitle, redTitle, title, background, content} = styles();
  const navigation = useNavigation();

  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}>
        <View>
          <Text style={title}>
            Doaa this a few more times until you feel more comfortable with
            saying these phrases.
          </Text>
          <Text style={subtitle}>
            If you are really brave, do it standing in front of a mirror!{' '}
          </Text>
        </View>
        <View
          style={{
            marginBottom: deviceInfo.small_screen
              ? Sizes.size120
              : Sizes.size40,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Button text="Next" onPress={() => setScreen('safetyPreVideo2')} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SafetyPreVideo1;
