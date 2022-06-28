import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, Text, Vibration, View} from 'react-native';
import {styles} from './styles';
import Header from '../../../../components/Header';
import {Colors, FontStyle, Padding, Sizes} from '../../../../assets/RootStyles';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';
import {Button} from '../../../../components/Button';
import Red from '../../../../assets/Image/lessons/lesson7/Red.png';
import Yellow from '../../../../assets/Image/lessons/lesson7/Yellow.png';
import Orange from '../../../../assets/Image/lessons/lesson7/Orange.png';

import {Mannequin_vulnerable} from '../../../../assets/Svgs/lesson_7/Game/Mannequin_vulnerable';

const Vulnerable_game = ({navigation}) => {
  const Mannequin = useSelector(
    store => store.lesson_7.Games.Mannequin_vulnerable,
  );
  const [header_height, setHeaderHeight] = useState(0);
  const [select_area, setSelectArea] = useState({});
  const [current_areas, setCurrentAreas] = useState({});
  const [wrong_area, setWrongArea] = useState('');
  const [success_message, setSuccessMessage] = useState('');
  const [show_message, setShowMessage] = useState(true);
  const [start_game, setStartGame] = useState(true);
  const [end_game, setEndGame] = useState(false);
  const [part_message] = useState({
    start: {
      text: 'Locate the vulnerable parts of the body. These make good self-defense targets.',
    },
    end: {
      title: 'Wow, that was great!',
      text: 'You revealed all the  the vulnerable parts that make good self-defense targets.',
    },
  });
  const right_area_count = Math.round(Object.keys(current_areas).length / 2);
  const selected_area_count = Math.round(Object.keys(select_area).length / 2);

  console.log(selected_area_count, right_area_count);

  const {background, right_image, wrong_image, message_container} = styles();

  useEffect(() => {
    setSuccessMessage(part_message.start);
  }, []);

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
    setSuccessMessage({
      title: `${key} - ${Mannequin[key].text}`,
    });
    setShowMessage(true);
  };

  const wrong_press = coordinates => {
    Vibration.vibrate();
    setWrongArea(coordinates);
    setTimeout(() => setWrongArea(''), 2000);
  };

  const setVulnerableAreas = (key, coordinates) => {
    if (!select_area[key] && coordinates.x !== 0 && coordinates.y !== 0) {
      setCurrentAreas({...current_areas, [key]: coordinates});
    }
  };

  const next_press = () => {
    if (end_game) {
      return navigation.navigate('Warmup');
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
        <Image
          source={require('../../../../assets/Image/lessons/lesson7/Chalk.png')}
          style={{
            width: '100%',
            height: '80%',
            resizeMode: 'contain',
            position: 'absolute',
          }}
        />
        <Mannequin_vulnerable
          width={'100%'}
          height={'79%'}
          wrong_press={wrong_press}
          select_area={select_area}
          right_press={right_press}
          disabled={show_message}
          setVulnerableAreas={setVulnerableAreas}
        />
        {Object.keys(select_area).map(item => {
          console.log(select_area[item].color);
          return (
            <Animatable.Image
              animation={'zoomIn'}
              source={
                select_area[item].color === 'Red'
                  ? Red
                  : select_area[item].color === 'yellow'
                  ? Yellow
                  : select_area[item].color === 'orange'
                  ? Orange
                  : null
              }
              style={[
                right_image,
                {
                  top: select_area[item].y - 10,
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
                top: wrong_area.y - 20 - header_height,
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
          <Text style={{...FontStyle.subtitle_1}}>{success_message.title}</Text>
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

export default Vulnerable_game;
