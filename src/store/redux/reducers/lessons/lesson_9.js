import {
  EMPTY_EMOTION_PHOTOS,
  SET_EMOTION_PHOTOS,
} from '../../../../types/LESSON_9';

const INITIAL_STATE = {
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%209%2FIntro%20outro%2FLesson%209%20-%20Intro.mp4?alt=media&token=4b008101-6d6d-4177-92f9-4d8d9d31efd0',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%209%2FIntro%20outro%2FLesson%209%20-%20Outro.mp4?alt=media&token=ff036501-67b5-45c8-b1ff-30a302c29095',
  },
  Non_exercise: {
    mine: 'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%209%2FNon_exercise%2FLesson%209%20-%20Workout%20Room%20-%20Mine.mp4?alt=media&token=75c38db0-e6db-4283-a287-6abb08f92cb8',
    wrist_strike:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%209%2FNon_exercise%2FLesson%209%20-%20Workout%20Room%20-%20Wrist%20Release%20Strike.mp4?alt=media&token=e7d9a68e-584d-492e-a0d5-439be0b8fead',
  },
  Emotion_photos: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EMOTION_PHOTOS:
      const key = action.payload.key;
      const value = action.payload.value;
      return {
        ...state,
        Emotion_photos: {...state.Emotion_photos, [key]: value},
      };
    case EMPTY_EMOTION_PHOTOS:
      return {
        ...state,
        Emotion_photos: {},
      };
    default:
      return state;
  }
};
