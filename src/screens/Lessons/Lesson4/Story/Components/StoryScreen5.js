import React, {useEffect} from 'react';
import Background from '../../../../../assets/Image/background/commintmentBg.png';

import {BackHandler, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../Story/styles';
import {View} from 'react-native-animatable';
import {deviceInfo} from '../../../../../assets/deviceInfo';
import {Button} from '../../../../../components/Button';
import {Sizes} from '../../../../../assets/RootStyles';
import Header from '../../../../../components/Header';
import {SvgXml} from 'react-native-svg';
import arrowRight from '../../../../../assets/Svgs/lesson_1/Vector.svg';

const StoryScreen5 = ({setScreen}) => {
  const {background,top_content, center_content,bottom_content,title,subtitle, faqText} = styles();
    const backAction = () => {
        setScreen('story4');
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
    <ImageBackground style={background} source={Background}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <View style={top_content}>
        <Text style={title}>The reason we feel...</Text>
          <Text style={subtitle}>
              {"it doesn't matter is that no matter who the players are, consent should be clear. It should be asked for, given or not, and respected. "}
          </Text>

          <TouchableOpacity
              style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  borderWidth: 1,
                  borderColor: 'rgba(0,0,0,0.13)',
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  paddingVertical: 10,
                  marginTop: Sizes.size100,
              }}>
              <Text style={faqText}>Read more about Consent </Text>
              <SvgXml
                  xml={arrowRight}
                  width={Sizes.size10}
                  height={Sizes.size20}
              />
          </TouchableOpacity>
      </View>
        <View style={center_content}>
        </View>
      <View
        style={bottom_content}>
        <Button
          text={'Next'}
          onPress={() => setScreen('challenge')}
        />
      </View>
    </ImageBackground>
  );
};

export default StoryScreen5;
