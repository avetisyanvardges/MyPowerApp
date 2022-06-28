import React from 'react';
import Background from '../../../../../assets/Image/background/commintmentBg.png';

import {ImageBackground, Keyboard, Text, TextInput, TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
import {styles} from '../../Story/styles';
import {View} from 'react-native-animatable';
import {Button} from '../../../../../components/Button';
import {BorderStyles, Colors, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';

const ReadAgain = ({setScreen}) => {
  const {background,top_content,center_content,bottom_content, title} = styles();
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior={'height'}  style={{flex:1}}>
    <ImageBackground style={background} source={Background}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>How did that feel? Share your thoughts</Text>
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
            placeholder="Write here how that felt"
          />
        </View>
      <View
        style={bottom_content}>
        <Button
          text={'Next'}
          onPress={() => setScreen('clothesline')}
        />
      </View>
    </ImageBackground>
          </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  );
};

export default ReadAgain;
