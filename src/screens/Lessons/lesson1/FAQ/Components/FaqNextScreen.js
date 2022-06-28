import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from '../styles';
import Header from '../../components/header';
import {Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';

const FaqNextScreen = ({setScreen}) => {
  const {container, faqText, text_container, record_text, text, skip_content} =
    styles();
  const backAction = () => {
    setScreen('faq');
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
      source={require('../../../../../assets/Image/background/lesson1/recordBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={text_container}>
          <Text style={text}>
            During the next lessons you will see all sorts of myths, facts, and
            success stories.{'\n \n'} Myths and facts are in a section called
            "Did you know?" They are usually related to research, the majority
            of which can be found in the resource library, and articles of
            interest.{'\n \n'}The success stories have been collected over the
            past 50 years of teaching Self-Defense. All of the stories shared in
            this app are based on true stories as reported by students and
            friends, and have been edited to maintain anonymity.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: Sizes.size50,
        }}>
        <Button
          text="Next"
          onPress={() => {
            setScreen('know');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default FaqNextScreen;
