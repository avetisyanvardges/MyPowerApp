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

const Know8 = () => {
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
              Sharing stories is important! “Human beings lead storied lives
              (Sarbin, 1986), understand their lives through stories (Frank,
              1995), form their identities through stories (McAdams, 2001, 2006)
              and learn about the world and culture through the narrative mode
              of knowing
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginVertical: deviceInfo.small_screen
                ? Sizes.size10
                : Sizes.size160,
            }}>
            <Button
              text="Next"
              onPress={() => navigation.navigate('SuccessStory8')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Know8;
