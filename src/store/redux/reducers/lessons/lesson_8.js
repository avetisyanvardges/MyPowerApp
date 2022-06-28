const INITIAL_STATE = {
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%208%2FIntro%20Outro%2FLesson%208%20-%20Intro.mp4?alt=media&token=9b08f3c8-3f66-450d-884d-a11df3465724',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%208%2FIntro%20Outro%2FLesson%208%20-%20Outro.mp4?alt=media&token=a670a6f8-11c3-4b91-9f18-fdc649409641',
  },
  Non_exercise: {
    muscle:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%208%2FNon-exercise%20videos%2FLesson%208%20-Embarrasment%20Muscle.mp4?alt=media&token=2ca67045-5f6a-4e2c-b39c-09ff9f6e0c82',
    part_1:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%208%2FNon-exercise%20videos%2FTelling%20about%20Telling%20Part%201.mp4?alt=media&token=70436e37-6f92-4378-b1b8-347fda8b99c3',
    part_2:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%208%2FNon-exercise%20videos%2FTelling%20about%20Telling%20Part%202.mp4?alt=media&token=49693ab6-4e64-4678-a97f-631ab028629d',
    impact:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%208%2FNon-exercise%20videos%2FLesson%208-%20WHAT%20is%20IMPACT.mp4?alt=media&token=1c610342-1493-4123-a93f-1f9c4fc5cc4c',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
