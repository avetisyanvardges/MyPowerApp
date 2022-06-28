import React from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Colors,
  FontStyle,
  fullScreen,
  Sizes,
} from '../../../../../assets/RootStyles';
import {Close} from '../../../../../assets/Svgs';
import {Button} from '../../../../../components/Button';

const UnCorrect = ({title, text, next}) => {
  const {width, height} = useWindowDimensions();
  const inset = useSafeAreaInsets();

  return (
    <View
      style={{
        width: width + inset.left,
        height: height + inset.left,
        position: 'absolute',
        zIndex: 999,
        backgroundColor: '#F8C9D6',
      }}>
      <ScrollView>
        <View style={{marginTop: Sizes.size20, marginLeft: Sizes.size20}}>
          <Close
            width={Sizes.size18}
            height={Sizes.size18}
            color={Colors.black}
          />
        </View>
        <View style={{marginHorizontal: Sizes.size60}}>
          <Text style={{...FontStyle.headline_5, color: Colors.black}}>
            {title}
          </Text>
          <View style={{}}>
            <Text
              style={{
                ...FontStyle.body_1,
                color: Colors.black,
              }}>
              {text}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingHorizontal:
              fullScreen.height < 800 ? Sizes.size20 : Sizes.size40,
            paddingVertical: fullScreen.height < 800 ? 0 : Sizes.size20,
          }}>
          <View
            style={{
              width: Sizes.size120,
              height: Sizes.size70,
              marginVertical: 10,
            }}>
            <Button text={'Next'} onPress={next} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UnCorrect;
