import React, {useEffect} from 'react';
import {
  BackHandler,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import {end} from '../../../../assets/Image/background/lesson10/endIcon.svg';
import {answer} from '../../../../assets/Image/background/lesson10/answer.svg';
import {user} from '../../../../assets/Image/background/lesson10/userIcon.svg';
import {video} from '../../../../assets/Image/background/lesson10/videoIcon.svg';
import {message} from '../../../../assets/Image/background/lesson10/messageIco.svg';
import {Sizes} from '../../../../assets/RootStyles';
import {useDispatch, useSelector} from 'react-redux';
import {makeAction} from '../../../../store/makeAction';
import {SET_CURRENT_COUNT} from '../../../../types/LESSON_10';
const CallEnded = ({setScreen}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    top_content,
    title,
    end_call,
    small_text,
    subtitle,
    background,
    bottom_content,
    center_content,
  } = styles();
  const count = useSelector(store => store.lesson_10.render_count);

  const backAction = () => {
    setScreen('recordEnd');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const new_count = count + 1;
      dispatch(makeAction(SET_CURRENT_COUNT, new_count));
      if (count === 4) {
        navigation.navigate('Balance');
      } else {
        navigation.navigate('IncomingCall');
      }
    }, 3000);
  }, []);
  return (
    <View style={background}>
      <View style={top_content}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SvgXml xml={end} width={Sizes.size10} height={Sizes.size10} />
          <Text style={end_call}>Call ended</Text>
        </View>
        <Text style={title}>Incoming call</Text>
        <Text style={subtitle}>{count} of 4</Text>
      </View>
      <View style={center_content}>
        <SvgXml xml={user} width={Sizes.size20} height={Sizes.size20} />
        <Text style={small_text}>View contact</Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: Sizes.size100,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <SvgXml xml={answer} width={Sizes.size70} height={Sizes.size70} />
          <SvgXml
            style={{marginRight: 20, marginLeft: 15}}
            xml={message}
            width={Sizes.size50}
            height={Sizes.size50}
          />
          <SvgXml xml={video} width={Sizes.size50} height={Sizes.size50} />
        </View>
      </View>
    </View>
  );
};

export default CallEnded;
