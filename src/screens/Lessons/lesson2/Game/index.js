import * as React from 'react';
import {useState} from 'react';
import VideoGame from '../../../../components/VideoComponents/VideoGame';
import {TouchableOpacity, Vibration, View} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';

const Game = ({navigation}) => {
  const games = useSelector(store => store.lesson_2.Games);
  const [selectedColor, setSelectedColor] = useState();
  const [finished, setFinished] = useState(false);
  const [current_scene, setCurrentScene] = useState('scene_1');
  const {color_container} = styles();

  const game = {
    scene_1: {
      video: games.scene_1,
      nextScene: 'scene_2',
      lights: [
        {
          color_name: 'Red',
          color: '#EA202E',
          text: "Unless you know something that we don't about this situation, we would not call it red. ",
          sure: false,
        },
        {
          color_name: 'Yellow',
          color: '#FEF036',
          text: 'If this is yellow for you, check in and see if you can understand why.',
          sure: false,
        },
        {
          color_name: 'Green',
          color: '#1AAD54',
          text: 'Yes. This feels green to us too.',
          sure: true,
        },
      ],
    },
    scene_2: {
      video: games.scene_2,
      nextScene: 'scene_3',
      lights: [
        {
          color_name: 'Red',
          color: '#EA202E',
          text: 'This is red for us too! 💪🏼',
          sure: true,
        },
        {
          color_name: 'Yellow',
          color: '#FEF036',
          text: 'You may see this as cute. Or even as romantic. But that pushing her hand away and kissing her anyway, we call that boundary crossing. No consent, no kissy. ',
          sure: false,
        },
        {
          color_name: 'Green',
          color: '#1AAD54',
          text: 'As far as we are concerned, this is not green. Clearly, a boundary was set and ignored. While you might want to believe that this type of behavior is "showing how much they [fill in blank]" it really isn\'t. It is establishing dominance and/or control. If you are ok with a more domineering partner, that is your choice, just be sure that it is a choice and not more than that. ',
          sure: false,
        },
      ],
    },
    scene_3: {
      video: games.scene_3,
      nextScene: 'scene_4',
      lights: [
        {
          color_name: 'Red',
          color: '#EA202E',
          text: "While we wouldn't immediately consider this red, it really depends on so many other things, including what your gut is telling you. That inner voice, that intuition that you have is meant to help you feel danger and, honestly, safety too. Learning how to tune into those feelings is a really big part of this course. ",
          sure: false,
        },
        {
          color_name: 'Yellow',
          color: '#FEF036',
          text: 'Yes, we see this as yellow too. While they are not obviously doing something inappropriate, he DID ignore her boundary when she said no, it is a good idea to keep an eye on the behavior to see if it develops into something else. ',
          sure: true,
        },
        {
          color_name: 'Green',
          color: '#1AAD54',
          text: 'Yes, it could be, and still, might be worth continuing to check in with how you are feeling and how they are behaving. ',
          sure: false,
        },
      ],
    },
    scene_4: {
      video: games.scene_4,
      nextScene: 'scene_5',
      lights: [
        {
          color_name: 'Red',
          color: '#EA202E',
          text: "While we wouldn't immediately consider this red, it really depends on so many other things, including what your gut is telling you. That inner voice, that intuition that you have is meant to help you feel danger and, honestly, safety too. Learning how to tune into those feelings is a really big part of this course. ",
          sure: false,
        },
        {
          color_name: 'Yellow',
          color: '#FEF036',
          text: 'Yes, we see this as yellow too. While they are not obviously doing something inappropriate, he DID ignore her boundary when she said no, it is a good idea to keep an eye on the behavior to see if it develops into something else. ',
          sure: true,
        },
        {
          color_name: 'Green',
          color: '#1AAD54',
          text: 'Yes, it could be, and still, might be worth continuing to check in with how you are feeling and how they are behaving. ',
          sure: false,
        },
      ],
    },
    scene_5: {
      video: games.scene_5,
      lights: [
        {
          color_name: 'Red',
          color: '#EA202E',
          text: "While we wouldn't immediately consider this red, it really depends on so many other things, including what your gut is telling you. That inner voice, that intuition that you have is meant to help you feel danger and, honestly, safety too. Learning how to tune into those feelings is a really big part of this course. ",
          sure: false,
        },
        {
          color_name: 'Yellow',
          color: '#FEF036',
          text: 'Yes, we see this as yellow too. While they are not obviously doing something inappropriate, it is a good idea to keep an eye on the behavior to see if it develops into something else. ',
          sure: true,
        },
        {
          color_name: 'Green',
          color: '#1AAD54',
          text: 'Yes, it could be, and still, might be worth continuing to check in with how you are feeling and how they are behaving. ',
          sure: false,
        },
      ],
    },
  };

  const renderColors = ({item}) => {
    return (
      <TouchableOpacity
        disabled={!finished}
        onPress={() => {
          if (!item.sure) {
            Vibration.vibrate();
          }
          setSelectedColor(item);
        }}
        style={[
          color_container,
          {backgroundColor: item.color, opacity: finished ? 1 : 0.5},
        ]}
      />
    );
  };

  return (
    <VideoGame
      source={game[current_scene].video}
      lightData={game[current_scene].lights}
      current_scene={game[current_scene]}
      renderLightColor={renderColors}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
      setCurrentScene={setCurrentScene}
      setEnded={res => setFinished(res)}
      onPress={() => navigation.navigate('PROMO', {screen: 'finish'})}
      closePress={() => navigation.navigate('PROMO', {screen: 'finish'})}
    />
  );
};

export default Game;
