const INITIAL_STATE = {
  Victim_video:
    'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/OnBoarding%2FWelcome%20-%20Victim%20Blaming%20Disclaimer.mp4?alt=media&token=fd5c2383-e976-4b31-9093-1939d56b4b6b',
  questions: {
    question_1: {
      text: 'I feel I am a person of worth, at least on an equal basis with others.',
      answer: '',
      type: 'agree',
    },
    question_2: {
      text: 'I usually feel good about myself.',
      answer: '',
      type: 'agree',
    },
    question_3: {
      text: 'I have  a lot of confidence in the actions I undertake in my life. ',
      answer: '',
      type: 'agree',
    },
    question_4: {
      sub_text:
        'In a situation in which you were being assaulted by a man of at least average height and weight, how confident are you that you could…',
      text: 'use punches or strikes to hurt or disable him?',
      answer: '',
      type: 'confident',
    },
    question_5: {
      sub_text:
        'In a situation in which you were being assaulted by a man of at least average height and weight, how confident are you that you could…',
      text: 'use a kick to injure or disable him?',
      answer: '',
      type: 'confident',
    },
    question_6: {
      sub_text:
        'In a situation in which you were being assaulted by a man of at least average height and weight, how confident are you that you could…',
      text: 'prevent yourself from being injured by blocking or avoiding the blows?',
      answer: '',
      type: 'confident',
    },
    question_7: {
      text: "I don't speak my feelings in an intimate relationship when I know they will cause disagreement.",
      answer: '',
      type: 'agree',
    },
    question_8: {
      text: "When my partner's needs and feelings conflict with my own, I always state mine clearly.",
      answer: '',
      type: 'agree',
    },
    question_9: {
      text: 'Instead of risking confrontations in close relationships, I would rather not rock the boat.',
      answer: '',
      type: 'agree',
    },
    question_10: {
      text: 'I rarely express my anger at those close to me. ',
      answer: '',
      type: 'agree',
    },
    question_11: {
      text: "I think it's better to keep my feelings to myself when they do conflict with my partner's.",
      answer: '',
      type: 'agree',
    },
    question_12: {
      text: 'Asking for a raise is easy. ',
      answer: '',
      type: 'agree',
    },
    question_13: {
      text: "When someone pushes in front of me in a line, I won't say anything.",
      answer: '',
      type: 'agree',
    },
    question_14: {
      text: 'You better not argue with the boss. ',
      answer: '',
      type: 'agree',
    },
    question_15: {
      text: "I won't put up with sexual comments in the street. ",
      answer: '',
      type: 'agree',
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
