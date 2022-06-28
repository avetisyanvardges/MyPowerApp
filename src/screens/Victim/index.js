import React from 'react';
import VideoPlayer from '../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Victim = () => {
  const Victim = useSelector(store => store.onBoarding.Victim_video);

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Victim Blaming Disclaimer'}
      closePress={() => navigation.navigate('Poses', {screen: 'job'})}
      backPress={() => navigation.navigate('Poses', {screen: 'job'})}
      onPress={() => navigation.navigate('Poses', {screen: 'job'})}
      source={Victim}
      sheet_text={'Super! You got this!'}
      description={
        'Statistically speaking, chances are pretty high that you have experienced some sort of abuse or violence in your past.\n' +
        '\n' +
        'It is important for us to say that we believe that nothing like that should have happened to you and that the fault lies in the hands of the person who perpetrated that violence. No matter the circumstances, YOU ARE NOT TO BLAME.\n' +
        ' \n' +
        'The more empowerment tools you have the better chance you have to respond to violence as it is developing. The majority of cases of violence/abuse develop over time. In order to succeed, perpetrators of violence need access, isolation, and silence. \n' +
        'This APP is meant to help you develop tools to deprive perpetrators of these conditions so that we interrupt violence before it has had a chance to set roots and grow.\n' +
        '\n' +
        'You are not responsible for the perpetration of violence, but you can become ABLE to RESPOND to violence. We want everyone, including you, to have the tools to be Response-ABLE.\n' +
        '\n' +
        'While it is disheartening to think about how much violence we live with, the good news is that there is so much we can do about it! Good for you for starting this process! You are now part of the solution to changing the culture of violence and making our world a safer place.'
      }
    />
  );
};

export default Victim;
