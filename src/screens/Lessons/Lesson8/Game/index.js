import React, {useState} from 'react';
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {styles} from './styles';
import {BorderStyles, Colors, Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Game8 = () => {
  const [values, setValues] = useState({
    place: '',
    emotion: '',
    action: '',
    emotion_2: '',
    action_2: '',
  });
  let [empty, setEmpty] = useState(false);
  const emptyValues = () =>
    Object.values(values).map(key => {
      if (key === '') {
        setEmpty(true);
      } else {
        setEmpty(false);
        setScreen(false);
      }
    });
  const [first_screen, setScreen] = useState(true);
  const navigation = useNavigation();
  const {title, background, err_text} = styles();
  return (
    <>
      {first_screen ? (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ImageBackground
            style={background}
            source={require('../../../../assets/Image/background/lesson8/playGameBg.png')}>
            <Header onPress={() => navigation.goBack()} rightIcon={true} />
            <View style={{flex: 2}}>
              <Text style={title}>Fill in the blanks:</Text>
              <Text>One day while standing in the</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{
                    padding: Sizes.size10,
                    backgroundColor: Colors.white,
                    borderWidth: BorderStyles.widths.border2,
                    borderColor: BorderStyles.color.gray,
                    borderRadius: BorderStyles.radius.xs,
                    marginVertical: Sizes.size20,
                    paddingRight: 100,
                  }}
                  multiline
                  textAlignVertical="top"
                  placeholder="type in emotion"
                  onChangeText={text => setValues({...values, place: text})}
                  value={values.place}
                />
                <Text>I felt </Text>
              </View>
              <Text>someone standing too close to me. </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text>I was feeling very</Text>

                <TextInput
                  style={{
                    padding: Sizes.size10,
                    backgroundColor: Colors.white,
                    borderWidth: BorderStyles.widths.border2,
                    borderColor: BorderStyles.color.gray,
                    borderRadius: BorderStyles.radius.xs,
                    marginVertical: Sizes.size20,
                    paddingRight: 100,
                  }}
                  multiline
                  textAlignVertical="top"
                  placeholder="Type in a place"
                  onChangeText={text => setValues({...values, emotion: text})}
                  value={values.emotion}
                />
              </View>
              <Text>
                I wasn’t sure what to do. Now that I think about it I could have
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TextInput
                style={{
                  padding: Sizes.size10,
                  backgroundColor: Colors.white,
                  borderWidth: BorderStyles.widths.border2,
                  borderColor: BorderStyles.color.gray,
                  borderRadius: BorderStyles.radius.xs,
                  marginVertical: Sizes.size20,
                  paddingHorizontal: 50,
                }}
                onChangeText={text => setValues({...values, action: text})}
                value={values.action}
                multiline
                textAlignVertical="top"
                placeholder="type in action"
              />
              <Text> The next time </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text>I am feeling </Text>

              <TextInput
                style={{
                  padding: Sizes.size10,
                  backgroundColor: Colors.white,
                  borderWidth: BorderStyles.widths.border2,
                  borderColor: BorderStyles.color.gray,
                  borderRadius: BorderStyles.radius.xs,
                  marginVertical: Sizes.size20,
                  paddingRight: 100,
                }}
                onChangeText={text => setValues({...values, emotion_2: text})}
                value={values.emotion_2}
                multiline
                textAlignVertical="top"
                placeholder="type in emotion"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text>I plan to</Text>

              <TextInput
                style={{
                  backgroundColor: Colors.white,
                  borderWidth: BorderStyles.widths.border2,
                  borderColor: BorderStyles.color.gray,
                  borderRadius: BorderStyles.radius.xs,
                  marginVertical: Sizes.size20,
                  paddingRight: 100,

                  alignItems: 'center',
                }}
                onChangeText={text => setValues({...values, action_2: text})}
                value={values.action_2}
                multiline
                textAlignVertical="top"
                placeholder="type in action"
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginTop: deviceInfo.small_screen
                  ? Sizes.size20
                  : Sizes.size40,
              }}>
              {empty ? (
                <Text style={err_text}>Please Fill in the blanks</Text>
              ) : null}
              <Button
                text="Next"
                onPress={() => {
                  emptyValues();
                }}
                containerStyle={{marginBottom: 50}}
              />
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ImageBackground
            style={background}
            source={require('../../../../assets/Image/background/lesson8/playGameBg.png')}>
            <Header onPress={() => navigation.goBack()} rightIcon={true} />
            <View style={{flex: 2}}>
              <Text style={title}>Fill in the blanks:</Text>
              <Text>
                One day while standing in the {values.place} I felt someone
                standing too close to me. I was feeling very {values.emotion} I
                wasn’t sure what to do. Now that I think about it I could have{' '}
                {values.action}. The next time I am feeling {values.emotion_2} I
                plan to {values.action_2}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginTop: deviceInfo.small_screen
                  ? Sizes.size20
                  : Sizes.size40,
              }}>
              <Button
                text="Next"
                onPress={() => navigation.navigate('HowDidFell')}
                containerStyle={{marginBottom: 50}}
              />
            </View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default Game8;
