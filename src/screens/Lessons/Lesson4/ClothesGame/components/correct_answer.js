import React from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {
  BackgroundColors,
  Colors,
  FontStyle,
  fullScreen,
  Sizes,
} from '../../../../../assets/RootStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Yellow_shirt} from '../../../../../assets/Svgs/lesson_4/Game/yellow_shirt';
import {Close} from '../../../../../assets/Svgs';
import {Red_shirt} from '../../../../../assets/Svgs/lesson_4/Game/red_shirt';
import {Green_shirt} from '../../../../../assets/Svgs/lesson_4/Game/green_shirt';
import {Button} from '../../../../../components/Button';

const Correct = ({sure, title, text, next}) => {
  const {width, height} = useWindowDimensions();
  const inset = useSafeAreaInsets();

  const shirts = {
    red: <Red_shirt width={Sizes.size200} height={Sizes.size200} />,
    yellow: <Yellow_shirt width={Sizes.size200} height={Sizes.size200} />,
    green: <Green_shirt width={Sizes.size200} height={Sizes.size200} />,
  };

  return (
    <View
      style={{
        width: width + inset.left,
        height: height + inset.left,
        position: 'absolute',
        zIndex: 999,
        backgroundColor: BackgroundColors.spray_blue,
      }}>
      <ScrollView>
        <View
          style={{
            position: 'absolute',
            top: -20,
            right: -20,
            transform: [{rotateZ: '10deg'}],
          }}>
          {shirts[sure]}
        </View>
        <View style={{marginTop: Sizes.size20, marginLeft: Sizes.size20}}>
          <Close
            width={Sizes.size18}
            height={Sizes.size18}
            color={Colors.white}
          />
        </View>
        <View style={{marginHorizontal: Sizes.size60}}>
          <Text style={{...FontStyle.headline_5, color: Colors.white}}>
            {title}
          </Text>
          <View style={{}}>
            <Text
              style={{
                ...FontStyle.body_1,
                color: Colors.white,
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
          <View style={{width: Sizes.size120, height: Sizes.size70}}>
            <Button text={'Next'} onPress={next} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Correct;
