import React, {useEffect, useState} from 'react';
import Clap from '../../../assets/Svgs/clap.svg';
import {Text, View} from 'react-native';
import {styles} from '../styles';
import {SvgXml} from 'react-native-svg';
import {hScale} from '../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';

const WhiteScreen = () => {
  const navigation = useNavigation();

  const {whiteBackground, whiteTitle, whitSubtitle} = styles();
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
    if (count === 0) {
      navigation.navigate('Poses');
    }
  }, [count]);

  return (
    <View style={whiteBackground}>
      <SvgXml xml={Clap} width={hScale(100)} height={hScale(50)} />
      <Text style={whiteTitle}>Good job, Yudit</Text>
      <Text style={whitSubtitle}>Now, let’s jump right in</Text>
      <Text style={{color: 'white', fontSize: 180, fontWeight: '800'}}>
        {count}
      </Text>
    </View>
  );
};

export default WhiteScreen;
