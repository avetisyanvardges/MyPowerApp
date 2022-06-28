import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../Poses/styles';
import Background from '../../../assets/Image/background/posesBG.png';
import {hScale} from '../../../assets/RootStyles/Scale';

import {
  Balanced,
  Invicible,
  Stronger,
  Supermom,
  Victory,
  Wonder,
} from '../../../assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../components/Button';

const PosesContentScreen = ({setScreen}) => {
  const {
    background,
    title,
    subtitle,
    itemA,
    btnText,
    top_content,
    bottom_content,
    center_content,
  } = styles();
  const [selectedItem, setSelectedItem] = useState();
  const navigation = useNavigation();

  const DATA = [
    {
      id: '1',
      title: 'stronger',
      image: (width, height) => (
        <Victory width={width} height={hScale(height)} />
      ),
    },
    {
      id: '2',
      title: 'stronger',
      image: (width, height) => (
        <Supermom width={width} height={hScale(height)} />
      ),
    },
    {
      id: '3',
      title: 'stronger',
      image: (width, height) => (
        <Stronger width={width} height={hScale(height)} />
      ),
    },
    {
      id: '4',
      title: 'stronger',
      image: (width, height) => (
        <Balanced width={width} height={hScale(height)} />
      ),
    },
    {
      id: '5',
      title: 'stronger',
      image: (width, height) => (
        <Wonder width={width} height={hScale(height)} />
      ),
    },
    {
      id: '6',
      title: 'stronger',
      image: (width, height) => (
        <Invicible width={width} height={hScale(height)} />
      ),
    },
  ];

  const itemPress = async item => {
    await setSelectedItem(item);
  };

  const Item = ({item, onPress}) => {
    return (
      <View style={[itemA]}>
        <TouchableOpacity
          // delayLongPress={9000}
          onPress={onPress}>
          {item.image(150, 210)}
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({item}) => (
    <Item item={item} onPress={() => itemPress(item)} />
  );
  return (
    <ImageBackground style={background} source={Background}>
      {selectedItem ? (
        <View style={{flex: 1}}>
          <View style={top_content}>
            <Text style={title}>That 20 second hold? </Text>
            <Text style={subtitle}>
              Well, it lets all of the cells in your body align with the feeling
              of that pose.{' '}
            </Text>

            {/*<View style={{marginTop: vScale(10),width:deviceInfo.small_screen?280:330}}>*/}
            {/*<Footer onPress={() => navigation.navigate('Back2Baln')} />*/}
            {/*</View>*/}
          </View>
          <View style={center_content}>{selectedItem.image(350, 350)}</View>
          <View style={bottom_content}>
            <Button
              text={'Next'}
              onPress={() => navigation.navigate('Back2Baln')}
            />
          </View>
        </View>
      ) : (
        <View>
          <FlatList
            data={DATA}
            ListHeaderComponent={() => {
              return (
                <>
                  <Text style={title}>Here are 6 pictures of power poses!</Text>
                  <Text style={subtitle}>
                    Pick one and hold it for 20 seconds. Yes, that sounds like a
                    long time, but there is a good reason!
                  </Text>
                  <View
                    style={{
                      alignItems: 'flex-end',
                      marginHorizontal: 20,
                      marginVertical: 20,
                    }}>
                    <TouchableOpacity
                      style={{
                        width: 146,
                        height: 30,
                        backgroundColor: '#BD3150',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8,
                      }}
                      text={'Skip for now'}
                      onPress={() => {
                        navigation.navigate('Back2Baln');
                      }}>
                      <Text style={btnText}>Skip for now</Text>
                    </TouchableOpacity>
                  </View>
                </>
              );
            }}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            extraData={setScreen}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default PosesContentScreen;
