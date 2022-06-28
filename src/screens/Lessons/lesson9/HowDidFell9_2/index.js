import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Background from '../../../../assets/Image/background/questionBg.png';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import {vScale} from '../../../../assets/RootStyles/Scale';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const HowDidFell9_2 = ({setScreen}) => {
  const navigation = useNavigation();

  const {background, title, top_content, center_content} = styles();

  return (
    <ImageBackground style={background} source={Background}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>How did that feel? </Text>
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
              text={'Great!'}
              onPress={() => navigation.navigate('Warmup_9')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={{
                width: '100%',
                height: 85,
                justifyContent: 'center',
              }}
              text={'Good.'}
              onPress={() => navigation.navigate('Warmup_9')}
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
              text={'Couldn’t do it.'}
              onPress={() => setScreen('help')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HowDidFell9_2;
