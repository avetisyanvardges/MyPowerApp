import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Pt_2 = () => {
  const muscle = useSelector(store => store.lesson_8.Non_exercise.part_2);

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Telling about telling Pt2'}
      closePress={() => navigation.navigate('Video_Audio')}
      backPress={() => navigation.navigate('Video_Audio')}
      onPress={() => navigation.navigate('Video_Audio')}
      source={muscle}
      description={
        'When I could finally speak, the first thing I wanted to do was set ground rules:\n' +
        "I don’t want to overwhelm you. There are things I might not share unless you ask. You can ask whatever you want, and I will decide whether or not I am comfortable answering. If either of us need a break, we will say so. And if the conversation becomes too much for either of us, we’ll end it and revisit at another time. She agreed. And finally, I started talking. For the first time, I told my story as a story. For the first time, I got to hear myself tell my story. Yes, a few people already knew the highlights. But I'd never heard it like that. I now had a full story with a beginning, middle and end. It took two hours, and I shared more than I was planning to. To my surprise though, a lot of that time was spent laughing. The experience wasn't dramatic or awful. There was no thunder or lightning, and the lights didn't go out. When it was finally time to go home and go to bed, I told her it was going to be weird when we saw each other again. She said, “It will.” We laughed again because we knew it was true.\n" +
        "The next morning, though I can't tell you exactly how, the world looked different. Brighter, somehow. Before I could text her to thank her for listening, she texted me to thank me for sharing. At the time, I didn't understand what she was thanking me for. Now, I think I'm starting to get it. Yes, it was weird when I saw her again, but the weirdness didn't last long. It was also a relief to know that I wasn't the only one who knew my story. I've always felt like I'm responsible for knowing my story, and sharing that responsibility felt good. In case you're wondering, yes, we're still friends, and we share a special bond that I will always treasure."
      }
      sheet_text={'That was a good one!'}
    />
  );
};

export default Pt_2;
