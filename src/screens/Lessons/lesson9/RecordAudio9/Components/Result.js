import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {
  BackgroundColors,
  FontStyle,
  Shadow,
  Sizes,
} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';
import {UploadFile} from '../../../../../Services/firebase';
import {useNavigation} from '@react-navigation/native';

const Result = ({photo_path, title}) => {
  const navigation = useNavigation();
  const next_press = async () => {
    const body = {
      lesson_name: 'Lesson_9',
      file_name: title,
      file_format: 'jpg',
      file_path: photo_path,
      file_type: 'Photo/Favorite_pose',
      cb: res => {
        navigation.navigate('HowDidFell9_2');
      },
    };
    await UploadFile(body);
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{...FontStyle.headline_4}}>Take a look!</Text>
      </View>
      <View style={{flex: 2}}>
        <View
          style={{
            backgroundColor: BackgroundColors.white,
            borderRadius: Sizes.size8,
            ...Shadow,
          }}>
          <ImageBackground
            style={{
              width: '100%',
              height: Sizes.size300,
            }}
            borderRadius={Sizes.size8}
            source={{uri: photo_path}}>
            <View style={{padding: Sizes.size10}}>
              <Text style={{...FontStyle.headline_4}}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button text={'Next'} onPress={next_press} />
      </View>
    </View>
  );
};

export default Result;
