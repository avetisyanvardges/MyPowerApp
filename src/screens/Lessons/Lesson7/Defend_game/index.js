import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, Vibration, View} from 'react-native';
import {styles} from './styles';
import Header from '../../../../components/Header';
import {Mannequin_defend} from '../../../../assets/Svgs/lesson_7/Game/Mannequin_defend';
import {Colors, FontStyle, Padding, Sizes} from '../../../../assets/RootStyles';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';
import {Button} from '../../../../components/Button';

const Defend_game = ({navigation}) => {
  const Mannequin = useSelector(store => store.lesson_7.Games.Mannequin_defend);
  const [header_height, setHeaderHeight] = useState(0);
  const [current_areas, setCurrentAreas] = useState({});
  const [select_area, setSelectArea] = useState({});
  const [wrong_area, setWrongArea] = useState('');
  const [success_message, setSuccessMessage] = useState('');
  const [show_message, setShowMessage] = useState(true);
  const [start_game, setStartGame] = useState(true);
  const [end_game, setEndGame] = useState(false);
  const [part_message] = useState({
    start: {
      title: "Let's play!",
      text: 'Touch the parts of your body that you believe you can use to defend yourself.',
    },
    end: {
      title: 'Well Done!',
      text: 'You revealed all the strong parts of your body that you can use to defend yourself.',
    },
  });
  const right_area_count = Object.keys(Mannequin).length;
  const selected_area_count = Math.round(Object.keys(select_area).length / 2);
  const {background, right_image, wrong_image, message_container} = styles();

  useEffect(() => {
    setSuccessMessage(part_message.start);
  }, []);

  useEffect(() => {
    console.log(current_areas, 'Defend_game');
  }, [current_areas]);

  const right_press = (key, couple) => {
    const left = `${key}_left`;
    const right = `${key}_right`;
    if (!select_area[key]) {
      if (couple) {
        setSelectArea({
          ...select_area,
          [left]: current_areas[left],
          [right]: current_areas[right],
        });
      } else {
        setSelectArea({...select_area, [key]: current_areas[key]});
      }
    }
    setSuccessMessage(Mannequin[key]);
    setShowMessage(true);
  };

  const next_press = () => {
    if (end_game) {
      return navigation.navigate('GameInstructions', {screen: 'Screen2'});
    }
    if (start_game) {
      setStartGame(false);
    }
    if (right_area_count !== selected_area_count) {
      setShowMessage(false);
      setSuccessMessage('');
    } else {
      setEndGame(true);
      setSuccessMessage(part_message.end);
    }
  };

  const setVulnerableAreas = (key, coordinates) => {
    if (!select_area[key] && coordinates.x !== 0 && coordinates.y !== 0) {
      setCurrentAreas({...current_areas, [key]: coordinates});
    }
  };

  const wrong_press = coordinates => {
    Vibration.vibrate();
    setWrongArea(coordinates);
    setTimeout(() => setWrongArea(''), 2000);
  };
  console.log(current_areas);

  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson7/BG.png')}>
      <Header
        onLayout={event => {
          const {height} = event.nativeEvent.layout;
          setHeaderHeight(height);
        }}
        onPress={() => {}}
        rightIcon={true}
        close={true}
      />
      <View style={{flex: 1, alignItems: 'center'}}>
        <Mannequin_defend
          width={'100%'}
          height={'80%'}
          wrong_press={wrong_press}
          select_area={select_area}
          right_press={right_press}
          disabled={show_message}
          setVulnerableAreas={setVulnerableAreas}
          hand={true}
          head={true}
          elbow={true}
          knee={true}
          foot={true}
        />
        {Object.keys(select_area).map(item => {
          return (
            <Animatable.Image
              animation={'zoomIn'}
              source={
                item === 'head'
                  ? require('../../../../assets/Image/lessons/lesson7/Right_light.png')
                  : require('../../../../assets/Image/lessons/lesson7/Right.png')
              }
              style={[
                right_image,
                {
                  top: select_area[item].y,
                  left: select_area[item].x - Padding.horizontal,
                },
              ]}
            />
          );
        })}
        {wrong_area ? (
          <Animatable.Image
            animation={'flash'}
            source={require('../../../../assets/Image/lessons/lesson7/wrong.png')}
            style={[
              wrong_image,
              {
                top: wrong_area.y - 15 - header_height,
                left: wrong_area.x - 20 - Padding.horizontal,
              },
            ]}
          />
        ) : null}
      </View>
      {wrong_area ? (
        <View
          style={{
            position: 'absolute',
            bottom: Sizes.size50,
            left: 0,
            right: 0,
            marginHorizontal: Padding.horizontal,
          }}>
          <View
            style={{
              padding: Sizes.size18,
              backgroundColor: Colors.white,
              borderRadius: Sizes.size8,
            }}>
            <Text style={{...FontStyle.subtitle_1}}>Please try again</Text>
          </View>
        </View>
      ) : null}
      {show_message ? (
        <View style={message_container}>
          <Text style={{...FontStyle.subtitle_1}}>
            {start_game || end_game
              ? success_message.title
              : selected_area_count +
                ' of ' +
                right_area_count +
                ' - ' +
                success_message.title}
          </Text>
          <Text style={{...FontStyle.body_2}}>{success_message.text}</Text>
          <View
            style={{
              flex: 1,
              marginTop: Sizes.size15,
              justifyContent: 'flex-end',
            }}>
            <Button text={'Next'} onPress={next_press} />
          </View>
        </View>
      ) : null}
    </ImageBackground>
  );
};

export default Defend_game;
