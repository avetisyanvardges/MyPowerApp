const INITIAL_STATE = {
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%204%2FIntro%20Outro%2FLesson%204%20-%20Intro.mp4?alt=media&token=8ce63c85-a235-40a8-8653-96a0f6150100',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%204%2FIntro%20Outro%2FLesson%204%20-%20Outro.mp4?alt=media&token=aa853b21-7ff7-4218-8a02-7f664e251d78',
  },
  Non_exercise: {
    shake_it_out:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%204%2FNon-exercise%20videos%2FLesson%204%20-%20Shake%20it%20Out.mp4?alt=media&token=e4dedab4-4f14-44e4-a34a-e92470fce7c1',
    whats_going:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%204%2FNon-exercise%20videos%2FLesson%204%20-%20Whats%20Going%20On%20Here.mp4?alt=media&token=afa27b22-64a9-4441-bf18-7cc0887608a4',
  },
  Workout_room: {
    he_walks_away:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%204%2FWorkout%20Room%2FLesson%204%20-%20Workout%20Room%20-%20What_s%20Going%20On%20Here%20-%20He%20walks%20away.mp4?alt=media&token=fc0da66e-53cd-4b6e-8506-5157b5eddd8b',
    palm_heel:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%204%2FWorkout%20Room%2FLesson%204%20-%20Workout%20Room%20-%20What_s%20Going%20on%20Here%20-%20Palm-heel%20Strike.mp4?alt=media&token=3b62dd11-070b-42cd-93e7-5bd2e0543725',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
