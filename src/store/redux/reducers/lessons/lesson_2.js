const INITIAL_STATE = {
  Audios: {
    safety_stance:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FAudios%2FLesson%202%20Safety%20Stance.mp3?alt=media&token=b7cd534e-10a3-45b0-a536-d94f28b8a831',
  },
  Games: {
    scene_1:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FGames%2FLesson%202%20-%20Game%201%20-%20Scene%201%20(Health%20Club).mp4?alt=media&token=db3c1f9d-4bdb-46a2-90fa-27b86b95f907',
    scene_2:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FGames%2FLesson%202%20-%20Game%201%20-%20Scene%202%20(Kiss).mp4?alt=media&token=6d8ecf45-28a5-4f93-aaf6-ef0f6569cc35',
    scene_3:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FGames%2FLesson%202%20-%20Game%201%20-%20Scene%203%20(bus%20stop).mp4?alt=media&token=2244096b-c065-4f12-870f-3ff0e259f36a',
    scene_4:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FGames%2FLesson%202%20-%20Game%201%20-%20Scene%204%20(pay%20at%20the%20bar).mp4?alt=media&token=6e3c5cf6-363a-4284-97ad-169f47ea26f4',
    scene_5:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FGames%2FLesson%202%20-%20Game%201%20-%20Scene%205%20(door).mp4?alt=media&token=302a292c-3c1e-4002-bbf5-ac0c6bbd4e9c',
  },
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FIntro%20Outro%2FLesson%202%20-%20Intro.mp4?alt=media&token=a9569eeb-b2c0-4df0-9fcf-06f1c5f885e3',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FIntro%20Outro%2FLesson%202%20-%20Outro.mp4?alt=media&token=da015f97-8f39-4e51-af7a-4a8d5dd238ed',
  },
  Workout_room: {
    audio_stance:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FWorkout%20Room%2FAudio%2FLesson%202%20Safety%20Stance.mp3?alt=media&token=996ed1d8-a6a0-4881-8130-e838ee55604b',
    safety_no:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FWorkout%20Room%2FLesson%202%20-%20Workout%20Room%20-%20Safety%20Stance%20-%20No.mp4?alt=media&token=42b7e512-74c2-47db-94e2-bc0184dbec6f',
    safety_silent:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%202%2FWorkout%20Room%2FLesson%202%20-%20Workout%20Room%20-%20Safety%20Stance%20-%20Silent.mp4?alt=media&token=936c54bd-6e12-4b7d-93f2-d0c075e910eb',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
