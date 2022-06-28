import React, {useEffect, useRef, useState} from 'react';
import {Body_parts} from '../../../../assets/Svgs/lesson_9/Game/Body_parts';
import {Image, StatusBar, Text, useWindowDimensions, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Red from '../../../../assets/Image/lessons/lesson7/Red.png';
import Yellow from '../../../../assets/Image/lessons/lesson7/Yellow.png';
import Orange from '../../../../assets/Image/lessons/lesson7/Orange.png';
import {
  Colors,
  FontStyle,
  Padding,
  Shadow,
  Sizes,
} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';

const BodyParts = ({navigation}) => {
  const time = useRef(null);
  const {width, height} = useWindowDimensions();
  const [area_coordinates, setCoordinates] = useState({});
  const [selected_area, setSelected] = useState({});
  const [next, setNext] = useState('eyes');
  const [next_area, setNextArea] = useState('eyes');
  const [millisecond, setMillisecond] = useState(
    Math.random() * (1500 - 500) + 500,
  );
  const [show_message, setShowMessage] = useState(true);
  const [success_message, setSuccessMessage] = useState({
    title: 'Vulnerable Targets',
    text: 'Uncover one vulnerable target at a time. Tap it, and see if its a red, orange or yellow target.',
  });
  const [area_color, setAreaColor] = useState({
    eyes: '#0B2B3E',
    left_elbow: '#0B2B3E',
    right_elbow: '#0B2B3E',
    left_hand: '#0B2B3E',
    right_hand: '#0B2B3E',
    ribs: '#0B2B3E',
    throat: '#0B2B3E',
    groin: '#0B2B3E',
    left_foot: '#0B2B3E',
    right_foot: '#0B2B3E',
    left_knee: '#0B2B3E',
    right_knee: '#0B2B3E',
  });

  useEffect(() => {
    if (next) {
      time.current = setTimeout(() => {
        setAreaColor({...area_color, [next_area]: 'transparent'});
      }, millisecond);
    }
  }, [next]);

  const {
    eyes,
    left_elbow,
    left_knee,
    left_foot,
    left_hand,
    right_knee,
    right_elbow,
    right_hand,
    ribs,
    right_foot,
    groin,
    throat,
  } = area_color;

  const setDefaultVal = () => {
    setNextArea('eyes');
    setNext('eyes');
    setSelected({});
    setAreaColor({
      eyes: '#0B2B3E',
      left_elbow: '#0B2B3E',
      right_elbow: '#0B2B3E',
      left_hand: '#0B2B3E',
      right_hand: '#0B2B3E',
      ribs: '#0B2B3E',
      throat: '#0B2B3E',
      groin: '#0B2B3E',
      left_foot: '#0B2B3E',
      right_foot: '#0B2B3E',
      left_knee: '#0B2B3E',
      right_knee: '#0B2B3E',
    });
    setSuccessMessage({
      title: 'Vulnerable Targets',
      text: 'Uncover one vulnerable target at a time. Tap it, and see if its a red, orange or yellow target.',
    });
  };

  const setVulnerableAreas = (key, coordinates) => {
    if (!area_coordinates[key] && coordinates.x !== 0 && coordinates.y !== 0) {
      setCoordinates({...area_coordinates, [key]: coordinates});
    }
  };

  const right_press = key => {
    if (!selected_area[key]) {
      setNextArea(area_coordinates[key].next);
      setSelected({...selected_area, [key]: area_coordinates[key]});
    }
    setTimeout(() => {
      setSuccessMessage({
        title: 'TEXT',
      });
      setShowMessage(true);
    }, 400);
  };

  const next_press = () => {
    if (area_coordinates[next].next) {
      setNext(next_area);
      setShowMessage(false);
    } else {
      navigation.navigate('Record9');
      setDefaultVal();
    }
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../../../assets/Image/lessons/lesson9/Chalk.png')}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
          position: 'absolute',
        }}
      />
      <Body_parts
        width={width}
        height={height}
        setVulnerableAreas={setVulnerableAreas}
        right_press={right_press}
        eyes={eyes}
        left_elbow={left_elbow}
        right_elbow={right_elbow}
        left_hand={left_hand}
        right_hand={right_hand}
        ribs={ribs}
        throat={throat}
        groin={groin}
        left_foot={left_foot}
        right_foot={right_foot}
        left_knee={left_knee}
        right_knee={right_knee}
      />
      {Object.keys(selected_area).map(item => {
        return (
          <Animatable.Image
            animation={'zoomIn'}
            source={
              selected_area[item].color === 'Red'
                ? Red
                : selected_area[item].color === 'yellow'
                ? Yellow
                : selected_area[item].color === 'orange'
                ? Orange
                : null
            }
            style={{
              width: Sizes.size100,
              height: Sizes.size90,
              position: 'absolute',
              zIndex: 999,
              borderRadius: Sizes.size20,
              top: selected_area[item].y,
              left: selected_area[item].x,
            }}
          />
        );
      })}
      {show_message ? (
        <View
          style={{
            minHeight: Sizes.size100,
            backgroundColor: Colors.white,
            marginBottom: Sizes.size30,
            marginHorizontal: Padding.horizontal,
            borderRadius: Sizes.size8,
            padding: Padding.horizontal,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            ...Shadow,
          }}>
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
    </View>
  );
};

export default BodyParts;
