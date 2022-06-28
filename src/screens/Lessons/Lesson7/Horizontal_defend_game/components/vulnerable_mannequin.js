import React, {useState} from 'react';
import {Image, Vibration, View} from 'react-native';
import {Mannequin_horizontal_vulnerable} from '../../../../../assets/Svgs/lesson_7/Game/Mannequin_horizontal_vulnerable';
import * as Animatable from 'react-native-animatable';
import Red from '../../../../../assets/Image/lessons/lesson7/Red.png';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {styles} from '../styles';

const Vulnerable_mannequin = ({
  correct_areas,
  setWrongArea,
  selectVulnerableArea,
  disabled,
  select_area,
  setSelectArea,
}) => {
  const [current_areas, setCurrentAreas] = useState({});

  const {right_image, color_image} = styles();
  const {
    eyes,
    nose,
    throat,
    hand,
    ribs,
    solar_plexus,
    groin,
    thigh,
    knee,
    foot,
  } = correct_areas;

  const right_press = (key, couple) => {
    selectVulnerableArea(key);
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
    <View style={{flex: 1}}>
      <Image
        source={require('../../../../../assets/Image/lessons/lesson7/ChalkOutline.png')}
        style={{
          width: '100%',
          height: '95%',
          resizeMode: 'cover',
          position: 'absolute',
          zIndex: 0,
        }}
      />
      <Mannequin_horizontal_vulnerable
        width={'86%'}
        height={'107%'}
        wrong_press={wrong_press}
        select_area={select_area}
        right_press={right_press}
        disabled={disabled}
        setVulnerableAreas={setVulnerableAreas}
        correct_areas={correct_areas}
        eyes={eyes}
        nose={nose}
        throat={throat}
        hand={hand}
        ribs={ribs}
        solar_plexus={solar_plexus}
        groin={groin}
        thigh={thigh}
        knee={knee}
        foot={foot}
      />
      {Object.keys(select_area).map(item => {
        return (
          <Animatable.Image
            animation={'zoomIn'}
            source={Red}
            style={[
              color_image,
              {
                top: select_area[item].y - Sizes.size25,
                left: select_area[item].x - Sizes.size13 - Padding.horizontal,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

export default Vulnerable_mannequin;
