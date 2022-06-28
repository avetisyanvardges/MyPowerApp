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
import {Sizes} from '../../../../assets/RootStyles';

const DidYouKnow = () => {
  const navigation = useNavigation();

  const {container, title, title_container, text, faqText} = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      style={container}
      source={require('../../../../assets/Image/background/lesson1/knowCenterBg.png')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <View>
          <SvgXml
            xml={Book}
            width={Sizes.size100}
            height={Sizes.size100}
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
              “My instincts have failed me in the past why should I trust them
              now?” Instinct is the part of our nature that keeps us alive. We
              tend to think of instinct as limited to Fight, Flight, and Freeze,
              but researchers have found that there are other innate survival
              skills, such as, feigning and fawning. These are different forms
              of complying with an attacker or abuser in order to survive. While
              the goal is survival, being locked into any of these responses,
              because of past trauma and experiences, is not the healthiest way
              to live. Whatever system you created in order to survive abuse is
              what you needed to do then. And since you are here learning new
              ways of staying safe, you have succeeded. You are here now because
              you are interested in unlocking other survival skills that you
              have in you, and to develop new ones. Good for you!
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
            <Text style={faqText}>link to resource library</Text>
            <SvgXml xml={arrowRight} width={hScale(10)} height={hScale(20)} />
          </TouchableOpacity>
          {/*<Image source={require('../../../../assets/Image/background/lesson1/knowBottomBg.png')} style={{width: 200, height: 50, position: 'absolute', right: 200, bottom: 0}}/>*/}
          <View>
            <Footer onPress={() => navigation.navigate('Outro')} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default DidYouKnow;
