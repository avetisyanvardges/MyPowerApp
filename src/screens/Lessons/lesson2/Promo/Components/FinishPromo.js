import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from '../../Promo/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const FinishPromo = () => {
  const {container, title, sub_title, background} = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../../assets/Image/background/lesson1/vector.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View>
        <Text style={title}>As you move through. . .</Text>
        <Text style={sub_title}>
          this course you will practice listening to your inner voice, so that
          when you ask "what's going on here?" you will be more aware of your
          thoughts and feelings in the moment.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: Sizes.size40,
        }}>
        <Button text="Next" onPress={() => navigation.navigate('FactStat')} />
      </View>
    </ImageBackground>
  );
};

export default FinishPromo;
