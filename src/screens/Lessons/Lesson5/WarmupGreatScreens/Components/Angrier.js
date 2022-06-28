import React from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {styles} from '../../WarmupGreatScreens/styles';
import {fullScreen, Padding, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Angrier = ({setScreen}) => {
  const {container, redSubtitle, redTitle, subtitle, background, content} =
    styles();
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
          <Text style={redTitle}>Great</Text>
          <Text style={redSubtitle}>Now let's warm up our voice. </Text>
        </View>
        <View style={content}>
          <View
            style={{
              width: '100%',
              height: deviceInfo.small_screen ? 150 : 250,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: 'rgba(0, 0, 0, 0.13)',
              borderWidth: 0.5,
              borderRadius: 8,
              zIndex: 1,
              padding: 20,
              marginVertical: Sizes.size20,
            }}>
            <Image
              source={require('../../../../../assets/Image/lessons/lesson3/Voice.png')}
              style={{
                width: fullScreen.width - 40,
                height: Sizes.size50,
                marginTop: 10,
              }}
              resizeMode="contain"
            />
            <Text style={subtitle}>
              This last time, see if you can say the alphabet getting angrier
              and angrier. Let it all out!
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: deviceInfo.small_screen ? Sizes.size80 : Sizes.size40,
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Button
            text="Ok, I’m ready"
            onPress={() =>
              navigation.navigate('SayA_Z_Video', {screen: 'a_z_2'})
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

export default Angrier;
