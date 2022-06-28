import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './styles';
import {
  BorderStyles,
  Colors,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import Band from '../../../../assets/Image/lessons/lesson6/TheBandTorso.svg';

const AfterGame = () => {
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
            How about writing a bit about how it felt doing this lesson?
          </Text>
          <View style={{marginTop: vScale(16), zIndex: 999}}>
            <TextInput
              style={{
                padding: Sizes.size10,
                backgroundColor: Colors.white,
                borderWidth: BorderStyles.widths.border2,
                borderColor: BorderStyles.color.gray,
                borderRadius: BorderStyles.radius.xs,
                minHeight: Sizes.size150,
                maxHeight: Sizes.size250,
              }}
              multiline
              textAlignVertical="top"
              placeholder="Write here"
            />
          </View>
          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size150 : Sizes.size200,
              justifyContent: 'center',
            }}>
            <Button text="Next" onPress={() => navigation.navigate('Know6')} />
          </View>
          <View style={skip_content}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Know6');
              }}>
              <Text style={subtitle}>Skip</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AfterGame;
