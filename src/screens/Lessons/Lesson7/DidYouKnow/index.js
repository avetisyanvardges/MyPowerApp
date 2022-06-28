import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Book from '../../../../assets/Svgs/lesson_1/book.svg';
import {SvgXml} from 'react-native-svg';
import {hScale} from '../../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../../components/Header';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Know7 = () => {
  const navigation = useNavigation();

  const {container, title, title_container, text} = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      style={container}
      source={require('../../../../assets/Image/background/lesson1/knowCenterBg.png')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <View>
          <SvgXml
            xml={Book}
            width={hScale(100)}
            height={hScale(100)}
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              left: '40%',
              zIndex: 2,
            }}
          />
          <Text style={title}>Did you know?</Text>
          <View style={title_container}>
            <Text style={text}>
              According to research, women will wait up to 1hr 15 minutes to
              leave a party in order not to leave alone. What we know, however,
              is that there is more of a chance that something will happen at
              that party, than on the way home. And yet, we are clearly more
              afraid of the unknown stranger than familiars. We are not saying
              it is time to start being terrified of everyone or paranoid. What
              we are saying is that it's important to have the tools to handle
              various situations so you can make your own choices.
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginVertical: deviceInfo.small_screen
                ? Sizes.size10
                : Sizes.size70,
            }}>
            <Button
              text="Next"
              onPress={() => navigation.navigate('SuccessStory7')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Know7;
