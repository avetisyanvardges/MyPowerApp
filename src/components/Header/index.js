import React from 'react';
import {ArrowLeft} from '../../assets/Svgs';
import {Colors, Sizes} from '../../assets/RootStyles';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {OutlinePlay} from '../../assets/Svgs/lesson_1/OutlinePlay';
import {Close} from '../../assets/Svgs/video/Close';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import Left from '../../assets/Image/lessons/lesson3/white_left.svg';
import {hScale} from '../../assets/RootStyles/Scale';

const Index = ({onPress, onLayout, close, rightIcon, back_text_style}) => {
  const {header, left_container, back_text, btnContainerStyle, btnTextStyle} =
    styles();
  const inset = useSafeAreaInsets();
  return (
    <View
      onLayout={onLayout}
      style={[header, {paddingTop: inset.top || Sizes.size40}]}>
      <Pressable onPress={onPress} style={left_container}>
        {close ? (
          <Close
            width={Sizes.size25}
            height={Sizes.size25}
            color={Colors.white}
          />
        ) : (
          <>
            {back_text_style ? (
              <SvgXml
                xml={Left}
                width={hScale(Sizes.size25)}
                height={hScale(Sizes.size12)}
              />
            ) : (
              <ArrowLeft
                width={Sizes.size25}
                height={Sizes.size25}
                color={Colors.black}
              />
            )}

            <Text style={back_text_style ? back_text_style : back_text}>
              Back
            </Text>
          </>
        )}
      </Pressable>
      {rightIcon && (
        <View style={{justifyContent: 'flex-end'}}>
          <Pressable onPress={onPress} disabled={true}>
            <View style={[btnContainerStyle]}>
              <Text style={btnTextStyle}>Bk2Baln</Text>
              <OutlinePlay width={Sizes.size20} height={Sizes.size20} />
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Index;
