import React from 'react';
import {Rotate_phone} from '../../assets/Svgs';
import {Colors, FontStyle, Sizes} from '../../assets/RootStyles';
import {Text, useWindowDimensions, View} from 'react-native';
import {styles} from './styles';

const RotatePphone = () => {
  const {container} = styles();
  const {width, height} = useWindowDimensions();
  return (
    <View style={[container, {width, height: height + Sizes.size70}]}>
      <Rotate_phone width={Sizes.size108} height={Sizes.size108} />
      <Text
        style={{
          marginTop: Sizes.size20,
          ...FontStyle.body_2,
          color: Colors.white,
        }}>
        please titl your device to horizontal mode
      </Text>
    </View>
  );
};

export default RotatePphone;
