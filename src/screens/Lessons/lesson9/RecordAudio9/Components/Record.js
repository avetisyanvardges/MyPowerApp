import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../../../../components/AudioComponents/components/header';
import {SvgXml} from 'react-native-svg';
import {Rec} from '../../../../../assets/Svgs/lesson_1/Rec.svg';
import {Sizes} from '../../../../../assets/RootStyles';
import {styles} from '../styles';

const Record = ({setScreen}) => {
  const {record_text, text_container, record_btn, skip_content, text} =
    styles();
  return (
    <View style={{flex: 1}}>
      <Header back={true} backPress={() => {}} rightIcon={true} />
      <View style={{flex: 1}}>
        <View style={text_container}>
          <Text style={[record_text]}>Record yourself</Text>
          <Text style={text}>
            Now, record yourself doing your favorite power pose!
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={record_btn}>
          <Pressable
            onPress={() => setScreen('Photo')}
            style={{
              position: 'relative',
              top: 0,
            }}>
            <SvgXml xml={Rec} width={Sizes.size60} height={Sizes.size60} />
          </Pressable>
        </View>
        <View style={skip_content}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={text}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Record;
