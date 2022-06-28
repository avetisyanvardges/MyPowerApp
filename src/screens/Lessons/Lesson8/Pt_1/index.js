import React from 'react';
import VideoPlayer from '../../../../components/VideoComponents/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Pt_1 = () => {
  const muscle = useSelector(store => store.lesson_8.Non_exercise.part_1);

  const navigation = useNavigation();

  return (
    <VideoPlayer
      video_name={'Telling about telling Pt1'}
      closePress={() => navigation.navigate('Impact')}
      backPress={() => navigation.navigate('Impact')}
      onPress={() => navigation.navigate('Impact')}
      description={
        'One night while I was waiting for a class to start, I mentioned to a friend that I was beginning my ninth hour of training that week. \n' +
        '“Nine hours? What have you been doing?” She asked.\n' +
        "“I'm taking IMPACT,” I told her. “I had my first class this week.”\n" +
        'She got this look on her face. “Oh, f$*^!!!” was the response that eventually came.\n' +
        "I was a little surprised. We were friends, but I didn't know her that well (yet). Clearly, she'd figured out, even though I'd never shared anything that personal with her, that I was taking self-defense for a reason, and that there were some not-so-nice things in my past. She'd taken IMPACT, and she instinctively felt that it wasn't going to be easy for me. \n" +
        "She went on to say, “Make sure you create a support circle for yourself. I'd be happy to be part of that circle if you need.”\n" +
        " Then class started so the conversation ended. I thought the subject would just fizzle, but she didn't let that happen. From that moment on, she started to check on me regularly. It was hard for me, because I'm a really private person. But she was right. The five weeks of my IMPACT class, and the three months that followed, were excruciatingly difficult for me. And she knew it. She checked on me regularly, and eventually, she sent me a text asking, “Someday, you're going to tell me what's bugging you. Right?”\n" +
        "It took me a while to say yes. I wanted to make sure I was ready, and more importantly, I wanted to make sure she was ready. I know my story isn't an easy one to hear, and I feel guilty burdening anyone with it. After a lot of negotiating, we finally agreed that we'd talk in person. We chose a space where I’d feel safe and set a date and time. When the time came, we found a couch to sit on and made some awkward small talk. Honestly, I could barely even bring myself to look at her. She put a pillow behind her head, sat back, and just waited. "
      }
      source={muscle}
      sheet_text={'That was a good one!'}
    />
  );
};

export default Pt_1;
