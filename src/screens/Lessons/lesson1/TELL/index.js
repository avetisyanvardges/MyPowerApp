import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../components/header';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';
import {deviceInfo} from '../../../../assets/deviceInfo';

const TELL = ({navigation}) => {
  const {container, title_container, warmup_title, text_container, text} =
    styles();
  const backAction = () => {
    navigation.navigate('FIGHT');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson1/YellBG.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={warmup_title}>TELL</Text>
        </View>
        <View style={text_container}>
          <Text style={text}>
            One of the important messages in an ESD in-person course is that we
            are in this together. We create a supportive circle. We stand on the
            line, paying attention to each student, as they demonstrate their
            technique, and we cheer them on. We come together in a circle to
            check-in, share, and at the end of a class, check-out. Through this
            app we are creating a virtual community. We want you to know that we
            are here to cheer you on as you progress through the course.
            Building community that is supportive and safe to share with is
            important. TELL is also about reporting. Whom can I TELL? Whom
            should I TELL? And do I WANT to tell? My story. My life. My right to
            decide what I want to do.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: 'flex-end',
          marginBottom: deviceInfo.small_screen ? Sizes.size20 : Sizes.size50,
        }}>
        <Button
          text="Next"
          onPress={() => {
            navigation.navigate('GameInitial');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default TELL;
