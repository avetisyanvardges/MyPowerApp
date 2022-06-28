import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {Padding, Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const SuccessStory7 = () => {
  const {container, title, subtitle, sub_title, background} = styles();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          style={background}
          source={require('../../../../assets/Image/background/lesson7/story7.png')}>
          <View style={{paddingHorizontal: Padding.horizontal}}>
            <Header onPress={() => navigation.goBack()} />
          </View>
          <Text style={title}> The Stiletto Stalker</Text>
        </ImageBackground>
        <View style={container}>
          <Text style={sub_title}>
            I was walking home from a party. I was dressed up in stiletto heels
            and a tight skirt. Suddenly, a man attacked me from behind with a
            bear hug. I remembered the foot stomp strike that I had learned in
            an ESD class. I stomped on his foot as hard as I could. The heel of
            my shoe broke off and got lodged in his foot. I ran away. The police
            identified the guy when he showed up in the emergency room to have
            the stiletto heel removed from his foot.
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
          <Button text="Next" onPress={() => navigation.navigate('Outro')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SuccessStory7;
