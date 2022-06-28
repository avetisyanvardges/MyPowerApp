import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const PowerPoses = ({setScreen}) => {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      title: 'Victory',
      image: (
        <Image
          style={{width: 150, height: 220}}
          source={require('../../../../assets/Image/background/lesson9/victory.png')}
        />
      ),
    },
    {
      id: '2',
      title: 'Supermam',
      image: (
        <Image
          style={{width: 150, height: 220}}
          source={require('../../../../assets/Image/background/lesson9/supermom.png')}
        />
      ),
    },
    {
      id: '3',
      title: 'Stronger',
      image: (
        <Image
          style={{width: 150, height: 220}}
          source={require('../../../../assets/Image/background/lesson9/stronger.png')}
        />
      ),
    },
    {
      id: '4',
      title: 'Balanced',
      image: (
        <Image
          style={{width: 150, height: 220}}
          source={require('../../../../assets/Image/background/lesson9/balanced.png')}
        />
      ),
    },
    {
      id: '5',
      title: 'WonderWoman',
      image: (
        <Image
          style={{width: 150, height: 220}}
          source={require('../../../../assets/Image/background/lesson9/wonder.png')}
        />
      ),
    },
    {
      id: '6',
      title: 'Invincible',
      image: (
        <Image
          style={{width: 150, height: 220}}
          source={require('../../../../assets/Image/background/lesson9/invincible.png')}
        />
      ),
    },
  ];
  const {
    bottom_content,
    center_content,
    title,
    subtitle,
    background,
    top_content,
    btnText,
  } = styles();
  const [selectedItem, setSelectedItem] = useState();

  const backAction = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const itemPress = async item => {
    await setSelectedItem(item);
  };
  const Item = ({item}) => (
    <View style={{marginVertical: 10, marginHorizontal: 10}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RecordPoses', {selected_pos: item})
        }>
        {item.image}
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson9/MirrorchallengeBg.png')}>
      <Header onPress={() => setScreen('recordEnd')} rightIcon={true} />

      <View style={center_content}>
        <View style={top_content}>
          <Text style={title}>Power Poses</Text>
          <Text style={subtitle}>
            Pick one and hold it for 20 seconds. Yes, that sounds like a long
            time, but there is a good reason!
          </Text>
          <View
            style={{
              alignItems: 'flex-end',
              marginHorizontal: 20,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              style={{
                width: 146,
                height: 30,
                backgroundColor: '#BD3150',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
              text={'Skip for now'}
              onPress={() => {
                navigation.navigate('Back2Baln');
              }}>
              <Text style={btnText}>Skip for now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
};

export default PowerPoses;
