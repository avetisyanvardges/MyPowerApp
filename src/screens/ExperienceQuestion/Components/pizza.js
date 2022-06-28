import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import Background from '../../../assets/Image/background/questionBg.png';
import {styles} from '../styles';
import {Button} from '../../../components/Button';
import {Toast} from '../../../components/Toast';
import {vScale} from '../../../assets/RootStyles/Scale';

const PizzaScreen = ({setScreen}) => {
  const {
    background,
    top_content,
    title,
    toasts_screen_btn,
    sub_title,
    bottom_content,
  } = styles();
  const [delicious, setDelicious] = useState(false);

  useEffect(() => {
    if (delicious) {
      setTimeout(() => {
        setScreen('pet');
      }, 500);
    }
  }, [delicious]);

  return (
    <ImageBackground style={background} source={Background}>
      {delicious && <Toast text="Delicious" />}
      <View style={top_content}>
        <Text style={sub_title}>
          How about telling us a little bit about yourself?
        </Text>
        <Text style={title}>What is your favorite pizza topping?</Text>
      </View>
      <View style={bottom_content}>
        <ScrollView>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={toasts_screen_btn}
              text={'Onions'}
              onPress={() => setDelicious('delicious')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={toasts_screen_btn}
              text={'Mushrooms'}
              onPress={() => setDelicious('delicious')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={toasts_screen_btn}
              text={'Olives'}
              onPress={() => setDelicious('delicious')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={toasts_screen_btn}
              text={'Pepperoni'}
              onPress={() => setDelicious('delicious')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={toasts_screen_btn}
              text={'Pineapple'}
              onPress={() => setDelicious('delicious')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={toasts_screen_btn}
              text={'Hate Pizza!'}
              onPress={() => setDelicious('delicious')}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default PizzaScreen;
