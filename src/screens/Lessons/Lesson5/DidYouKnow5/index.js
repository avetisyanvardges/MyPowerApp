import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Book from '../../../../assets/Svgs/lesson_1/book.svg';
import {SvgXml} from 'react-native-svg';
import {hScale} from '../../../../assets/RootStyles/Scale';
import {useNavigation} from '@react-navigation/native';
import Footer from '../../lesson1/components/footer';
import Header from '../../../../components/Header';
import arrowRight from '../../../../assets/Svgs/lesson_1/Vector.svg';

const Know5 = () => {
  const navigation = useNavigation();

  const {container, title, title_container, text, faqText} = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      style={container}
      source={require('../../../../assets/Image/background/lesson1/knowCenterBg.png')}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={{paddingHorizontal: hScale(20)}}>
          <SvgXml
            xml={Book}
            width={hScale(100)}
            height={hScale(100)}
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              left: '40%',
              zIndex: 2,
            }}
          />
          <Text style={title}>Did you know?</Text>

          <View style={title_container}>
            <Text style={text}>
              The evaluation of Isolation to Empowerment self-defense program in
              New Zealand specifically outlines how “the emphasis on use of
              voice was valued by many [participants], enabling them to get a
              sense of the power of their own voice as well as the confidence
              that this was something almost every girl or woman could access,
              including those who were elderly or in wheelchairs.
            </Text>
          </View>
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
              marginVertical: 20,
            }}>
            <Text style={faqText}>Problem with TRY</Text>
            <SvgXml xml={arrowRight} width={hScale(10)} height={hScale(20)} />
          </TouchableOpacity>
          {/*<Image source={require('../../../../assets/Image/background/lesson1/knowBottomBg.png')} style={{width: 200, height: 50, position: 'absolute', right: 200, bottom: 0}}/>*/}
          <View>
            <Footer onPress={() => navigation.navigate('Frame')} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Know5;
