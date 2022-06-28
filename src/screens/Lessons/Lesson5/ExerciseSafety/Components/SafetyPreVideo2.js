import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from '../../ExerciseSafety/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const SafetyPreVideo2 = ({setScreen}) => {
  const {container, subtitle, title, background} = styles();
  const navigation = useNavigation();

  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}>
        <ScrollView>
          <View>
            <Text style={title}>
              OK, let's see what setting a clear loud boundary as a response to
              adasdasd a physical touch might look like.
            </Text>
          </View>
          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size300 : Sizes.size300,
              justifyContent: 'flex-end',
            }}>
            <Button
              text="Next"
              onPress={() => navigation.navigate('ExerciseDefaultVideo5')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SafetyPreVideo2;
