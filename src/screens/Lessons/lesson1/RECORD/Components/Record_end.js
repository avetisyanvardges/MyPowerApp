import React, {useEffect} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {styles} from '../styles';
import Header from '../../components/header';
import {SvgXml} from 'react-native-svg';
import refresh from '../../../../../assets/Svgs/lesson_1/rotate-ccw.svg';
import {hScale} from '../../../../../assets/RootStyles/Scale';
import Clap from '../../../../../assets/Svgs/clap.svg';
import {useNavigation} from '@react-navigation/native';

const RecordEndScreen = () => {
  const navigation = useNavigation();
  useEffect([initialized, itemHeight, selectedIndex, sView]);
  const {
    container,
    title_container,
    warmup_title,
    record_text,
    modalView,
    title,
    subtitle,
    gotIt,
  } = styles();
  useEffect(modalVisible.true);
  return (
    <ImageBackground
      resizeMode={'cover'}
      source={require('../../../../../assets/Image/background/lesson1/recordBg.png')}
      style={container}>
      <Header onPress={() => navigation.goBack()} rightIcon={true} />
      <ScrollView>
        <View style={title_container}>
          <SvgXml
            xml={Clap}
            width={hScale(130)}
            height={hScale(70)}
            style={{marginVertical: 50}}
          />
          <Text style={warmup_title}>Good Job, Yudit!</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <SvgXml xml={refresh} width={hScale(30)} height={hScale(25)} />
            <Text style={record_text}>Record again</Text>
          </View>
        </View>
      </ScrollView>
      {/*<Modal*/}
      {/*animationType="slide"*/}
      {/*transparent={true}*/}
      {/*visible={modalVisible}*/}

      {/*>*/}
      {/*<View style={{backgroundColor:'rgba(17,17,17,0.3)',flex:1}}>*/}
      {/*<View style={modalView}>*/}
      {/*<View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>*/}
      {/*<Bulb width={100} height={100}/>*/}
      {/*<Text style={title}>Find your recordings</Text>*/}

      {/*</View>*/}
      {/*<Text style={subtitle}>You can always go back to your recordings, selfies, vocal exercises and more in your profile tab at the navigation menu</Text>*/}
      {/*<TouchableOpacity onPress={()=>setModalVisible(false)}>*/}
      {/*<Text style={gotIt}>Got it! Thanks</Text>*/}
      {/*</TouchableOpacity>*/}
      {/*</View>*/}
      {/*</View>*/}
      {/*</Modal>*/}
    </ImageBackground>
  );
};

export default RecordEndScreen;
