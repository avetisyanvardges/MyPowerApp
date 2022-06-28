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
import Header from '../../../../components/Header';
import arrowRight from '../../../../assets/Svgs/lesson_1/Vector.svg';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';

const Know = () => {
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
              {'Did you know that the word "try" can stop us from succeeding? \n' +
                '\n' +
                'Think about it. \n' +
                '\n' +
                'Try to touch your nose. If you did touch your nose then you weren\'t just trying, you did it. Just trying means that you don\'t have to succeed. Do it again and "just try" to touch your nose. \n' +
                '\n' +
                'See that finger right in front of your eyes? That is what the word "try" does to your brain. It lets you stop right before succeeding. Also, just trying leaves the door open to "well, at least I tried." \n' +
                '\n' +
                'How many times have you said to someone "I\'ll try to make it," knowing full well that your answer left room for not going, because that was really what you wanted to say in the first place? How can we get clearer with our intentions? "I will do everything in my power to join you!" This is a committment to make it happen, and it leaves room for things that are beyond our control. \n' +
                '\n' +
                'Now, the only person you need to worry about is yourself. Are you really committed to going? Great! If not, learn how to say gracefully, "I appreciate the invitation, but I just don\'t see it happening right now." '}
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
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: Sizes.size20,
            }}>
            <Button
              text="Next"
              onPress={() => navigation.navigate('SuccessStory3')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Know;
