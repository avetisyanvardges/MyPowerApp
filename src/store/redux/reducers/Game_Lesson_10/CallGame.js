const INITIAL_STATE = {
  Audios: {
    call_1:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FGames%2FLesson%2010%20-%20Game%201%20-%20Call%20%231%20-%20Babysitter.mp3?alt=media&token=95835c32-4849-44df-a69a-cf9ff68485cb',
    call_2:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FGames%2FLesson%2010%20-%20Game%201%20-%20Call%20%232%20-%20Cover%20for%20me.mp3?alt=media&token=1987c2b7-28ea-4683-8888-f1ef8a2104ec',
    call_3:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FGames%2FLesson%2010%20-%20Game%201%20-%20Call%20%233%20-%20Dinner%20reservation.mp3?alt=media&token=e7bb95da-17e4-4990-92c2-9e0f9de50573',
    call_4:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%2010%2FGames%2FLesson%2010%20-%20Game%201%20-%20CAll%20%234%20-%20Cancel%20my%20subscription.mp3?alt=media&token=ae15c8c1-e927-4d7c-aa6f-b784141e4e0c',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
