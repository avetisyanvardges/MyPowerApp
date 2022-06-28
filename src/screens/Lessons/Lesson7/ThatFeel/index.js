import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import {Bulb} from '../../../../assets/Svgs';
import {Colors, FontStyle, Sizes} from '../../../../assets/RootStyles';

const ThatFeel = ({setScreen}) => {
  const {title, background, questionContainer, question_btns} = styles();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson7/BG2.png')}>
      <View style={{paddingVertical: 20}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <Text style={title}>How did that feel?</Text>
      <View style={questionContainer}>
        <View style={{marginVertical: vScale(10), marginTop: 20}}>
          <Button
            containerStyle={question_btns}
            text={'Great! Got it!'}
            onPress={() => navigation.navigate('PalmHellKnee')}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Not feeling it'}
            onPress={() => setModalVisible(true)}
          />
        </View>
        <View style={{marginVertical: vScale(10)}}>
          <Button
            containerStyle={question_btns}
            text={'Not Sure'}
            onPress={() => navigation.navigate('Textbox_feel')}
          />
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={{backgroundColor: 'rgba(17,17,17,0.3)', flex: 1}}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'white',
              shadowColor: '#000',
              width: '100%',
              height: Sizes.size250,
              padding: Sizes.size30,
            }}>
            <Text style={title}>That’s ok.</Text>
            <Text style={{...FontStyle.body_1, marginTop: Sizes.size10}}>
              Would you like to try repeating the exercise?
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
                marginTop: Sizes.size20,
              }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text
                  style={{
                    color: Colors.primary_red,
                    fontSize: Sizes.size18,
                    lineHeight: Sizes.size27,
                    fontWeight: '600',
                  }}>
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Warmup')}>
                <Text
                  style={{
                    color: Colors.primary_red,
                    fontSize: Sizes.size18,
                    lineHeight: Sizes.size27,
                    fontWeight: '600',
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default ThatFeel;
