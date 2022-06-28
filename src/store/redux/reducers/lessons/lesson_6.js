const INITIAL_STATE = {
  Phrases: {
    hey: {
      sub_text: 'Lines for Leaving',
      text: 'Hey, time for me to go. Thanks for inviting me.',
      audio:
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FAudio%2FLesson%206%20-%20Audio%20-%20Hey%20its%20time%20for%20me%20to%20go%20thanks%20for%20inviting%20me%20(Yudit).m4a?alt=media&token=cfb767f6-a454-4172-98ec-7f62f7acb680',
    },
    home: {
      sub_text: 'Lines for Leaving',
      text: 'I am going home now. Thanks.',
      audio:
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FAudio%2FLesson%206%20-%20Audio%20-%20Im%20going%20home%20now%20thanks%20(Yudit).m4a?alt=media&token=a5ff51da-17ba-47a6-814c-9646d73e66db',
    },
    explain: {
      sub_text: 'Lines for Leaving',
      text: 'I am leaving now and I don’t need to explain.',
      audio:
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FAudio%2FLesson%206%20-%20Audio%20-%20Im%20leaving%20now%20and%20I%20dont%20need%20to%20explain%20(yudit).m4a?alt=media&token=49773843-1cee-4c7a-b99c-e8952368c50b',
    },
    done: {
      sub_text: 'Lines for Leaving',
      text: 'We are done. I am leaving.',
      audio:
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FAudio%2FLesson%206%20-%20Audio%20-%20Were%20done%20I%20am%20leaving%20(Yudit).m4a?alt=media&token=601043ab-3f85-4024-b4c6-d91ab0eb590f',
    },
    leaving: {
      sub_text: 'Lines for Leaving',
      text: 'I am leaving. ',
      audio:
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FAudio%2FLesson%206%20-%20Audio%20-%20I%20am%20leaving%20(Yudit).m4a?alt=media&token=919ed9e8-147e-44e3-9fff-d35ffa6a6341',
    },
    let_me: {
      text: 'Let me go.',
      audio:
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FAudio%2FLesson%206%20-%20Audio%20-%20let%20me%20go%20(Yudit).m4a?alt=media&token=24e96d5a-2442-4231-8e41-b0704af15bd4',
    },
    LET_ME_GO: {
      sub_text: 'Repeat the following 3 times',
      text: 'LET! ME! GO!',
      audio:
        'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FAudio%2FLesson%206%20-%20Audio%20-%20LET!%20ME!%20GO!%20(slower%20and%20lower).m4a?alt=media&token=1657cc7f-0d77-46b1-880b-a0b8aa8d5fb5',
    },
  },
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FIntro%20outro%2FLesson%206%20-%20Intro.mp4?alt=media&token=8ae28c6f-6b77-4a88-98d1-a2d6496b033e',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FIntro%20outro%2FLesson%206%20-%20Outro.mp4?alt=media&token=c4e045f8-d182-4e9b-8b8a-f280e2213407',
  },
  Video_Defoult: {
    fightIf:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FNon-exercise%20videos%2FLesson%206%20-%20Fight%20If%20(Horizontal).mp4?alt=media&token=19531fbe-b267-42f2-890a-a2acf06b7e4e',
  },
  Games: {
    Bar: 'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FGames%2FLesson%206%20-%20Game%201%20-%20Bar.mp4?alt=media&token=df6ba27c-6f85-49b7-b19f-39e3d7c2a25a',
    Electric:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FGames%2FLesson%206%20-%20Game%201%20-%20Electric%20Bill.mp4?alt=media&token=3cefebba-0f6f-4767-9df8-03e7826062b3',
    Tonight:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%206%2FGames%2FLesson%206-Come%20out%20with%20me%20tonight%20-Vertical-1.mp4?alt=media&token=37118c62-cb53-4a8a-b179-9ca311e68615',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
