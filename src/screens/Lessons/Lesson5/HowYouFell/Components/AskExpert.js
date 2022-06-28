import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../HowYouFell/styles';
import Header from '../../../../../components/Header';
import {Button} from '../../../../../components/Button';
import {Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {useNavigation} from '@react-navigation/native';

const AskExpert = () => {
  const {subtitle, background, text, skip_content, title} = styles();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson5/lesson5Exer.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />

      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={title}>Ask the Expert:</Text>
        </View>
        <View>
          <Text style={subtitle}>
            A"If I am being attacked should I yell fire?" We don't think so, and
            here's why: First, if there really is a fire, most people would run
            away, rather than towards. Second, it is just another way of us
            reinforcing that we don't really matter. It's about believing that
            if I yelled no one would come unless I yelled fire. Personally I
            like a blood-curdling "Tell this person to stop bothering me!!!" I
            am a big believer in saying what you mean, and meaning what you say.
          </Text>

          <View
            style={{
              width: deviceInfo.small_screen ? 200 : 300,
              height: deviceInfo.small_screen ? 100 : 150,
              backgroundColor: '#BD3150',
              marginVertical: 30,
              marginLeft: 20,
              borderRadius: 16,
            }}>
            <View
              style={{
                flex: 1,
                width: deviceInfo.small_screen ? 200 : 300,
                height: deviceInfo.small_screen ? 100 : 150,
                backgroundColor: '#fff',
                marginHorizontal: 20,
                borderRadius: 16,
                position: 'absolute',
                top: 30,
                zIndex: 1,
                marginBottom: 20,
                borderWidth: 1,
                borderColor: 'rgba(0, 0, 0, 0.1)',
              }}>
              <Image
                style={{
                  width: deviceInfo.small_screen ? 200 : 300,
                  height: deviceInfo.small_screen ? 100 : 150,
                }}
                source={require('../../../../../assets/Image/lessons/lesson1/expert.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            height: deviceInfo.small_screen ? Sizes.size250 : Sizes.size200,
            justifyContent: 'center',
          }}>
          <Button
            text="Ask an exper"
            onPress={() => {
              navigation.navigate('Know5');
            }}
          />
          <View style={skip_content}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Know5');
              }}>
              <Text style={subtitle}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AskExpert;
