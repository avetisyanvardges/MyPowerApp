import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {deviceInfo} from '../../../../assets/deviceInfo';

const YesScreen8 = ({navigation}) => {
  const {skip_content, title, subtitle, background} = styles();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <View>
        <Header onPress={() => navigation.goBack()} />
      </View>
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <Text style={title}>You answered yes</Text>
        <Text style={subtitle}>Now, you can share it with yourself.</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
        }}>
        <Button
          text="Start Recording"
          onPress={() => navigation.navigate('RecordAudio_2')}
        />
        <View style={skip_content}>
          <TouchableOpacity onPress={() => navigation.navigate('Formula')}>
            <Text style={subtitle}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default YesScreen8;
