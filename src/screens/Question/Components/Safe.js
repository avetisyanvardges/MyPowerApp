import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, Text, View} from 'react-native';
import Background from '../../../assets/Image/background/questionBg.png';
import {styles} from '../../Question/styles';
import {Button} from '../../../components/Button';
import {vScale} from '../../../assets/RootStyles/Scale';
import {Sizes} from '../../../assets/RootStyles';
import {useNavigation} from '@react-navigation/native';

const SafeScreen = ({setScreen}) => {
  const navigation = useNavigation();

  const {background, top_content, title, subtitle, bottom_content} = styles();
  const text =
    'we’re here is to help you raise your awareness of how comfortable you feel, both inside yourself and in your surroundings.\n' +
    '\n' +
    'So, to start that process we’d like to ask you…';
  const backAction = () => {
    navigation.navigate('Welcome');
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
      <View style={top_content}>
        <Text style={title}>One of the reasons. . .</Text>
        <Text style={subtitle}>{text}</Text>
      </View>
      <View style={bottom_content}>
        <Text style={title}>Are you feeling safe?</Text>
        <View style={{marginVertical: vScale(10), marginTop: 20}}>
          <Button
            text={'Yes'}
            onPress={() => setScreen('yes')}
            containerStyle={{height: Sizes.size80, justifyContent: 'center'}}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={{height: Sizes.size80, justifyContent: 'center'}}
            text={'No'}
            onPress={() => setScreen('no')}
          />
        </View>

        <View>
          <Button
            containerStyle={{height: Sizes.size80, justifyContent: 'center'}}
            text={'No Sure'}
            onPress={() => setScreen('noSure')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SafeScreen;
