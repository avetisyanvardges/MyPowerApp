import React from 'react';
import {Image, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {styles} from './styles';
import {hScale, vScale} from '../../assets/RootStyles/Scale';
import {useSelector} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {fullScreen} from '../../assets/RootStyles';
import * as RootNavigation from '../../RootNavigation';

const Intro = () => {
  const slides = useSelector(store => store.intro.slides);
  const {
    header_container,
    header,
    text,
    image_container,
    slide,
    dot,
    active_dot,
    btnContainerStyle,
    btnTextStyle,
  } = styles();

  const renderItem = ({item}) => {
    return (
      <View>
        <Animatable.View animation="fadeIn" style={header_container}>
          <View style={header}>
            <Text style={text}>{item.title}</Text>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          delay={600}
          style={[
            image_container,
            {
              top:
                item.key === 1 && fullScreen.height < 800
                  ? vScale(140)
                  : item.key === 2 && fullScreen.height < 800
                  ? vScale(190)
                  : item.key === 3 && fullScreen.height < 800
                  ? vScale(120)
                  : item.key === 2
                  ? vScale(250)
                  : vScale(195),
              left:
                item.key === 2 && fullScreen.height < 820
                  ? hScale(110)
                  : item.key === 2
                  ? hScale(110)
                  : 0,
            },
          ]}>
          <Image
            source={item.image}
            resizeMode={'contain'}
            style={[
              slide,
              {
                width: item.key === 2 ? '100%' : '120%',
              },
            ]}
          />
        </Animatable.View>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={btnContainerStyle}>
        <Text style={btnTextStyle}>Next</Text>
      </View>
    );
  };

  const onDone = () => {
    RootNavigation.navigate('UserData');
  };

  return (
    <AppIntroSlider
      keyExtractor={item => item.title}
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      renderNextButton={renderNextButton}
      renderDoneButton={renderNextButton}
      bottomButton
      activeDotStyle={active_dot}
      dotStyle={dot}
    />
  );
};
export default Intro;
