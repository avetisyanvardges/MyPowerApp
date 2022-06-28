import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Header from '../../lesson1/components/header';
import {fullScreen, Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';

const RecordVoice = ({navigation}) => {
  const {container, title_container, record_title, text_container, subtitle} =
    styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson1/recordHorBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={record_title}>Now let’s add voice!</Text>
        </View>
        <View style={text_container}>
          <Image
            source={require('../../../../assets/Image/lessons/lesson3/Voice.png')}
            style={{
              width: fullScreen.width - 40,
              height: Sizes.size80,
              marginBottom: 30,
            }}
            resizeMode="contain"
          />
          <Text style={subtitle}>
            You might want to find a private space where you can make noise
            during these lessons. This symbol will let you know when you will be
            using your loud voice. We hope you learn to enjoy making noise!
          </Text>
        </View>
        {/*<Footer*/}
        {/*onPress={() => {*/}
        {/*navigation.navigate('Workout', {screen: 'no'});*/}
        {/*}}*/}
        {/*/>*/}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginVertical: Sizes.size40,
            alignItems: 'center',
          }}>
          <Button
            containerStyle={{width: 400}}
            text="Next"
            onPress={() => {
              navigation.navigate('Workout', {screen: 'no'});
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RecordVoice;
