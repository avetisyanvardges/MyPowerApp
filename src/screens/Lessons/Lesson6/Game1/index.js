import React, {useState} from 'react';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {useSelector} from 'react-redux';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import RUN from '../../../../assets/Image/lessons/lesson6/runSvg2x.svg';
import RadioForm from 'react-native-simple-radio-button';
import {Button} from '../../../../components/Button';

const Game1 = ({navigation}) => {
  const {subtitle, modalView, title, runBtnContent} = styles();
  const game = useSelector(store => store.lesson_6.Games);
  const [current_scene, setCurrent] = useState(game.Bar);
  const [play_count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const radio_props = [
    {label: 'The person seems creepy', value: 0},
    {label: ' They said something that was a red flag', value: 1},
    {label: 'Not sure', value: 2},
  ];
  const next_scene = () => {
    switch (current_scene) {
      case game.Bar:
        return setCurrent(game.Electric);
      case game.Electric:
        return setCurrent(game.Tonight);
      case game.Tonight:
        return navigation.navigate('AfterGame');
    }
  };

  const repeat = async () => {
    if (play_count < 1) {
      await setCount(play_count + 1);
      await setCurrent('');
      await setCurrent(current_scene);
    }
  };

  return (
    <View>
      <VerticalVideo
        videoUrl={current_scene}
        closePress={() => navigation.navigate('AfterGame')}
        sheetHeight="30%"
        resizeMode="cover"
        progressbar={true}
        next_scene={next_scene}
        video_game={true}
        repeat={repeat}
      />
      {play_count === 1 ? (
        <View
          style={{zIndex: 999, position: 'absolute', bottom: 100, right: 120}}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <View style={modalVisible ? runBtnContent : null}>
              <SvgXml xml={RUN} width={150} height={150} />
            </View>
          </TouchableOpacity>
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View
              style={{
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={modalView}>
                <Text style={title}>You Chose to run.</Text>
                <Text style={subtitle}>
                  What made you press the button now?
                </Text>
                <View style={{zIndex: 999}}>
                  <RadioForm
                    style={{
                      marginTop: 30,
                      height: 150,
                      justifyContent: 'space-around',
                    }}
                    radio_props={radio_props}
                    initial={0}
                    onPress={value => value === value}
                    buttonColor={'#AAAAAA'}
                    selectedButtonColor={'#AAAAAA'}
                    buttonSize={10}
                    buttonOuterSize={20}
                  />
                </View>
                <View>
                  <Button
                    text="Next"
                    onPress={() => {
                      setModalVisible(false);
                      setCount(0);
                      next_scene();
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </View>
  );
};

export default Game1;
