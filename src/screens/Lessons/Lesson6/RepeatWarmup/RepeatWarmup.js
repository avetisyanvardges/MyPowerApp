import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './styles';
import {Padding, Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import Band from '../../../../assets/Image/lessons/lesson6/TheBandTorso.svg';

const RepeatWarmup = () => {
  const {container, title, background, subtitle, skip_content} = styles();
  const navigation = useNavigation();
  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../assets/Image/background/lesson4/warmupBg3x.png')}>
        <ScrollView>
          <SvgXml
            style={{marginHorizontal: 20}}
            xml={Band}
            width={Sizes.size350}
            height={Sizes.size200}
          />
          <Text style={title}> Good Job Yudit</Text>
          <Text style={subtitle}>
            How about doing it again, one time each, and this time, turn and
            walk to your nearest exit? Walk back for the next, or just keep
            walking. Up to you!
          </Text>
          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size150 : Sizes.size200,
              justifyContent: 'flex-end',
            }}>
            <Button
              text="Repeat"
              onPress={() => navigation.navigate('AudioActive')}
            />
          </View>
          <View style={skip_content}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SelfRecording');
              }}>
              <Text style={subtitle}>Skip</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default RepeatWarmup;
