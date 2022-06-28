import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from '../../MidQuestion/styles';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Question3 = ({setScreen}) => {
  const {container, title, subtitle, background, content} = styles();
  const navigation = useNavigation();
  return (
    <View style={container}>
      <View style={{paddingHorizontal: Padding.horizontal}}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
      </View>
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/commintmentBg.png')}>
        <ScrollView>
          <Text style={title}>
            There are different reasons for stepping in different directions...
          </Text>
          <View style={content}>
            <Text style={subtitle}>
              If someone has come too close to you and is not backing up when
              you ask, you can take a nice long step to the back right (or left)
              corner to make distance and repeat your request, "Back off." There
              is some psychology behind this. 1) Stepping directly back can feel
              like a retreat or give the impression that you are intimidated. 2)
              Most of us do not have eyes in the back of our heads, and stepping
              back could mean falling off of a curb or bumping into something
              dangerous. When we have a choice, we move to a place that is safe.
              Not seeing what is going on behind us is just not safe enough. 3)
              There is something to be said for keeping your eyes forward if
              that is the direction you want to go. While this is a wonderful
              philosophy it is up to you to see if it feels right. Reality is
              that life beats us up at times, and how we get through it is up to
              us. Do we move confidently forward yelling "I got this!"? Or do we
              drown in the past of woulda, coulda, shoulda? Eyes forward is also
              about keeping your eyes on the problem; the person not respecting
              your boundaries.
            </Text>
          </View>
          <View
            style={{
              marginVertical: deviceInfo.small_screen
                ? Sizes.size75
                : Sizes.size30,
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Button text="Next" onPress={() => setScreen('sayA_z')} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Question3;
