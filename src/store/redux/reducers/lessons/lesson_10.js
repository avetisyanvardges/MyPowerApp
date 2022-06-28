import {
  SET_CURRENT_COUNT,
  SET_CURRENT_AUDIO,
} from '../../../../types/LESSON_10';

const INITIAL_STATE = {
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FIntro%20Outro%2FLesson%2010%20-%20Intro.mp4?alt=media&token=53fb2bcf-8c05-464a-93b1-8615883d2b1d',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%209%2FIntro%20outro%2FLesson%209%20-%20Outro.mp4?alt=media&token=ff036501-67b5-45c8-b1ff-30a302c29095',
  },
  Non_exercise: {
    phrases:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FNon-exercise%20videos%2FLesson%2010%20-%20Boundary%20Setting%20Phrases%20(Jackie).mp4?alt=media&token=78e51ce4-2f99-4c06-a654-058498fa4cee',
    upElbow:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FNon-exercise%20videos%2FLesson%2010%20-%20Boundary%20Setting%20Phrases%20(Jackie).mp4?alt=media&token=78e51ce4-2f99-4c06-a654-058498fa4cee',
    risingElbow:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FNon-exercise%20videos%2FLesson%2010%20-%20Workout%20Room%20-%20Rear%20Shoulder%20Grab.mp4?alt=media&token=4b97314d-1a7a-4179-ba19-7b251b56be42',
    roundElbow:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FNon-exercise%20videos%2FLesson%2010%20-%20Workout%20Room%20-%20Round%20Elbow.mp4?alt=media&token=44d82a0b-96d7-44b3-bb30-e76a8a54a7f1',
  },
  Audios: {
    call1:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FGames%2FLesson%2010%20-%20Game%201%20-%20Call%20%231%20-%20Babysitter.mp3?alt=media&token=95835c32-4849-44df-a69a-cf9ff68485cb',
    call2:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FGames%2FLesson%2010%20-%20Game%201%20-%20Call%20%232%20-%20Cover%20for%20me.mp3?alt=media&token=1987c2b7-28ea-4683-8888-f1ef8a2104ec',
    call3:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FGames%2FLesson%2010%20-%20Game%201%20-%20Call%20%233%20-%20Dinner%20reservation.mp3?alt=media&token=e7bb95da-17e4-4990-92c2-9e0f9de50573',
    call4:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FGames%2FLesson%2010%20-%20Game%201%20-%20CAll%20%234%20-%20Cancel%20my%20subscription.mp3?alt=media&token=ae15c8c1-e927-4d7c-aa6f-b784141e4e0c',
  },
  current_audio: 'call1',
  render_count: 1,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_AUDIO:
      return {
        ...state,
        current_audio: action.payload,
      };

    case SET_CURRENT_COUNT:
      return {
        ...state,
        render_count: action.payload,
      };

    default:
      return state;
  }
};
