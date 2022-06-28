import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const Frame = () => {
  const {container, title, subtitle, sub_title, background} = styles();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          style={background}
          source={require('../../../../assets/Image/lessons/lesson5/frame.png')}>
          {/*<View style={{paddingHorizontal: Padding.horizontal}}>*/}
          {/*<Header onPress={() => navigation.goBack()} />*/}
          {/*</View>*/}

          <Text style={title}> Left Alone</Text>
        </ImageBackground>
        <View style={container}>
          <Text style={sub_title}>
            I had invited a group of friends to my house. When it got late
            everyone left, except for one male friend. I was aware that I did
            not want him to stay. I paid attention to the uncomfortable feeling
            I had being alone in my house with him. I thought about my options
            and decided to ask him to leave. He didn’t. Then he started touching
            me. I began to cry and shake. I thought about what I could do next.
            I decided to repeat the sentence “I asked you to leave” multiple
            times. Eventually he left. After he left, I was filled with
            questions about what had happened, like why I had invited him. Then
            I remembered learning about ‘TELL’ in my Empowerment Self Defense
            class. I thought about who I could tell. I chose to tell the teacher
            of the ESD course I was taking. She told me that she was very proud
            of how I reacted and thanked me for telling her. She also explained
            that the shaking was my body’s way of unfreezing and allowing me to
            react. And maybe most importantly, she told me that what had
            happened was NOT MY FAULT! After telling her my story I felt very
            strong.
          </Text>

          <View
            style={{
              height: deviceInfo.small_screen ? Sizes.size100 : Sizes.size200,
              justifyContent: 'center',
            }}>
            <Button text="Next" onPress={() => navigation.navigate('Outro5')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Frame;
