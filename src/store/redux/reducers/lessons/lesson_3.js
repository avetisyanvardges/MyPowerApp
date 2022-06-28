const INITIAL_STATE = {
  Audios: {
    breath_in:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FAudios%2FLesson%202%20Safety%20Stance.mp3?alt=media&token=b7cd534e-10a3-45b0-a536-d94f28b8a831',
    breath_out:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FAudios%2FLesson%202%20Safety%20Stance.mp3?alt=media&token=b7cd534e-10a3-45b0-a536-d94f28b8a831',
    march_in_place:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FAudios%2FLesson%203%20-%20Warmup%20-%20March%20in%20Place.mp3?alt=media&token=0a27b414-1c46-44c2-8400-ffb882c22b88',
    belly_breathing:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FAu[…]?alt=media&token=228952f1-3d6d-4315-9c95-4bb5c4e3988a',
  },
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FIntro%20Outro%2FLesson%203%20-%20Intro.mp4?alt=media&token=43f2577a-97c4-4c24-991f-900fedb8172a',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FIntro%20Outro%2FLesson%203%20-%20Outro.mp4?alt=media&token=4a2d5d10-6975-4d90-831a-56f43bc3ab25',
  },
  Non_exercise: {
    breathe_out:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FNon-exercise%20videos%2FBreathe%20Out_1-1.mp4?alt=media&token=1c00e4d0-f703-4749-9c02-5a2ee66b7cc6',
    breathe_in:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FNon-exercise%20videos%2FBreathe%20in_1-1.mp4?alt=media&token=1fbddc18-e562-4434-9383-501f166e42a2',
    powerful_strikes:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FNon-exercise%20videos%2FLesson%203%20-%20Powerful%20Strikes.mp4?alt=media&token=a4129879-430f-452d-a508-1c506ec6a534',
  },
  Workout_room: {
    belly_breathing:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FWorkout%20Room%2FLesson%203%20-%20Workout%20Room%20-%20Belly%20Breathing.mp4?alt=media&token=d925205a-516f-4519-ab23-f811e674e7b1',
    elbow_rear:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FWorkout%20Room%2FLesson%203%20-%20Workout%20Room%20-%20Elbow%20Rear%20Low.mp4?alt=media&token=67b632f7-8e01-4c20-9f26-f1dfa3505479',
    knee_strike:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%203%2FWorkout%20Room%2FLesson%203%20-%20Workout%20Room%20-%20Knee%20Strike.mp4?alt=media&token=7fd0a694-b2c5-45b5-a127-79bc9b27777a',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
