import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Background from '../../../../../assets/Image/background/questionBg.png';
import {styles} from '../../Question9/styles';
import {Button} from '../../../../../components/Button';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import Header from '../../../../../components/Header';

const SafeScreen9 = ({setScreen}) => {
  const {background, title, top_content, center_content} = styles();

  return (
    <ImageBackground style={background} source={Background}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>Check in with yourself.</Text>
      </View>
      <View style={center_content}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{marginVertical: vScale(10), marginTop: 20}}>
            <Button
              containerStyle={{
                width: '100%',
                height: 85,
                justifyContent: 'center',
              }}
              text={'I’m good!'}
              onPress={() => setScreen('technique')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={{
                width: '100%',
                height: 85,
                justifyContent: 'center',
              }}
              text={'OK'}
              onPress={() => setScreen('technique')}
            />
          </View>

          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={{
                width: '100%',
                height: 85,
                justifyContent: 'center',
              }}
              text={'Not sure.'}
              onPress={() => setScreen('help')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={{
                width: '100%',
                height: 85,
                justifyContent: 'center',
              }}
              text={'Not good.'}
              onPress={() => setScreen('help')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SafeScreen9;
