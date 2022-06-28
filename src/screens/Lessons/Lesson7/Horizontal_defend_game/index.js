import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import Defend_mannequin from './components/defend_mannequin';
import Vulnerable_mannequin from './components/vulnerable_mannequin';
import Orientation from 'react-native-orientation-locker';
import * as Animatable from 'react-native-animatable';
import {Colors, FontStyle, Padding, Sizes} from '../../../../assets/RootStyles';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import {useSelector} from 'react-redux';
import Header from '../../../../components/Header';
import {deviceInfo} from '../../../../assets/deviceInfo';
import RotatePphone from '../../../../components/Rotate_phone';

const Horizontal_defend_game = ({navigation, route}) => {
  const Mannequin = useSelector(
    store => store.lesson_7.Games.Mannequin_horizontal,
  );

  const [current_scene, setCurrentScene] = useState('heel_knee');
  const [wrong_area, setWrongArea] = useState('');
  const [select_areas, setSelectArea] = useState({});
  const [defend_select_area, setSelectDefendArea] = useState({});
  const [vulnerable_select_area, setSelectVulnerableArea] = useState({});
  const [success_message, setSuccessMessage] = useState('');
  const [show_message, setShowMessage] = useState(true);
  const [start_game, setStartGame] = useState(true);
  const [end_game, setEndGame] = useState(false);
  const [defend_disabled, setDefendDisabled] = useState(true);
  const [vulnerable_disabled, setVulnerableDisabled] = useState(true);
  const [landscape, setLandscape] = useState(false);
  const [part_message] = useState({
    start: {
      text: 'Choose which hard part of my body was used to hurt the soft part on theirs.',
    },
    end: {
      title: 'Well Done!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
  });

  useEffect(() => {
    !deviceInfo.ios && Orientation.lockToLandscapeLeft();
    setSuccessMessage(part_message.start);
    if (route.params) {
      setCurrentScene(route.params.scene);
    }
    const unsubscribe = navigation.addListener('blur', () => {
      setWrongArea('');
      setSelectArea({});
      setSuccessMessage('');
      setStartGame(true);
      setEndGame(false);
      setDefendDisabled(true);
      setVulnerableDisabled(true);
      setSelectDefendArea({});
      setSelectVulnerableArea({});
    });

    Orientation.addOrientationListener(event => {
      if (event === 'LANDSCAPE-LEFT' || event === 'LANDSCAPE-RIGHT') {
        setLandscape(true);
      } else {
        setLandscape(false);
      }
    });

    return (
      unsubscribe,
      Orientation.removeOrientationListener(event => {
        if (event === 'LANDSCAPE-LEFT' || event === 'LANDSCAPE-RIGHT') {
          setLandscape(true);
        } else {
          setLandscape(false);
        }
      })
    );
  }, [navigation, route]);

  const [correct_areas] = useState({
    heel_knee: {
      hand: {
        nose: true,
      },
      knee: {
        thigh: true,
      },
    },
    low_elbow: {
      elbow: {
        ribs: true,
      },
      hand: {
        nose: true,
      },
      knee: {
        thigh: true,
      },
    },
  });

  const correct_areas_count = Object.keys(correct_areas[current_scene]).length;
  const selected_areas_count = Object.keys(select_areas).length;

  const selectDefendArea = key => {
    setDefendDisabled(true);
    setVulnerableDisabled(false);
    setSelectArea({...select_areas, ...correct_areas[current_scene][key]});
  };

  const selectVulnerableArea = key => {
    if (select_areas[key]) {
      setSuccessMessage(Mannequin[current_scene][key]);
      setShowMessage(true);
    }
  };
  const next_press = () => {
    const heel_knee = current_scene === 'heel_knee';
    if (end_game) {
      setSelectArea({});
      return navigation.navigate(heel_knee ? 'PersonsInstinct' : 'GroinStrike');
    }
    if (start_game) {
      setStartGame(false);
    }
    if (correct_areas_count !== selected_areas_count) {
      setDefendDisabled(false);
      setVulnerableDisabled(true);
      setShowMessage(false);
      setSuccessMessage('');
    } else {
      setEndGame(true);
      setSuccessMessage(part_message.end);
    }
  };

  const {wrong_image, message_container} = styles();

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      {!landscape && <RotatePphone />}
      <View
        style={{
          height: Sizes.size50,
          position: 'absolute',
          top: -Sizes.size20,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          paddingHorizontal: Padding.horizontal,
        }}>
        <Header close={true} rightIcon={true} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Defend_mannequin
          correct_areas={correct_areas[current_scene]}
          selectArea={selectDefendArea}
          setWrongArea={setWrongArea}
          disabled={defend_disabled}
          select_area={defend_select_area}
          setSelectArea={setSelectDefendArea}
        />
        <Vulnerable_mannequin
          correct_areas={select_areas}
          setWrongArea={setWrongArea}
          disabled={vulnerable_disabled}
          selectVulnerableArea={selectVulnerableArea}
          select_area={vulnerable_select_area}
          setSelectArea={setSelectVulnerableArea}
        />
      </View>
      {wrong_area ? (
        <Animatable.Image
          animation={'flash'}
          source={require('../../../../assets/Image/lessons/lesson7/wrong.png')}
          style={[
            wrong_image,
            {
              top: wrong_area.y - 15,
              left: wrong_area.x - 10 - Padding.horizontal,
              zIndex: 999,
            },
          ]}
        />
      ) : null}
      {wrong_area ? (
        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: Sizes.size50,
            marginHorizontal: Padding.horizontal,
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: Sizes.size350,
                padding: Sizes.size18,
                backgroundColor: Colors.white,
                borderRadius: Sizes.size8,
                alignItems: 'center',
              }}>
              <Text style={{...FontStyle.subtitle_1}}>Please try again</Text>
            </View>
          </View>
        </View>
      ) : null}
      {show_message ? (
        <View
          style={[
            message_container,
            {
              alignItems: 'center',
              flexDirection: start_game ? 'column' : 'row',
            },
          ]}>
          <View>
            <Text style={{...FontStyle.subtitle_1}}>
              {success_message.title}
            </Text>
            <Text style={{...FontStyle.body_2}}>{success_message.text}</Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: start_game ? Sizes.size20 : 0,

              alignItems: 'center',
            }}>
            <Button
              text={start_game ? 'Start' : 'Next'}
              onPress={next_press}
              containerStyle={{width: Sizes.size200}}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Horizontal_defend_game;
