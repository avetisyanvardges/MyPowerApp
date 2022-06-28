import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles';
import Header from '../../../../../components/Header';
import {SvgXml} from 'react-native-svg';
import refresh from '../../../../../assets/Svgs/lesson_1/rotate-ccw.svg';
import {hScale} from '../../../../../assets/RootStyles/Scale';
import Clap from '../../../../../assets/Svgs/clap.svg';
import {useNavigation} from '@react-navigation/native';
import play_rec from '../../../../../assets/Image/lessons/lesson6/rec_play_dark.svg';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';

const RecordEndScreen = ({setScreen}) => {
  const navigation = useNavigation();
  const {container, title, record_text} = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../../assets/Image/background/lesson3/bitBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
          <SvgXml xml={Clap} width={hScale(150)} height={hScale(70)} />
          <Text style={title}>Good Job, Yudit!</Text>
          <SvgXml xml={play_rec} width={Sizes.size300} height={Sizes.size200} />

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SvgXml xml={refresh} width={Sizes.size30} height={Sizes.size25} />
            <Text style={record_text}>Record again</Text>
          </TouchableOpacity>
          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size80 : Sizes.size400,
              justifyContent: 'flex-end',
              width: 340,
            }}>
            <Button
              style={{backgroundColor: '#fff'}}
              text="Next"
              onPress={() => setScreen('finish')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RecordEndScreen;
