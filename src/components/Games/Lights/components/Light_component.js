import React, {useState} from 'react';
import VideoPlayer from '../../../VideoComponents/VideoPlayer';
import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Vibration,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Sizes} from '../../../../assets/RootStyles';
import {styles} from '../styles';
import {Button} from '../../../Button';

function Light_component(finished, lights_data) {
  const {height} = useWindowDimensions();
  const inset = useSafeAreaInsets();
  const {
    color,
    color_container,
    answer_container,
    answer_title_container,
    answer_title,
    answer_text,
    selected_color_container,
    listContainer,
  } = styles();

  const renderColors = ({item}) => {
    return (
      <TouchableOpacity
        disabled={!finished}
        onPress={() => {
          if (!item.sure) {
            Vibration.vibrate();
          }
        }}
        style={[
          color,
          {backgroundColor: item.color, opacity: finished ? 1 : 0.5},
        ]}
      />
    );
  };

  const colorPosition = color_name => {
    const positions = {
      Red: {justifyContent: 'flex-start'},
      Yellow: {justifyContent: 'center'},
      Green: {justifyContent: 'flex-end'},
    };

    return positions[color_name];
  };

  return (
    <View
      style={{
        width: 200,
        height: height + inset.top,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FlatList
        keyExtractor={item => item.id}
        data={lights_data}
        renderItem={renderColors}
        ItemSeparatorComponent={() => <View style={{height: Sizes.size15}} />}
        contentContainerStyle={listContainer}
      />
      <View style={[selected_color_container, colorPosition('Red')]}>
        <View style={{flexDirection: 'row'}}>
          <View style={color_container}>
            <View style={[color, {backgroundColor: 'red'}]} />
          </View>
        </View>
      </View>
      <View style={[answer_container]}>
        <View style={{padding: 20}}>
          <View style={answer_title_container}>
            <Text style={answer_title}>{'You Chose '}</Text>
            <Text style={answer_text}>asdasdasdasdsa</Text>
          </View>
          <View
            style={{
              height: Sizes.size40,
              justifyContent: 'flex-end',
              marginTop: Sizes.size13,
            }}>
            {/*<Button text="Next" onPress={pressAnswerButton} />*/}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Light_component;
