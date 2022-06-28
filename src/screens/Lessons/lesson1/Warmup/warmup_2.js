import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from './styles';
import {BorderStyles, Colors, fullScreen} from '../../../../assets/RootStyles';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';
import Header from '../components/header';
import Footer from '../components/footer';
import background from '../../../../assets/Image/background/lesson1/warmup_1.png';
import {useDispatch} from 'react-redux';
import {makeAction} from '../../../../store/makeAction';
import {SET_THINK_TEXT} from '../../../../types/LESSON_1';

const Warmup_2 = ({navigation}) => {
  const dispatch = useDispatch();
  const [think_text, setThinkText] = useState('');
  const {
    container,
    content,
    title_container,
    warmup_title,
    text_container,
    text,
  } = styles();
  const backAction = () => {
    navigation.navigate('Video_init', {screen: 'init'});
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const next_press = () => {
    if (think_text) {
      dispatch(makeAction(SET_THINK_TEXT, think_text));
    }
    navigation.navigate('Warmup_3');
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <Header onPress={() => navigation.goBack()} />

        <View style={content}>
          <View>
            <View style={title_container}>
              <Text style={warmup_title}>THINK</Text>
            </View>
            <View style={text_container}>
              <Text style={text}>
                Write a description of the last room that you were in. Include
                at least 5 details including a color you saw, a sound you heard,
                a texture you felt, a smell you recall and one thing you felt
                while you were there.
              </Text>
            </View>
            <View style={{marginTop: vScale(16), zIndex: 999}}>
              <TextInput
                style={{
                  padding: hScale(10),
                  backgroundColor: Colors.white,
                  borderWidth: BorderStyles.widths.border2,
                  borderColor: BorderStyles.color.gray,
                  borderRadius: BorderStyles.radius.xs,
                  minHeight: vScale(130),
                  maxHeight: vScale(250),
                  justifyContent: 'flex-start',
                }}
                onChangeText={setThinkText}
                multiline
                textAlignVertical="top"
                placeholder="Write here"
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={background}
          style={{
            width: fullScreen.width,
            height: fullScreen.height,
            position: 'absolute',
            zIndex: 0,
            top: fullScreen.height / 2,
          }}
        />
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Footer onPress={next_press} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Warmup_2;
