import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {Padding, Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const SuccessStory8 = () => {
  const {container, title, subtitle, sub_title, background} = styles();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          style={background}
          source={require('../../../../assets/Image/background/lesson8/lessoStoryn.png')}>
          <View style={{paddingHorizontal: Padding.horizontal}}>
            <Header onPress={() => navigation.goBack()} />
          </View>
          <Text style={title}>I Promise I will Tell!</Text>
        </ImageBackground>
        <View style={container}>
          <Text style={sub_title}>
            When I was still a teenager, my stepfather brought his friend
            into my bedroom. They sat down on my bed. I asked them to leave,
            like I had learned in class. They did not listen to me. Then I told
            them, “Whatever you do to me, I promise you, I will tell. I will
            tell everyone what happens here tonight!” They both left without
            touching me.
          </Text>
        </View>
        {/*</ScrollView>*/}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginVertical: deviceInfo.small_screen
              ? Sizes.size20
              : Sizes.size240,
            paddingHorizontal: 20,
          }}>
          <Button text="Next" onPress={() => navigation.navigate('QuiqChek')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SuccessStory8;
