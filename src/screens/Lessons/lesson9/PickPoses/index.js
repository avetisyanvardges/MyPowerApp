import React, {useEffect} from 'react';
import {BackHandler, FlatList, ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {Button} from '../../../../components/Button';
import Header from '../../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  BorderStyles,
  Colors,
  FontStyle,
  Sizes,
} from '../../../../assets/RootStyles';

const PickPoses = ({setScreen}) => {
  const photos = useSelector(store => store.lesson_9.Emotion_photos);
  const navigation = useNavigation();

  const {
    top_content,
    center_content,
    title,
    subtitle,
    background,
    bottom_content,
  } = styles();

  const backAction = () => {
    setScreen('recordEnd');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const Item = ({item}) => {
    return (
      <View style={{marginHorizontal: Sizes.size10}}>
        <ImageBackground
          style={{
            width: Sizes.size160,
            height: Sizes.size275,
            resizeMode: 'cover',
          }}
          borderRadius={BorderStyles.radius.xs}
          source={{uri: photos[item]}}>
          <View
            style={{
              padding: Sizes.size10,
            }}>
            <Text style={{...FontStyle.body_1, color: Colors.white}}>
              {item}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson9/MirrorchallengeBg.png')}>
      <Header onPress={() => setScreen('recordEnd')} />
      <View style={top_content}>
        <Text style={title}>Now, take a look!</Text>
      </View>
      <View style={center_content}>
        <FlatList
          data={Object.keys(photos)}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => photos[item]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: Sizes.size20,
          }}
          ItemSeparatorComponent={() => <View style={{height: Sizes.size20}} />}
        />
      </View>
      <View style={bottom_content}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('HowDidFell9')}
        />
      </View>
    </ImageBackground>
  );
};

export default PickPoses;
