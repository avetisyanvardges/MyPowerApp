import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../SafetyStance/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {hScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const PreVideo = () => {
  const {container, title, background} = styles();
  const navigation = useNavigation();
  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson1/vector.png')}>
        <View style={{alignItems: 'center', marginTop: hScale(200)}}>
          <Text style={title}>Now let’s see what that looks like!</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: Sizes.size40,
          }}>
          <Button
            text="Next"
            onPress={() => navigation.navigate('Workout', {screen: 'safety'})}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default PreVideo;
