import React, {useEffect, useState} from 'react';
import Orientation from 'react-native-orientation-locker';
import Background from '../../../../assets/Image/background/lesson4/TellBg.png';
import Header from '../../../../components/Header';
import {View} from 'react-native-animatable';
import {deviceInfo} from '../../../../assets/deviceInfo';
import {BorderStyles, Colors, Sizes} from '../../../../assets/RootStyles';
import {
  ImageBackground,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {vScale} from '../../../../assets/RootStyles/Scale';
import {Button} from '../../../../components/Button';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import Close from '../../../../assets/Svgs/x.svg';
import VoiceRecord from '../../../../components/AudioComponents/VoiceRecord';
import {isEmpty} from 'lodash';

const SomethingToTell = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Orientation.lockToPortrait();
      setWrite('');
    });

    return unsubscribe;
  }, [navigation]);
  const screen_title =
    "Is there something you'd like to say or write summarizing this class?";
  const {background, title, skip_content, subtitle, modalView, text} = styles();
  const [modalVisible, setModalVisible] = useState(false);
  const [write_type, setWrite] = useState();

  return (
    <>
      {write_type !== 'Record' ? (
        <ImageBackground style={background} source={Background}>
          <Header onPress={() => navigation.goBack()} rightIcon={true} />
          <View
            style={{marginTop: deviceInfo.ios ? Sizes.size30 : Sizes.size40}}>
            <Text style={title}>{screen_title}</Text>
            {write_type === 'Journal' && (
              <View style={{marginTop: vScale(16), zIndex: 999}}>
                <TextInput
                  style={{
                    padding: Sizes.size10,
                    backgroundColor: Colors.white,
                    borderWidth: BorderStyles.widths.border2,
                    borderColor: BorderStyles.color.gray,
                    borderRadius: BorderStyles.radius.xs,
                    minHeight: Sizes.size150,
                    maxHeight: Sizes.size250,
                  }}
                  multiline
                  textAlignVertical="top"
                  placeholder="Write here"
                />
              </View>
            )}
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: deviceInfo.small_screen
                ? Sizes.size20
                : Sizes.size0,
            }}>
            <Button
              containerStyle={{marginTop: Sizes.size30}}
              text="Yes"
              onPress={() => {
                if (isEmpty(write_type)) {
                  setModalVisible(true);
                } else {
                  navigation.navigate('DidYouKnow');
                }
              }}
            />
            {isEmpty(write_type) && (
              <View style={skip_content}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DidYouKnow');
                  }}>
                  <Text style={subtitle}>Skip</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ImageBackground>
      ) : (
        <VoiceRecord
          screen_title={screen_title}
          background_source={Background}
          finish_modal={true}
          finish_modal_title={'Find your recordings'}
          finish_modal_content={
            'You can always go back to your recordings, selfies, vocal exercises and more in your profile tab at the navigation menu'
          }
          finish_modal_btntext={'Next'}
          next_press={() => navigation.navigate('DidYouKnow')}
        />
      )}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={{backgroundColor: 'rgba(17,17,17,0.3)', flex: 1}}>
          <View style={modalView}>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: Sizes.size20,
                textAlign: 'center',
              }}>
              <SvgXml xml={Close} width={Sizes.size22} height={Sizes.size22} />
              <Text style={text}>Close</Text>
            </View>
            <View
              style={{
                marginVertical: deviceInfo.small_screen
                  ? Sizes.size1
                  : Sizes.size20,
              }}>
              <Button
                style={{width: 335}}
                text={'Record'}
                onPress={() => {
                  setWrite('Record');
                  setModalVisible(false);
                }}
              />
            </View>
            <View
              style={{
                marginVertical: deviceInfo.small_screen
                  ? Sizes.size10
                  : Sizes.size10,
              }}>
              <Button
                style={{width: 335}}
                text={'Video'}
                onPress={() => {
                  setWrite('Journal');
                  setModalVisible(false);
                }}
              />
            </View>
            <View
              style={{
                marginVertical: deviceInfo.small_screen
                  ? Sizes.size10
                  : Sizes.size10,
              }}>
              <Button
                style={{width: 335}}
                text={'Journal'}
                onPress={() => {
                  setWrite('Journal');
                  setModalVisible(false);
                }}
              />
            </View>
            <Text style={{subtitle}}>
              All of the material you write and record is for your use only and
              can be reviewed in your MyJournal section of your homepage.{' '}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SomethingToTell;
