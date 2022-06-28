import React from 'react';
import Icon from '../../../assets/Svgs/poses/goodjob.svg';
import Background from '../../../assets/Image/background/job.png';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../Poses/styles';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../components/Button';
import {Colors, Sizes} from '../../../assets/RootStyles';
import Share from '../../../assets/Svgs/poses/share-2.svg';
import {useSelector} from 'react-redux';
import {deviceInfo} from '../../../assets/deviceInfo';
import {UpdateData} from '../../../Services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GoodJobScreen = () => {
  const user_data = useSelector(store => store.user_data);
  const navigation = useNavigation();

  const {header, btn_container, title, subtitle, background, bottom_content} =
    styles();

  const next_press = async () => {
    const uid = await AsyncStorage.getItem('uid');
    const data = {
      ref: `Users/${uid}`,
      data: user_data,
      cb: res => {
        navigation.navigate('NavAllScreens');
      },
    };
    console.log(data, 'data');
    await UpdateData(data);
  };

  return (
    <ImageBackground style={background} source={Background}>
      <View style={header}>
        <View style={btn_container}>
          <TouchableOpacity
            style={btn_container}
            onPress={() => navigation.navigate('PersonalCommintment')}>
            <Text style={{marginHorizontal: 10, color: Colors.secondary_pink}}>
              Share
            </Text>
            <SvgXml xml={Share} width={Sizes.size18} height={Sizes.size18} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginVertical: deviceInfo.small_screen
            ? Sizes.size50
            : Sizes.size100,
          alignItems: 'center',
        }}>
        <SvgXml xml={Icon} width={Sizes.size100} height={Sizes.size200} />
        <Text style={title}>Good job!</Text>
        <Text style={subtitle}>You've achieved your first medal!</Text>
      </View>
      <View style={bottom_content}>
        <Button text={'Next'} onPress={next_press} />
      </View>
    </ImageBackground>
  );
};

export default GoodJobScreen;
