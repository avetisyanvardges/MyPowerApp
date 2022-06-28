import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../SelfRecordingActive/styles';
import {
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import RadioForm from 'react-native-simple-radio-button';

const SelfRecordingActive = ({setScreen, setKey, key}) => {
  const {container, skip_content, background, subtitle} = styles();
  const navigation = useNavigation();
  const [sel_value, setSelected] = useState(0);
  const [Data] = useState([
    {
      value: 0,
      label: 'Hey, time for me to go. Thanks for inviting me.',
      key: 'hey',
    },
    {
      value: 1,
      label: 'I am going home now. Thanks.',
      key: 'home',
    },
    {
      value: 2,
      label: 'I am leaving now and I don’t need to explain.',
      key: 'explain',
    },
    {
      value: 3,
      label: 'We are done. I am leaving.',
      key: 'done',
    },
    {
      value: 4,
      label: 'I am leaving.',
      key: 'leaving',
    },
    {
      value: 5,
      label: 'Let me go.',
      key: 'let_me',
    },
    {
      value: 6,
      label: 'LET! ME! GO!',
      key: 'LET_ME_GO',
    },
  ]);

  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ScrollView scrollEnabled={fullScreen.height < 800 ? true : false}>
        <ImageBackground
          style={background}
          source={require('../../../../../assets/Image/background/lesson3/bitBg.png')}>
          <View
            style={{
              flex: 1,
              marginTop: deviceInfo.small_screen ? Sizes.size30 : Sizes.size50,
            }}>
            <Text style={subtitle}>
              How about recording your favorite line from this exercise?
            </Text>
            <Text style={subtitle}>
              Please pick your favorite line for leaving that you would like to
              record.
            </Text>
            <RadioForm
              style={{
                flex: 1,
                justifyContent: 'space-around',
                marginVertical: Sizes.size30,
              }}
              labelStyle={{...FontStyle.body_2}}
              animation
              radio_props={Data}
              initial={sel_value}
              onPress={setSelected}
              buttonColor={'#AAAAAA'}
              selectedButtonColor={'#AAAAAA'}
              buttonSize={10}
              buttonOuterSize={20}
            />

            <View
              style={{
                height: deviceInfo.small_screen ? Sizes.size80 : Sizes.size0,
                backgroundColor: 'red',
                justifyContent: 'flex-start',
              }}>
              <Button
                text="Next"
                onPress={() =>
                  navigation.navigate('RECORD', {
                    key: Data[sel_value].key,
                  })
                }
              />
            </View>
            <View style={skip_content}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SelfRecordingActive');
                }}>
                <Text style={subtitle}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default SelfRecordingActive;
