import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {
  Colors,
  FontStyle,
  fullScreen,
  Shadow,
  Sizes,
} from '../../../../assets/RootStyles';
import {Clothesline} from '../../../../assets/Svgs/lesson_4/Game/Clothesline';
import {styles} from './styles';
import {Red_shirt} from '../../../../assets/Svgs/lesson_4/Game/red_shirt';
import {Yellow_shirt} from '../../../../assets/Svgs/lesson_4/Game/yellow_shirt';
import {Green_shirt} from '../../../../assets/Svgs/lesson_4/Game/green_shirt';
import {useSelector} from 'react-redux';
import Correct_answer from './components/correct_answer';
import UnCorrect from './components/uncorrect_answer';

const ClothesGame = ({navigation}) => {
  const clothes_game = useSelector(state => state.clothes_game);
  const [game_state, setGameState] = useState({
    round: 'round_1',
    scene: 'scene_1',
  });
  const [current_answer, setCurrentAnswer] = useState({
    selected: '',
    red: '',
    yellow: '',
    green: '',
  });
  const [answered, setAnswered] = useState(false);
  const [show_sureAnswer, setShow] = useState(false);
  const {width} = useWindowDimensions();
  const game_scene = clothes_game[game_state.round][game_state.scene];

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  const {clothes} = styles();

  const shirt_press = key => {
    setCurrentAnswer({
      selected: [key],
      [key]: clothes_game[game_state.round][game_state.scene].text,
    });
    setAnswered(true);
    setTimeout(() => {
      setShow(true);
    }, 2000);
  };

  const next_press = () => {
    if (game_scene.next_scene) {
      setCurrentAnswer('');
      setShow(false);
      setAnswered(false);
      setGameState(game_scene.next_scene);
    } else {
      navigation.navigate('SomethingToTell');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(119, 202, 229, 0.2)'}}>
      <StatusBar hidden />
      <ImageBackground
        style={{
          width: '100%',
          height: '70%',
          resizeMode: 'cover',
          zIndex: 0,
        }}
        source={require('../../../../assets/Image/lessons/lesson4/image.png')}>
        <View style={{top: '5%', zIndex: 2, position: 'absolute'}}>
          <Clothesline
            width={fullScreen.height < 800 ? width : width + Sizes.size50}
            height={Sizes.size120}
          />
        </View>
        <View style={[clothes, {zIndex: 1}]}>
          <TouchableOpacity
            onPress={() => shirt_press('red')}
            disabled={answered}
            style={{
              position: 'absolute',
              top: fullScreen.height < 800 ? -Sizes.size48 : -Sizes.size55,
              left: fullScreen.height < 800 ? -Sizes.size100 : -Sizes.size85,
              transform: [{rotateY: '-10deg'}],
            }}>
            <Red_shirt
              width={fullScreen.height < 800 ? Sizes.size170 : Sizes.size220}
              height={fullScreen.height < 800 ? Sizes.size170 : Sizes.size220}
              color={'#F92E01'}
              text={current_answer.red}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => shirt_press('yellow')}
            disabled={answered}
            style={{
              position: 'absolute',
              top: fullScreen.height < 800 ? -Sizes.size15 : -Sizes.size10,
              left: fullScreen.height < 800 ? Sizes.size135 : Sizes.size235,
              transform: [{rotateY: '-10deg'}],
            }}>
            <Yellow_shirt
              width={fullScreen.height < 800 ? Sizes.size150 : Sizes.size210}
              height={fullScreen.height < 800 ? Sizes.size150 : Sizes.size210}
              color={'#FFE600'}
              text={current_answer.yellow}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => shirt_press('green')}
            disabled={answered}
            style={{
              position: 'absolute',
              top: fullScreen.height < 800 ? -Sizes.size17 : -Sizes.size12,
              right: fullScreen.height < 800 ? Sizes.size120 : Sizes.size120,
              transform: [{rotateY: '-30deg'}],
            }}>
            <Green_shirt
              width={fullScreen.height < 800 ? Sizes.size150 : Sizes.size210}
              height={fullScreen.height < 800 ? Sizes.size150 : Sizes.size210}
              color={'#F92E01'}
              text={current_answer.green}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {!answered ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              paddingVertical: Sizes.size17,
              marginHorizontal: Sizes.size75,
              backgroundColor: Colors.white,
              borderRadius: Sizes.size8,
              alignItems: 'center',
              justifyContent: 'center',
              ...Shadow,
            }}>
            <Text style={{...FontStyle.headline_6}}>{game_scene.text}</Text>
          </View>
        </View>
      ) : null}

      {show_sureAnswer ? (
        current_answer[game_scene.sure] === game_scene.text ? (
          <Correct_answer
            next={next_press}
            game_state={game_state}
            setGameState={setGameState}
            sure={game_scene.sure}
            title={game_scene.text}
            text={game_scene[current_answer.selected]}
          />
        ) : (
          <UnCorrect
            next={next_press}
            title={game_scene.text}
            text={game_scene[current_answer.selected]}
          />
        )
      ) : null}
    </View>
  );
};

export default ClothesGame;
