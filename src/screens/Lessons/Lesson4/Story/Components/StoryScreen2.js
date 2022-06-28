import React, {useEffect} from 'react';
import Background from '../../../../../assets/Image/background/commintmentBg.png';

import {BackHandler, ImageBackground, Keyboard, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import {styles} from '../../Story/styles';
import {View} from 'react-native-animatable';
import {Button} from '../../../../../components/Button';
import {BorderStyles, Colors, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const StoryScreen2 = ({setScreen}) => {
  const {background,top_content,center_content,bottom_content, title} = styles();
  const navigation = useNavigation();
    const backAction = () => {
        setScreen('story1');
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior={'height'}  style={{flex:1}}>

              <ImageBackground style={background} source={Background}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>What do you think?</Text>
      </View>
        <View style={center_content}>
          <TextInput
            style={{
              padding: Sizes.size10,
              backgroundColor: Colors.white,
              borderWidth: BorderStyles.widths.border2,
              borderColor: BorderStyles.color.gray,
              borderRadius: BorderStyles.radius.xs,
              minHeight: Sizes.size150,
              maxHeight: Sizes.size250,
              justifyContent: 'flex-start',
            }}
            multiline
            textAlignVertical="top"
            placeholder="Write here"
          />
        </View>

      <View
        style={bottom_content}>
        <Button
          text={'Next'}
          onPress={() => setScreen('story3')}
        />
      </View>
    </ImageBackground>
          </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  );
};

export default StoryScreen2;
