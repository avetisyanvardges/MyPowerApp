const INITIAL_STATE = {
  Games: {
    scenario_1:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FGames%2FLesson%201%20-%20Game%201%20-%20Scenario%201.mp4?alt=media&token=2afdbba2-c724-4520-b250-043a7d10978f',
    scenario_2:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FGames%2FLesson%201%20-%20Game%201%20-%20Scenario%202.mp4?alt=media&token=a057b5aa-e49d-4d8e-984d-e89f2e3f9a53',
    scenario_3:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FGames%2FLesson%201%20-%20Game%201%20-%20Scenario%203.mp4?alt=media&token=e5fd4a72-067d-4460-b530-2aae8a6a0f7a',
    scenario_4:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FGames%2FLesson%201%20-%20Game%201%20-%20Scenario%204.mp4?alt=media&token=4b502a42-d004-40db-a931-893f9cbfce30',
    scenario_5:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FGames%2FLesson%201%20-%20Game%201%20-%20Scenario%205.mp4?alt=media&token=be7715a6-28e8-499b-9293-c43ccd2d0054',
    scenario_6:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FGames%2FLesson%201%20-%20Game%201%20-%20Scenario%206.mp4?alt=media&token=b9067f4b-d86e-4d02-bc9c-f355559a9cae',
  },
  Gifs: {
    wax_on:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FGifs%2FCompressed%20wax%20on%20wax%20off.gif?alt=media&token=244b784c-458b-4eac-97d4-dcd88adc60fe',
    palm_heel:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FGifs%2Fpalm%20heel%20resize_1.gif?alt=media&token=ccde535c-0b72-4c9d-8b32-a30bb76c446b',
  },
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FIntro_Outro%2FLesson%201%20-%20Intro.mp4?alt=media&token=001a87c7-6708-43d0-a893-83c8439f4c86',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FIntro_Outro%2FLesson%201%20-%20Outro.mp4?alt=media&token=b18d282d-becd-4985-a9fc-e1ef9d8addbe',
  },
  Non_exercise: {
    montage_of_women:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FNon-exercise%20videos%2FLesson%201%20-%20Montage%20of%20women%20using%20their%20voices.mp4?alt=media&token=2f73fe70-d976-4e50-aad4-b4e149fcfbbb',
    not_every_skill:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FNon-exercise%20videos%2FLesson%201%20-%20Not%20Every%20Skill.mp4?alt=media&token=fe459f7a-1d52-4d83-bac6-776e0b508355',
    louder:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FNon-exercise%20videos%2FLesson%201%20-%20Numbers%20Getting%20Louder.mp4?alt=media&token=e90817a7-40f4-4fff-b2d8-0aa1d5099229',
    softer:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FNon-exercise%20videos%2FLesson%201%20-%20Numbers%20Getting%20Softer.mp4?alt=media&token=49a7fb32-c21b-4f9b-8aa2-62ec090c14cf',
    TYRFT:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FNon-exercise%20videos%2FLesson%201%20-%20TYRFT.mp4?alt=media&token=5ac66dfa-b006-47fe-9ab6-a676b5760bf3',
    whats_going:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FNon-exercise%20videos%2FLesson%201%20-%20Whats%20Going%20On%20Here.mp4?alt=media&token=2dc2a166-0c8e-4459-992a-ad4d6aba839c',
    fight_is_about:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%201%2FNon-exercise%20videos%2FLesson%201%20-Fight%20is%20about.mp4?alt=media&token=b7eabedc-6d2c-4db6-91bb-cd26835aeb49',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
