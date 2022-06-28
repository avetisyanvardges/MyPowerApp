import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {Button} from '../Button';
import Background from '../../assets/Image/background/job.png';
import {Colors, Sizes} from '../../assets/RootStyles';
import {SvgXml} from 'react-native-svg';
import Share from '../../assets/Svgs/poses/share-2.svg';
import {hScale} from '../../assets/RootStyles/Scale';
import {FellItYet, Ok, Powerful} from '../../assets/Svgs';
import {deviceInfo} from '../../assets/deviceInfo';

const Achievement = ({achievementImage, onPress, lesson}) => {
  const {
    header,
    btn_container,
    title,
    sub_title,
    big_title,
    subtitle,
    background,
    btn_text,
    answer_container,
    smile_container,
  } = styles();
  const [disabled, setDisabled] = useState(true);
  const [selected, setSelected] = useState('');
  const rateData = [
    {
      id: 1,
      text: 'Extremely Powerful!',
      icon: selected => (
        <Powerful
          width={Sizes.size25}
          height={Sizes.size25}
          color={selected ? Colors.white : Colors.bright_gray}
        />
      ),
    },
    {
      id: 2,
      text: 'It was OK.',
      icon: selected => (
        <Ok
          width={Sizes.size25}
          height={Sizes.size25}
          color={selected ? Colors.white : Colors.bright_gray}
        />
      ),
    },
    {
      id: 3,
      text: 'I didn’t feel it yet.',
      icon: selected => (
        <FellItYet
          width={Sizes.size25}
          height={Sizes.size25}
          color={selected ? Colors.white : Colors.bright_gray}
        />
      ),
    },
  ];

  const rateButtons = ({item}) => {
    const selectedItem = item.id === selected?.id;
    return (
      <TouchableOpacity
        style={[
          answer_container,
          {backgroundColor: selectedItem ? '#77CAE5' : '#fff'},
        ]}
        onPress={() => setSelected(item)}>
        <View style={smile_container}>{item.icon(selectedItem)}</View>
        <Text
          style={[
            btn_text,
            {color: selectedItem ? Colors.white : Colors.bright_gray},
          ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground style={background} source={Background}>
      <ScrollView>
        <View style={header}>
          <View style={btn_container}>
            <TouchableOpacity style={btn_container} onPress={() => {}}>
              <Text
                style={{marginHorizontal: 10, color: Colors.secondary_pink}}>
                Share
              </Text>
              <SvgXml xml={Share} width={hScale(18)} height={hScale(18)} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: Sizes.size40,
            marginBottom: Sizes.size20,
            alignItems: 'center',
          }}>
          {achievementImage}
          <Text style={big_title}>This Achievement is all you!</Text>
          <Text style={subtitle}>{`${lesson}  is in the bag!`}</Text>
          <Text style={title}>Let’s see how you feel</Text>
          <Text style={sub_title}>
            Please take a minute and reflect on how this lesson made you feel
          </Text>
        </View>
        <View>
          <FlatList
            keyExtractor={item => item.id}
            data={rateData}
            renderItem={rateButtons}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              paddingBottom: Sizes.size20,
            }}
            ItemSeparatorComponent={() => (
              <View style={{height: Sizes.size18}} />
            )}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginVertical: deviceInfo.small_screen ? Sizes.size60 : Sizes.size160,
          }}>
          <Button
            disabled={!selected}
            text={'Finish'}
            onPress={() => onPress(selected.text)}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Achievement;
