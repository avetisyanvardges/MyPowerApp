import React from 'react';
import Background from '../../../../../assets/Image/background/commintmentBg.png';

import {ImageBackground, ScrollView, Text} from 'react-native';
import {styles} from '../../Story/styles';
import {View} from 'react-native-animatable';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import {Sizes} from '../../../../../assets/RootStyles';
import {useNavigation} from '@react-navigation/native';

const StoryScreen1 = ({setScreen}) => {
  const {top_content,center_content,bottom_content,background, title, subtitle} = styles();
  const navigation = useNavigation();
  return (
    <ImageBackground style={background} source={Background}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>Story that makes you think </Text>

      </View>

        <View
          style={center_content}>
          <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={subtitle}>
            {"On my way home I stopped to pick a little something up, feeling very proud of myself for not forgetting. I am horrible when it comes to birthdays. I barely remember my own. \n" +
            "\n" +
            "This time I had gotten something and it was going to be on time. I was pretty sure that my partner was going to just love it. So, when I walked into the apartment with that stupid little smile on my face, it was all that I could do to keep them from guessing there was a little box behind my back.\n" +
            "\n" +
            "The gratitude and love was overwhelming and before I knew it I was being kissed quite passionately. Somehow, this “thank you” kiss had gotten intense. \n" +
            "\n" +
            "I attempted to pull back but was swept up in the flurry of hands and the intensity of the speed of it all. Next thing I knew I was half undressed and we were having intercourse. I am not exactly sure how this happened. Yes, I know that sounds funny. But I really wasn’t expecting or asking for it. Yet, it happened.\n" +
            "\n" +
            "It happened. I was apart of it, and yet, I felt empty. I was not asked. Yet, I didn’t protest. I am not sure how I feel at this point, but I do know one thing, things will never be the same."}
          </Text>
          </ScrollView>
        </View>
        <View style={bottom_content}>
          <Button
            text={'Next'}
            onPress={() => setScreen('story2')}
          />
        </View>
    </ImageBackground>
  );
};

export default StoryScreen1;
