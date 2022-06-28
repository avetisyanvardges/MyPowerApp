import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  BackgroundColors,
  BorderStyles,
  Colors,
  FontStyle,
  fullScreen,
  Padding,
} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {SvgXml} from 'react-native-svg';
import THINK from '../../../../assets/Image/lessons/lesson1/THINK.svg';
import TELL from '../../../../assets/Image/lessons/lesson1/TELL.svg';
import FIGHT from '../../../../assets/Image/lessons/lesson1/FIGHT.svg';
import RUN from '../../../../assets/Image/lessons/lesson1/RUN.svg';
import YELL from '../../../../assets/Image/lessons/lesson1/YELL.svg';
import {Button} from '../../../../components/Button';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';

const GameInitial = ({navigation}) => {
  const [modalState, setModalState] = useState('Start');
  const [visible, setVisible] = useState(true);
  const {width} = useWindowDimensions();
  useEffect(() => {
    const unsbscribe = navigation.addListener('focus', () => {
      setVisible(true);
    });

    return unsbscribe;
  }, [navigation]);
  const backAction = () => {
    navigation.navigate('TELL');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const modalBtn = () => {
    if (modalState === 'Start') {
      setModalState('Next');
    } else {
      setVisible(false);
      setModalState('Start');
      navigation.navigate('Scenario_1');
    }
  };

  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            zIndex: 999,
            paddingHorizontal: Padding.horizontal,
          }}>
          <Header
            onPress={() => navigation.navigate('Warmup_4')}
            close={true}
            rightIcon={true}
          />
        </View>
        <Image
          source={require('../../../../assets/Image/lessons/lesson1/game_init.png')}
          style={{
            width: fullScreen.width,
            height: fullScreen.height,
            zIndex: 0,
          }}
        />
        <ImageBackground
          source={require('../../../../assets/Image/lessons/lesson1/game_vector.png')}
          style={{
            width: fullScreen.width,
            height: fullScreen.height,
            position: 'absolute',
            top: '45%',
            zIndex: 999,
          }}>
          <TouchableOpacity style={{position: 'absolute', top: 80, left: 125}}>
            <SvgXml xml={THINK} width={hScale(120)} height={hScale(120)} />
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', top: 159, left: 40}}>
            <SvgXml xml={TELL} width={hScale(135)} height={hScale(135)} />
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', top: 162, right: 40}}>
            <SvgXml xml={YELL} width={hScale(135)} height={hScale(135)} />
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', top: 255, left: 75}}>
            <SvgXml xml={FIGHT} width={hScale(120)} height={hScale(120)} />
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', top: 255, right: 65}}>
            <SvgXml xml={RUN} width={hScale(120)} height={hScale(120)} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <Modal visible={visible} animationType="fade" transparent={true}>
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            flex: 1,
            width: '100%',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: width - Padding.horizontal * 2,
              height: vScale(150),
              backgroundColor: BackgroundColors.white,
              borderRadius: BorderStyles.radius.xs,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: Padding.horizontal,
            }}>
            {modalState === 'Start' ? (
              <Text style={{...FontStyle.title}}> Let’s play a game!</Text>
            ) : (
              <Text
                style={{
                  fontSize: hScale(14),
                  lineHeight: 24,
                  fontWeight: '400',
                }}>
                Watch the following scenarios and tap the principle that was
                used!
              </Text>
            )}

            <View
              style={{
                width: '80%',
                marginTop: vScale(20),
              }}>
              <Button
                text={modalState}
                containerStyle={{paddingVertical: 10}}
                textStyle={{color: Colors.white}}
                onPress={modalBtn}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GameInitial;
