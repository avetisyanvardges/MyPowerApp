import React, {useEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import {
  BackgroundColors,
  BorderStyles,
  Colors,
  FontStyle,
  fullScreen,
  Padding,
  Sizes,
} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {SvgXml} from 'react-native-svg';
import THINK from '../../../../assets/Image/lessons/lesson1/THINK.svg';
import TELL from '../../../../assets/Image/lessons/lesson1/TELL.svg';
import FIGHT from '../../../../assets/Image/lessons/lesson1/FIGHT.svg';
import RUN from '../../../../assets/Image/lessons/lesson1/RUN.svg';
import YELL from '../../../../assets/Image/lessons/lesson1/YELL.svg';
import {hScale, vScale} from '../../../../assets/RootStyles/Scale';
import {Button} from '../../../../components/Button';
import * as Animatable from 'react-native-animatable';
import VerticalVideo from '../../../../components/VideoComponents/VerticalVideo';
import {Correct} from '../../../../assets/Svgs';
import {useSelector} from 'react-redux';

const Scenario_1 = ({navigation}) => {
  const game = useSelector(store => store.lesson_1.Games);
  const thinkRef = useRef(null);
  const tellRef = useRef(null);
  const yellRef = useRef(null);
  const runRef = useRef(null);
  const fightRef = useRef(null);
  const [true_answer, setAnswer] = useState(THINK);
  const [scenario, setScenario] = useState(game.scenario_1);
  const [correct_answer, setCorrectAnswer] = useState(false);
  const [paused, setPaused] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (correct_answer) {
      setPaused(true);
      setLoad(false);
    } else {
      setPaused(false);
    }
  }, [correct_answer]);

  useEffect(() => {
    console.log(scenario);
  }, [scenario]);

  const answerTheQuestion = (answer, ref) => {
    if (answer === true_answer) {
      setCorrectAnswer({
        correct: true,
        answer,
      });
    } else {
      Vibration.vibrate();
      ref.current.shake();
    }
  };

  const nextScenario = () => {
    setCorrectAnswer('');
    if (scenario === game.scenario_1) {
      setScenario(game.scenario_2);
      setAnswer(YELL);
    } else if (scenario === game.scenario_2) {
      setScenario(game.scenario_3);
      setAnswer(RUN);
    } else if (scenario === game.scenario_3) {
      setScenario(game.scenario_4);
      setAnswer(FIGHT);
    } else if (scenario === game.scenario_4) {
      setScenario(game.scenario_5);
      setAnswer(YELL);
    } else if (scenario === game.scenario_5) {
      setScenario(game.scenario_6);
      setAnswer(TELL);
    } else if (scenario === game.scenario_6) {
      navigation.navigate('RECORD');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.black}}>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: 999,
          paddingHorizontal: Padding.horizontal,
        }}>
        <Header
          onPress={() => navigation.goBack()}
          close={true}
          rightIcon={true}
        />
      </View>
      <VerticalVideo
        resizeMode={'contain'}
        videoUrl={scenario}
        videoHeight={'70%'}
        progressbar={correct_answer ? false : true}
        showPlayPause={true}
        video_paused={paused}
        onLoad={() => setLoad(true)}
      />
      {correct_answer ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            zIndex: 950,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <View
            style={{
              flex: 0.7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Correct width={Sizes.size50} height={Sizes.size50} />
          </View>
        </View>
      ) : null}
      <ImageBackground
        source={require('../../../../assets/Image/lessons/lesson1/game_vector.png')}
        resizeMode="cover"
        style={{
          width: fullScreen.width,
          height: fullScreen.height,
          zIndex: correct_answer ? 999 : 0,
          bottom: fullScreen.height < 800 ? '30%' : '20%',
        }}>
        {!correct_answer ? (
          <>
            <Animatable.View ref={thinkRef}>
              <TouchableOpacity
                onPress={() => {
                  answerTheQuestion(THINK, thinkRef);
                }}
                disabled={!load}
                style={{
                  position: 'absolute',
                  top: Sizes.size100,
                  left: Sizes.size135,
                  opacity: load ? 1 : 0.8,
                }}>
                <SvgXml xml={THINK} width={hScale(120)} height={hScale(120)} />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View ref={tellRef}>
              <TouchableOpacity
                onPress={() => {
                  answerTheQuestion(TELL, tellRef);
                }}
                disabled={!load}
                style={{
                  position: 'absolute',
                  top: Sizes.size179,
                  left: Sizes.size40,
                  opacity: load ? 1 : 0.8,
                }}>
                <SvgXml xml={TELL} width={hScale(135)} height={hScale(145)} />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View ref={yellRef}>
              <TouchableOpacity
                onPress={() => {
                  answerTheQuestion(YELL, yellRef);
                }}
                disabled={!load}
                style={{
                  position: 'absolute',
                  top: Sizes.size182,
                  right: Sizes.size40,
                  opacity: load ? 1 : 0.8,
                }}>
                <SvgXml xml={YELL} width={hScale(135)} height={hScale(145)} />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View ref={fightRef}>
              <TouchableOpacity
                onPress={() => {
                  answerTheQuestion(FIGHT, fightRef);
                }}
                disabled={!load}
                style={{
                  position: 'absolute',
                  top: Sizes.size275,
                  left: Sizes.size75,
                  opacity: load ? 1 : 0.8,
                }}>
                <SvgXml xml={FIGHT} width={hScale(120)} height={hScale(140)} />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View ref={runRef}>
              <TouchableOpacity
                onPress={() => {
                  answerTheQuestion(RUN, runRef);
                }}
                disabled={!load}
                style={{
                  position: 'absolute',
                  top: Sizes.size275,
                  right: Sizes.size65,
                  opacity: load ? 1 : 0.8,
                }}>
                <SvgXml xml={RUN} width={hScale(120)} height={hScale(140)} />
              </TouchableOpacity>
            </Animatable.View>
          </>
        ) : (
          <View style={{width: '100%', position: 'absolute', top: 80}}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={{zIndex: 1}}>
                <SvgXml
                  xml={correct_answer.answer}
                  width={Sizes.size150}
                  height={Sizes.size170}
                />
              </View>
              <View
                style={{
                  width: fullScreen.width - Padding.horizontal * 2,
                  height: Sizes.size150,
                  backgroundColor: BackgroundColors.white,
                  borderRadius: BorderStyles.radius.xs,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: Padding.horizontal,
                  position: 'absolute',
                  top: Sizes.size150,
                  zIndex: 0,
                }}>
                <Text
                  style={{
                    ...FontStyle.title,
                  }}>
                  You got it!
                </Text>

                <View
                  style={{
                    width: '80%',
                    marginTop: vScale(20),
                  }}>
                  <Button
                    text="Next"
                    containerStyle={{paddingVertical: 10}}
                    textStyle={{color: Colors.white}}
                    onPress={nextScenario}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Scenario_1;
