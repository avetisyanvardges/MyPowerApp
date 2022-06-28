const INITIAL_STATE = {
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FIntro%20Outro%2FLesson%205%20-%20Intro.mp4?alt=media&token=78705449-8a6a-4136-af61-e50d7a8d3f26',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FIntro%20Outro%2FLesson%205%20-%20Outro.mp4?alt=media&token=385dd843-e159-411e-81a2-0545090ada0b',
  },
  defoult_video:
    'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FWorkout%20Room%20-%20Moving%20in%20Safety%20Stance%2FLesson%205%20-%20Workout%20Room%20-%20Moving%20in%20Safety%20Stance.mp4?alt=media&token=16a2caa9-b581-4a26-a1be-afebc6df9657',
  Shoulder_grab:
    'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FWorkout%20Room%20-%20Moving%20in%20Safety%20Stance%2FLesson%205%20-%20Workout%20Room%20-%20Rear%20Shoulder%20Grab.mp4?alt=media&token=4955395f-5537-4a84-a086-f768c7cb29d6',
  L_M_A:
    'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FNon-exercise%20videos%2FLesson%205%20-%20Verbal%20-%20Leave%20me%20alone.mp4?alt=media&token=38e84694-5773-4afa-87be-a0988e997372',

  a_Z: {
    louder:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FNon-exercise%20videos%2FLesson%205%20-%20A%20to%20Z%20Getting%20Louder-1.mp4?alt=media&token=ba434f0c-e4ec-4b26-8999-2563854cded9',
    angrier:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FNon-exercise%20videos%2FLesson%205%20-%20A%20to%20Z%20Getting%20Angrier-1.mp4?alt=media&token=ef440235-fa34-4309-9dd0-68bbbde56d6d',
  },
  z_a: {
    quieter:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%205%2FNon-exercise%20videos%2FLesson%205%20-%20A%20to%20Z%20Getting%20Quieter-1.mp4?alt=media&token=0af353e9-10d2-4355-8d98-63e892b56e99',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
