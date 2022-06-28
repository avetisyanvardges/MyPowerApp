import React, {useEffect} from 'react';
import {BackHandler, ImageBackground, ScrollView, Text, TextInput, View} from 'react-native';

import {styles} from '../../EmproweringAffirmation/styles';
import {BorderStyles, Colors, Padding, Sizes,} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {hScale, vScale} from '../../../../../assets/RootStyles/Scale';
import {Button} from '../../../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const WarmupScreen4 = ({setScreen}) => {
  const {top_content, center_content,bottom_content,title, background, subtitle, skip_content} = styles();
  const navigation = useNavigation();
    const backAction = () => {
        navigation.goBack()
        return true;
    };
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
  return (
      <ImageBackground
        style={background}
        source={require('../../../../../assets/Image/background/lesson4/warmupBg3x.png')}>
          <Header onPress={() => navigation.goBack()} rightIcon={true} />
          <View style={top_content}>
              <Text style={title}>Warmup </Text>
          </View>


              <View style={center_content}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                  <Text style={subtitle}>
                      {"If you can move yourself into a public space for this warmup that would be great.\n" +
                      "\n" +
                      "If not, you can do this by imagining yourself in a space with people walking by. Maybe a coffee shop in a mall or on the sidewalk. \n" +
                      "\n" +
                      "How many people that you see would you want to be friends with? Yes, total strangers. Take a look and see if there is anyone you would be interested in being introduced to.\n" +
                      "\n" +
                      "Is there anything happening within your area of vision that you feel is off, or seems like there is conflict brewing? A louder than usually conversation? A disgruntled customer or employee?\n" +
                      "\n" +
                      "If you can see some sort of conflict taking place, how is your body reacting to that?\n" +
                      "\n" +
                      "If there is no apparent conflict, how about something happy or exciting?\n" +
                      "\n" +
                      "Does your body react to that too?"}
                  </Text>
                  <TextInput
                      style={{
                          padding: hScale(10),
                          backgroundColor: Colors.white,
                          borderWidth: BorderStyles.widths.border2,
                          borderColor: BorderStyles.color.gray,
                          borderRadius: BorderStyles.radius.xs,
                          minHeight: vScale(130),
                          maxHeight: vScale(250),
                          justifyContent: 'flex-start',
                      }}
                      multiline
                      textAlignVertical="top"
                      placeholder="Write here"
                  />
                  </ScrollView>
              </View>

          <View style={{marginTop: vScale(16), zIndex: 999}}>

          </View>

          <View
            style={bottom_content}>
            <Button
              text="Next"
              onPress={() => setScreen('think')}
            />
          </View>
      </ImageBackground>
  );
};

export default WarmupScreen4;
