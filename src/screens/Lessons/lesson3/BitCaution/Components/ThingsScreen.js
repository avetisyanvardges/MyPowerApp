import React, {useState} from 'react';
import {FlatList, ImageBackground, ScrollView, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {styles} from '../../BitCaution/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {UpdateData} from '../../../../../Services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThingsScreen = ({setScreen}) => {
  const {bottom_content, title, background, center_content, top_content} =
    styles();
  const navigation = useNavigation();
  const [things, setThings] = useState([]);
  const [Data, setData] = useState([
    {
      id: 1,
      checked: false,
      title: 'Strong',
    },
    {
      id: 2,
      checked: false,
      title: 'Smart',
    },
    {
      id: 3,
      checked: false,
      title: 'Creative',
    },
    {
      id: 4,
      checked: false,
      title: 'Supportive',
    },
    {
      id: 5,
      checked: false,
      title: 'Supported',
    },
    {
      id: 6,
      checked: false,
      title: 'Loving',
    },
    {
      id: 7,
      checked: false,
      title: 'Stands up for myself',
    },
    {
      id: 8,
      checked: false,
      title: 'Assertive',
    },
    {
      id: 9,
      checked: false,
      title: 'Inner Strength',
    },
    {
      id: 10,
      checked: false,
      title: 'Sense of Humor',
    },
    {
      id: 11,
      checked: false,
      title: 'Friendly',
    },
    {
      id: 12,
      checked: false,
      title: 'Decisive',
    },
    {
      id: 13,
      checked: false,
      title: 'Know what I want',
    },
    {
      id: 14,
      checked: false,
      title: 'Aware',
    },
    {
      id: 15,
      checked: false,
      title: 'Have values',
    },
    {
      id: 16,
      checked: false,
      title: 'Kind-hearted',
    },
    {
      id: 17,
      checked: false,
      title: 'Inpiring',
    },
    {
      id: 18,
      checked: false,
      title: 'Content',
    },
    {
      id: 19,
      checked: false,
      title: 'Courageous',
    },
    {
      id: 20,
      checked: false,
      title: 'Pay attention to fear',
    },
    {
      id: 21,
      checked: false,
      title: 'Articulate',
    },
    {
      id: 22,
      checked: false,
      title: 'Flexible',
    },
    {
      id: 23,
      checked: false,
      title: 'Communicative',
    },
    {
      id: 24,
      checked: false,
      title: 'Powerful',
    },
  ]);
  const itemPress = item => {
    const newData = Data.map(res => {
      if (item.id === res.id) {
        setThings([...things, res.title]);
        return {
          ...res,
          checked: !res.checked,
        };
      } else {
        return res;
      }
    });
    setData(newData);
  };
  const Item = ({item, onPress}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <CheckBox value={item?.checked} onValueChange={() => itemPress(item)} />
        <Text style={{marginLeft: 20}}>{item?.title}</Text>
      </View>
    );
  };
  const renderItem = ({item}) => (
    <Item item={item} onPress={() => itemPress(item)} />
  );

  const Set_data = async () => {
    const uid = await AsyncStorage.getItem('uid');
    const body = {
      ref: `Users/${uid}/lessons/Lesson_3/`,
      data: {things},
      cb: () => {
        navigation.navigate('WarmupS');
      },
    };
    await UpdateData(body);
  };

  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson3/bitBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>
          Choose which of these things you know that you are or have
        </Text>
      </View>
      <View style={center_content}>
        <ScrollView>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item?.id}
            showsVerticalScrollIndicator={false}
            extraData={setScreen}
          />

          <View style={bottom_content}>
            <Button text="Next" onPress={Set_data} />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ThingsScreen;
