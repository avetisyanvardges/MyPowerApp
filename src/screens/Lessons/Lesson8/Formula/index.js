import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {styles} from './styles';
import {Sizes} from '../../../../assets/RootStyles';
import Header from '../../../../components/Header';
import {Button} from '../../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {deviceInfo} from '../../../../assets/deviceInfo';

const Formula = ({setScreen}) => {
  const navigation = useNavigation();
  const {title, background, subtitle, bold_text} = styles();
  return (
    <ImageBackground
      style={background}
      source={require('../../../../assets/Image/background/lesson8/lesson_8Bg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <Text style={title}>The Formula</Text>
        <Text style={subtitle}>
          In the story we read, the friend sensed that something had happened to
          the storyteller in her past. There are many books that talk about how
          past trauma affects our present in ways that can be seen or felt. In
          other words, whether or not you directly express what happened in your
          past, your body, your person, your being will “tell.” How to be a good
          reciever of a story? We teach a formula:
        </Text>
        <Text style={bold_text}>
          I am honored that you chose me to hear your story.
        </Text>
        <Text style={bold_text}>
          This should have never happened to you and I am sorry that it did.
        </Text>
        <Text style={bold_text}>What do you need from me right now?</Text>

        <Text style={subtitle}>
          Understanding each part: We acknowledge that it is not easy to share a
          traumatic event. Even success stories entail a difficult situation
          where the storyteller might doubt the wisdon in how they acted. We
          receive the story without judgement and without needing to pry. We are
          a safe container. It is not our responsibility to fix or advise, just
          to listen. The fact that they chose us to share with is an honor. That
          being said, it is our right to decide if we are up to the task, and/or
          if this is the right place or time, and to get support ourselves for
          being the receptacle of a difficult story. We too deserve self-care
          and support.
        </Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginTop: deviceInfo.small_screen ? Sizes.size30 : Sizes.size40,
          }}>
          <Button
            text="Next"
            onPress={() => navigation.navigate('GroundingTechnique')}
            containerStyle={{marginBottom: 50}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Formula;
