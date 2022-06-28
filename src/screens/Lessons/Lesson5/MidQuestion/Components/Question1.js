import React, {useState} from 'react';
import {
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../MidQuestion/styles';
import {Padding} from '../../../../../assets/RootStyles';
import {vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {Bulb} from '../../../../../assets/Svgs';

const Question1 = ({setScreen}) => {
  const {
    container,
    title,
    subtitle,
    background,
    questionContainer,
    question_btns,
    modalView,
    gotIt,
  } = styles();
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson5/affirmationBg.png')}>
        <Text style={title}>Awesome. How did that feel?</Text>
        <View style={questionContainer}>
          <View style={{marginVertical: vScale(10), marginTop: 20}}>
            <Button
              containerStyle={question_btns}
              text={'I think I got it'}
              onPress={() => setScreen('question2')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'I’d like to do it again'}
              onPress={() => setScreen('question2')}
            />
          </View>
          <View style={{marginVertical: vScale(10)}}>
            <Button
              containerStyle={question_btns}
              text={'Not Sure'}
              onPress={() => setScreen('question2')}
            />
          </View>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={{backgroundColor: 'rgba(17,17,17,0.3)', flex: 1}}>
            <View style={modalView}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Bulb width={100} height={100} />
                <Text style={title}>Find your recordings</Text>
              </View>
              <Text style={subtitle}>
                You can always go back to your recordings, selfies, vocal
                exercises and more in your profile tab at the navigation menu
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={gotIt}>Got it! Thanks</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

export default Question1;
