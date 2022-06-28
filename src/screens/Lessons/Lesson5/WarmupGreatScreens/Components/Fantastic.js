import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from '../../WarmupGreatScreens/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Fantastic = () => {
  const {
    container,
    redSubtitle,
    redTitle,
    title,
    background,
    content,
    subtitle,
  } = styles();
  const navigation = useNavigation();

  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}>
        <View style={{alignItems: 'center'}}>
          <Text style={redTitle}>Fantastic! </Text>
          <Text style={redSubtitle}>Ready to start your recording?</Text>
        </View>
        <View style={content}>
          <Text style={title}>
            How about recording yourself saying the alphabet and getting angry?
          </Text>
          <Text style={subtitle}>
            Press the record button below whenever you’re ready and start your
            recording.
          </Text>
        </View>
        <View
          style={{
            marginBottom: deviceInfo.small_screen ? Sizes.size70 : Sizes.size40,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Button
            text="Ok, I’m ready"
            onPress={() =>
              navigation.navigate('SayA_Z_Video', {screen: 'a_z_3'})
            }
          />
          <Pressable onPress={() => navigation.navigate('Exercise')}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: Sizes.size15,
                fontWeight: 'bold',
              }}>
              Not now
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Fantastic;
