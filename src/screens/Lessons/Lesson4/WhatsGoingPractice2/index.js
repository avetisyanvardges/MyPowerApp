import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Header from '../../lesson1/components/header';
import {Sizes} from '../../../../assets/RootStyles';
import {Button} from '../../../../components/Button';

const WhatsGoing2 = ({navigation}) => {
  const {
    container,
    title_container,
    record_title,
    text_container,
    subtitle,
    skip_content,
  } = styles();
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../assets/Image/background/lesson4/WhatsGoingBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <Text style={record_title}>What’s Going on Here?</Text>
        </View>
        <View style={text_container}>
          <Text style={subtitle}>
            Now let's see how that might play out if someone is behaving in a
            threatening manner.
          </Text>

          <Button
            containerStyle={{width: 336, marginTop: Sizes.size30}}
            text="Let's practice that! "
            onPress={() => navigation.navigate('WgohPalm')}
          />
        </View>
        <View style={skip_content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WhatsGoing3');
            }}>
            <Text style={subtitle}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default WhatsGoing2;
