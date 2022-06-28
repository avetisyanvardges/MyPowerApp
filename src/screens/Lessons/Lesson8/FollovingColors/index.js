import React from 'react';
import {ImageBackground, ScrollView, Text, TextInput, View} from 'react-native';

import {styles} from './styles';
import {BorderStyles, Colors, Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {SvgXml} from 'react-native-svg';
import Blue from '../../../../assets/Image/background/lesson8/BlueIndicator.svg';
import Yellow from '../../../../assets/Image/background/lesson8/YellowIndicator.svg';
import Green from '../../../../assets/Image/background/lesson8/GreenIndicator.svg';

const FollovingColors = ({setScreen}) => {
  const {container, title, background, subtitle} = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <ScrollView>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <Text style={title}>
          Name 5 things that you can see right now in the following colors:
        </Text>
        <View style={{marginTop: vScale(16), zIndex: 999}}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <SvgXml
              xml={Blue}
              width={Sizes.size15}
              height={Sizes.size15}
              style={{marginRight: 15}}
            />
            <Text style={subtitle}>Blue</Text>
          </View>

          <TextInput
            style={{
              padding: Sizes.size10,
              backgroundColor: Colors.white,
              borderWidth: BorderStyles.widths.border2,
              borderColor: BorderStyles.color.gray,
              borderRadius: BorderStyles.radius.xs,
              minHeight: Sizes.size50,
              maxHeight: Sizes.size100,
              marginVertical: Sizes.size20,
            }}
            multiline
            textAlignVertical="top"
            placeholder="Write here"
          />
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <SvgXml
              xml={Yellow}
              width={Sizes.size15}
              height={Sizes.size15}
              style={{marginRight: 15}}
            />
            <Text style={subtitle}>Yellow</Text>
          </View>
          <TextInput
            style={{
              padding: Sizes.size10,
              backgroundColor: Colors.white,
              borderWidth: BorderStyles.widths.border2,
              borderColor: BorderStyles.color.gray,
              borderRadius: BorderStyles.radius.xs,
              minHeight: Sizes.size50,
              maxHeight: Sizes.size100,
              marginVertical: Sizes.size20,
            }}
            multiline
            textAlignVertical="top"
            placeholder="Write here"
          />
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <SvgXml
              xml={Green}
              width={Sizes.size15}
              height={Sizes.size15}
              style={{marginRight: 15}}
            />
            <Text style={subtitle}>Green</Text>
          </View>
          <TextInput
            style={{
              padding: Sizes.size10,
              backgroundColor: Colors.white,
              borderWidth: BorderStyles.widths.border2,
              borderColor: BorderStyles.color.gray,
              borderRadius: BorderStyles.radius.xs,
              minHeight: Sizes.size50,
              maxHeight: Sizes.size100,
              marginVertical: Sizes.size20,
            }}
            multiline
            textAlignVertical="top"
            placeholder="Write here"
          />
        </View>
        <View
          style={{
            flex: 1,
            marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size40,
            justifyContent: 'flex-end',
          }}>
          <Button
            text="Next"
            onPress={() => navigation.navigate('RepeatWarmup8')}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default FollovingColors;
