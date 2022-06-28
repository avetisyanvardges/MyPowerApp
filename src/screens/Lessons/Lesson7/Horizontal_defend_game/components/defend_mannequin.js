import React, {useState} from 'react';
import {Vibration, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {Padding} from '../../../../../assets/RootStyles';
import {Mannequin_defend} from '../../../../../assets/Svgs/lesson_7/Game/Mannequin_defend';
import {styles} from '../styles';

const Defend_mannequin = ({
  correct_areas,
  disabled,
  setWrongArea,
  selectArea,
  setSelectArea,
  select_area,
}) => {
  const [current_areas, setCurrentAreas] = useState({});

  const {right_image} = styles();

  const right_press = (key, couple) => {
    selectArea(key);
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

  return (
    <View style={{flex: 1, backgroundColor: '#333333'}}>
      <Mannequin_defend
        width={'100%'}
        height={'95%'}
        wrong_press={wrong_press}
        select_area={select_area}
        right_press={right_press}
        setVulnerableAreas={setVulnerableAreas}
        disabled={disabled}
        hand={correct_areas.hand}
        head={correct_areas.head}
        elbow={correct_areas.elbow}
        knee={correct_areas.knee}
        foot={correct_areas.foot}
      />
      {Object.keys(select_area).map(item => {
        // const posX = current_areas[item].posX;
        return (
          <Animatable.Image
            animation={'zoomIn'}
            source={
              item === 'head'
                ? require('../../../../../assets/Image/lessons/lesson7/Right_light.png')
                : require('../../../../../assets/Image/lessons/lesson7/Right.png')
            }
            style={[
              right_image,
              {
                top: select_area[item].y,
                left: select_area[item].x - Padding.horizontal / 1.1,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default Defend_mannequin;
