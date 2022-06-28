import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from '../styles';
import Header from '../../components/header';
import Book from '../../../../../assets/Svgs/lesson_1/book.svg';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {Padding, Sizes} from '../../../../../assets/RootStyles';
import {Button} from '../../../../../components/Button';

const FaqKnowScreen = ({setScreen}) => {
  const navigation = useNavigation();

  const {container, title, title_container, text, bkt_text} = styles();
  const backAction = () => {
    setScreen('next');
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
      resizeMode={'cover'}
      style={container}
      source={require('../../../../../assets/Image/background/lesson1/knowCenterBg.png')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} rightIcon={true} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: Padding.horizontal,
            marginTop: Sizes.size13,
          }}>
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
          <View>
            <Text style={[title]}>Did you know?</Text>
          </View>
          <View style={title_container}>
            <Text style={text}>
              Beyond preventing actual assaults, such [ESD like] programmes are
              associated with decreased levels of fear; decreased levels of
              agreement with victim-blaming statements; increased knowledge
              about the realities of risk, one’s rights and the social causes of
              gendered violence; increased self-confidence, self-esteem and
              positive feelings about one’s body; and increased confidence in
              one’s ability to defend oneself, find support and support others
              to be safe and recover from violence
            </Text>
            <Text style={bkt_text}>(Murphy 2018)</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginVertical: Sizes.size50,
          }}>
          <Button
            text="Next"
            onPress={() => navigation.navigate('NotEveryVideo')}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default FaqKnowScreen;
