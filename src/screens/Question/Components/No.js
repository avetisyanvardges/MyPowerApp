import React from 'react';
import {ImageBackground, Linking, Text, View} from 'react-native';
import Background from '../../../assets/Image/background/questionBg.png';
import {styles} from '../../Question/styles';
import {Button} from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';

const NoScreen = () => {
  const {
    background,
    top_content,
    title,
    subtitle,
    sub_title,
    bottom_content,
    innerText,
  } = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground style={background} source={Background}>
      <View style={top_content}>
        <Text style={title}>Are you feeling safe?</Text>
        <Text style={subtitle}>You answered No.</Text>
        <Text style={sub_title}>
          Please reach out to a local organization for support. If you do not
          know whom to contact, please email us at{' '}
          <Text
            style={innerText}
            onPress={() => {
              Linking.openURL('https://www.mypwr.co.il/');
            }}>
            mysupport@mypwr.co.il{' '}
          </Text>
          and we will do what we can to find you a local solution.{' '}
        </Text>
      </View>
      <View style={bottom_content}>
        <Button
          text={'Ok, Got it'}
          onPress={() => navigation.navigate('ExperienceQuestionData')}
        />
      </View>
    </ImageBackground>
  );
};

export default NoScreen;
