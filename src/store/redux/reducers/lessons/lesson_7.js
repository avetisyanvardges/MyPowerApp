const INITIAL_STATE = {
  Intro_Outro: {
    intro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FIntro%20Outro%2FLesson%207%20-%20Intro.mp4?alt=media&token=082dfc9e-3eb0-43c3-a8bd-1cc50c1de3f4',
    outro:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FIntro%20Outro%2FLesson%207%20-%20Outro.mp4?alt=media&token=88afc4dd-62b0-49d1-b7e7-140c707476af',
  },
  Images: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FImages%2FLesson%207%20Icon.jpeg?alt=media&token=5dfcd9ad-b67c-4ea3-bb3a-3a5ec974ca12',
    success_story:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FImages%2FLesson%207%20Success%20Story.jpg?alt=media&token=7453d659-101a-4a53-9f48-5d0ec5db0931',
  },
  Non_exercise: {
    i_love_my_hips:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FNon-exercise%20videos%2FLesson%207%20-%20Video%20-%20I%20love%20my%20hips.MP4?alt=media&token=9cb23c98-3355-43ae-8ead-0c60ad214d96',
  },
  Workout_room: {
    palm_heel_strike:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FWorkout%20Room%2FLesson%207%20-%20Workout%20Room%20-%20Palm-heel.mp4?alt=media&token=3c48a565-a7b3-417b-8d69-3b29a0be33f9',
    palm_heel_fist:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FWorkout%20Room%2FLesson%207%20-%20Workout%20Room%20-%20Palm-heel.mp4?alt=media&token=3c48a565-a7b3-417b-8d69-3b29a0be33f9',
    palm_hell_knee:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FWorkout%20Room%2FLesson%207%20-%20Workout%20Room%20-%20Wrist%20Grab-Palm-heel-knee-knee.mp4?alt=media&token=a51109c9-c51a-441f-bab4-1b2c67e46a47',
    low_elbows:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FWorkout%20Room%2FLesson%207%20-%20Workout%20Room%20-%20Rear%20Hug%20-%20Low%20Elbows-palm-knee-knee.mp4?alt=media&token=a09e97bc-f256-4d1d-8d59-545c250a0cac',
  },
  Games: {
    Cinema_scene:
      'https://firebasestorage.googleapis.com/v0/b/mypwrapp.appspot.com/o/Lessons%2FLesson%207%2FGames%2FLesson%207%20-%20Crime%20Scene.png?alt=media&token=8f67b160-3e9a-4d54-a3cb-cff7ad6871e6',
    Mannequin_defend: {
      head: {
        title: 'Head & Mouth',
        text:
          'Head: Great for thinking, less great for hitting someone.\n' +
          'Mouth: Great for yelling, not sure I\'d recommend biting, and yet, if you need to, do what you have to do! What we do know is that if there are certain sensitive parts of the anatomy near your face and you yell a very clearly enunciated "BITE!" most attackers won\'t stick around to see what you might have meant. \n' +
          "Chin: There are people who know how to strike with their chin. That being said, if you don't know how to, it may hurt you as much as it hurts them.",
      },
      hand: {
        title: 'Hand',
        text: 'Hand, the palm heel is the strongest part of the hand for striking.',
      },
      elbow: {
        title: 'Elbow/upper arm',
        text: 'The elbow, actually, the area right above the elbow is very strong.',
      },
      knee: {
        title: 'Knee',
        text: "You will hear us call it a knee to the groin, but really it's a thigh muscle to the head through the groin.",
      },
      foot: {
        title: 'Foot',
        text: 'The foot, especially the heel of your foot is very powerful. When fighting from the ground you will see why it makes sense to make sure you keep your foot and leg between you and the attacker.',
      },
    },
    Mannequin_vulnerable: {
      Eyes: {
        text: 'Great target!',
      },
      Nose: {
        text: 'Great target!',
      },
      Groin: {
        text: 'Great target! (yes, since you might be wondering, it hurts on women too, clearly not the same effect, but definitely hurts)',
      },
      Throat: {
        text: 'Great target!',
      },
      Ears: {
        text: 'A good box to the ears can even be a strong skill, but you need to learn how to do it right.',
      },
      Knee: {
        text: 'Knee, can be broken',
      },
      Solar_plexus: {
        text: 'Good target if you don’t miss',
      },
      Thigh: {
        text: 'Good target if you don’t miss',
      },
      Ribs: {
        text: 'Good target',
      },
      Foot: {
        text: 'The top of the foot is sensitive',
      },
      Arm: {
        text: 'Some great spots for pinching',
      },
      Leg: {
        text: 'Inner thigh is a great pinch spot',
      },
    },
    Mannequin_horizontal: {
      heel_knee: {
        nose: {
          title: 'Knees to crouch.',
          text: 'The knees, actually, the area right above the shin is very strong.',
        },
        thigh: {
          title: 'Knees to crouch.',
          text: 'The knees, actually, the area right above the shin is very strong.',
        },
      },
      low_elbow: {
        nose: {
          title: 'Hand to nose.',
          text: 'The knees, actually, the area right above the shin is very strong.',
        },
        ribs: {
          title: 'Elbow to ribs.',
          text: 'The knees, actually, the area right above the shin is very strong.',
        },
        thigh: {
          title: 'Knees to crouch.',
          text: 'The knees, actually, the area right above the shin is very strong.',
        },
      },
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
