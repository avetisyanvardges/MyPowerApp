const INITIAL_STATE = {
  round_1: {
    scene_1: {
      next_scene: {round: 'round_1', scene: 'scene_2'},
      sure: 'yellow',
      text: 'Asks me to lie/cover for him/her',
      yellow:
        "Yes. we see this as yellow too. It really depends on the situation. In some situations lying would be dangerous, i.e. red, and other times it could be green. For example, if you ask me to lie about why you weren't in school, that's potentially dangerous. If my coworker asks me to cover up for her so she can run out and get a birthday cake for the boss, ok. It is important to keep an eye on the reasons and frequencies for the lies or cover ups.",
      red: 'Sometimes being asked to lie or cover for someone can certainly be green. And it could also be red. For example, if my coworker asks me to cover up for her so she can run out and get a birthday cake for the boss, that’s green. However, other times it has the potential to be more dangerous. If you ask me to lie about how you got a black eye, I would see that as red. It really depends on the situation. Which is why we would choose yellow.  It is important to keep an eye on the reasons for the lies or cover ups.  an eye on the reasons for the lies or cover ups.',
      green:
        'Sometimes being asked to lie or cover for someone can certainly be green. And it could also be red. For example, if my coworker asks me to cover up for her so she can run out and get a birthday cake for the boss, that’s green. However, other times it has the potential to be more dangerous. If you ask me to lie about how you got a black eye, I would see that as red. It really depends on the situation. Which is why we would choose yellow.  It is important to keep an eye on the reasons for the lies or cover ups.  an eye on the reasons for the lies or cover ups.',
    },
    scene_2: {
      next_scene: {round: 'round_1', scene: 'scene_3'},
      sure: 'red',
      text: 'Beat me up.',
      red: ' Yes, we see this as red too. Physical Violence is dangerous and can be potentially life threatening. Research shows that this type of behavior tends to escalate, especially if that person is not willing to learn how to control themselves and properly solve problems.',
      yellow:
        "We honestly can't think of why this would be anything other than red. That being said, you did. Someone who uses violence to prove a point, or teach a lesson, or even just because they were drunk or mad (mostly telling you that it is your fault for that) is not behaving in a safe way. And, research shows that this type of behavior tends to escalate especially if that person is not willing to learn how to control themselves and properly solve problems.",
      green:
        "We honestly can't think of why this would be anything other than red. That being said, you did. Someone who uses violence to prove a point, or teach a lesson, or even just because they were drunk or mad (mostly telling you that it is your fault for that) is not behaving in a safe way. And, research shows that this type of behavior tends to escalate especially if that person is not willing to learn how to control themselves and properly solve problems.",
    },
    scene_3: {
      next_scene: {round: 'round_2', scene: 'scene_1'},
      sure: 'yellow',
      text: 'Forced me to kiss him/her.',
      red: 'There is a good chance that a person who forced a kiss may perpetrate an even more grievous offense. However, this really depends on person, place and context. We label this as yellow because while in and of itself it is not dangerous, it is clearly a breach of body autonomy. That being said, nope, we cannot see this as green.',
      yellow:
        'Yes, we would label this as yellow because force is being used, though depending on the circustances it could be red. While we would probably not recommend knocking a person out for forcing a kiss, it is definitely a clear breach of body autonomy and warrants a consequence. And it would depend on the who, where and context of the action.',

      green:
        'There is a good chance that a person who forced a kiss may perpetrate an even more grievous offense. However, this really depends on person, place and context. We label this as yellow because while in and of itself it is not dangerous, it is clearly a breach of body autonomy. That being said, nope, we cannot see this as green.',
    },
  },
  round_2: {
    scene_1: {
      next_scene: {round: 'round_2', scene: 'scene_2'},

      sure: 'green',
      text: 'Leaves notes in my lunch bag.',
      red: 'While this could be nothing and/or sweet, it really depends on the intention behind it. In a case like this it is probably a good idea to keep an eye out for other types of controlling  behavior. And of course, it also depends on what is written in the message.',
      yellow:
        'While this could be nothing and/or sweet, it really depends on the intention behind it. In a case like this it is probably a good idea to keep an eye out for other types of controlling  behavior. And of course, it also depends on what is written in the message.',
      green:
        ' Yes, this could absolutely be nothing, ie. Green. Unfortunately, it also could be part of controlling and obsessive behavior too. If someone is doing this to you, it is worth checking in to see why, and if this is connected to other behaviors that are stronger flags for inappropriate behavior.',
    },
    scene_2: {
      next_scene: {round: 'round_2', scene: 'scene_3'},

      sure: 'yellow',
      text: 'Keeps asking me out after I’ve said no.',
      red: ' Yes, we would see this as Yellow. As you are probably starting to understand, there are different ways to look at it. Clearly, it depends on who the person is. A close family member asking you to go for coffee, may be a lot less threatening than someone repeatedly asking you for a date. While either way this person is refusing to respect your boundary, the way you would handle that would be vastly different. What is important to keep in mind is that if they won\'t respect "no" here, it is very possible that they won\'t respect it at other times either.',
      yellow:
        ' Yes, we would see this as Yellow. As you are probably starting to understand, there are different ways to look at it. Clearly, it depends on who the person is. A close family member asking you to go for coffee, may be a lot less threatening than someone repeatedly asking you for a date. While either way this person is refusing to respect your boundary, the way you would handle that would be vastly different. What is important to keep in mind is that if they won\'t respect "no" here, it is very possible that they won\'t respect it at other times either.',
      green:
        'While would see this as yellow it really depends on som many things. As you are probably starting to understand, there are different ways to look at it. For one, it depends on who the person is. A close family member asking you repeatedly to go for coffee may be a lot less threatening than someone asking you to go on a date. Either way this person is refusing to respect your boundary. That being said the way you would handle each would be vastly different. What is important to keep in mind is that if they won\'t respect "no" here, it very possible that they won\'t respect it at other times either.',
    },
    scene_3: {
      next_scene: {round: 'round_3', scene: 'scene_1'},

      sure: 'red',
      text: 'Forced me to have sex.',
      red: 'If it is a partner whom you have previously had sex with, it might not feel as violating as compared to a stranger. Regardless of the relationship or what you may have consented to in the past, nobody has the right to force you to have sex. Whether it is physical or emotional force, you always have to right to say no and to defend yourself from sexual assault.',
      yellow:
        'Read that line again. "Forced me to have sex." It has already happened and I made it clear that I didn\'t want it. That is the technical definition of rape, therefore in our humble opinion, there is no way to downgrade this to yellow, certainly not green.',
      green:
        'Read that line again. "Forced me to have sex." It has already happened and I made it clear that I didn\'t want it. That is the technical definition of rape, therefore in our humble opinion, there is no way to downgrade this to yellow, certainly not green.',
    },
  },
  round_3: {
    scene_1: {
      next_scene: {round: 'round_3', scene: 'scene_2'},

      sure: 'green',
      text: 'Calls me names like baby, and sweety.',
      red: "  Just as you get to choose who touches your body, when and how, you get to choose how people refer to you. If you are not feeling like this is a term of endearment, then set that boundary. If it is a person you are not particularly close to or these are names that you particulary dislike, feel free to ask them to stop. Most importantly, how they react to you setting that boundary teaches you something about whether they respect you or not. In general being called these names doesn't pose a danger, so unless the person was told to stop and did not listen, we would say this is green.",
      yellow:
        "  Just as you get to choose who touches your body, when and how, you get to choose how people refer to you. If you are not feeling like this is a term of endearment, then set that boundary. If it is a person you are not particularly close to or these are names that you particulary dislike, feel free to ask them to stop. Most importantly, how they react to you setting that boundary teaches you something about whether they respect you or not. In general being called these names doesn't pose a danger, so unless the person was told to stop and did not listen, we would say this is green.",
      green:
        'Just as you get to choose who touches your body, when and how, you get to choose how people refer to you. So while this is not dangerous, if you are not feeling like this is a term of endearment, then set that boundary. If it is a person you are not particularly close to or these are names that you particulary dislike, feel free to ask them to stop. Most importantly, how they react to you setting that boundary teaches you something about whether they respect you or not.',
    },
    scene_2: {
      next_scene: {round: 'round_3', scene: 'scene_3'},

      sure: 'red',
      text: 'Hit me or pushed me',
      red: ' A person who uses physical force to get their message across, or even just because they lack self-control is behaving in a dangerous manner. Research shows that this type of behavior often escalates. This is especially true if that person is not willing to take responsibilty for their behavior and sincerely and consistantly work to find better options and learn self-control.',
      yellow:
        "We honestly can't think of why this would be anything other than red. That being said, you did. A person who uses physical force to get their message across, or even just because they lack self-control is behaving in a dangerous manner. Research shows that this type of behavior often escalates. This is especially true if that person is not willing to take responsibilty for their behavior and sincerely and consistantly work to find better options and learn self-control.",
      green:
        "We honestly can't think of why this would be anything other than red. That being said, you did. A person who uses physical force to get their message across, or even just because they lack self-control is behaving in a dangerous manner. Research shows that this type of behavior often escalates. This is especially true if that person is not willing to take responsibilty for their behavior and sincerely and consistantly work to find better options and learn self-control.",
    },
    scene_3: {
      next_scene: {round: 'round_4', scene: 'scene_1'},

      sure: 'red',
      text: 'Controls who I hang out with.',
      red: ' If there is only one specific person they do not want you to spend time with, you can evaluate whether there is a valid reason for this or not.  If there is no valid reason, or it is multiple people, you can ask youself. "Why don’t they want me to spend time with other people? Could it be part of a larger pattern of control, or an attempt to isloate me and make me entirely dependant on them?" They may claim it is for your own good, to make sure you don\'t hang out with people who are bad for you. However, a person who truly cares about and respects you will trust you to make your own choices about who you want to spend time with, and will be supportive of you having a larger social circle.',
      yellow:
        ' If there is only one specific person they do not want you to spend time with, you can evaluate whether there is a valid reason for this or not.  If there is no valid reason, or it is multiple people, you can ask youself. "Why don’t they want me to spend time with other people? Could it be part of a larger pattern of control, or an attempt to isloate me and make me entirely dependant on them?" Since in most cases the answer to these questions is yes. We see this as red. They may claim it is for your own good, to make sure you don\'t hang out with people who are bad for you. However, a person who truly cares about and respects you will trust you to make your own choices about who you want to spend time with, and will be supportive of you having a larger social circle.',
      green:
        ' If there is only one specific person they do not want you to spend time with, you can evaluate whether there is a valid reason for this or not.  If there is no valid reason, or it is multiple people, you can ask youself. "Why don’t they want me to spend time with other people? Could it be part of a larger pattern of control, or an attempt to isloate me and make me entirely dependant on them?" Since in most cases the answer to these questions is yes. We see this as red. They may claim it is for your own good, to make sure you don\'t hang out with people who are bad for you. However, a person who truly cares about and respects you will trust you to make your own choices about who you want to spend time with, and will be supportive of you having a larger social circle.',
    },
  },
  round_4: {
    scene_1: {
      next_scene: {round: 'round_4', scene: 'scene_2'},

      sure: 'yellow',
      text: 'Insults me or puts me down.',
      red: ' On one hand, this absolutely could be Red flag behavior. The only one who can assess that is you, and at the moment it happens. It matters who says it. It matter what and how it is said. And it matters if this is part of a system of abusive behavior. Abuse is not usually a single act in time. Actually, the majority of abuse is part of a system of abuse. That being said, if you think this is green you might want to figure out how you got there.',
      yellow:
        'I can\'t think of a time when this would ever be acceptable. Yet, I also wouldn’t knee someone in the groin over it. Abuse isn\'t only physical. Verbal abuse hurts too, sometimes even more than physical abuse. Research shows that shouting at or belittling children is no less harmful than physical abuse. Yet somehow, we have been led to believe that we shouldn\'t be affected by verbal abuse. "Don\'t give it oxygen." "You are bigger than that." Even the old "Sticks and stones" is all about telling the victims of verbal abuse to just get over it. We believe that this is not the world we want to live in. The people who should feel uncomfortable should be those who are not behaving in respectful and safe ways.',
      green:
        ' On one hand, this absolutely could be Red flag behavior. The only one who can assess that is you, and at the moment it happens. It matters who says it. It matter what and how it is said. And it matters if this is part of a system of abusive behavior. Abuse is not usually a single act in time. Actually, the majority of abuse is part of a system of abuse. That being said, if you think this is green you might want to figure out how you got there.',
    },
    scene_2: {
      next_scene: {round: 'round_4', scene: 'scene_3'},

      sure: 'green',
      text: 'Commented on my clothes.',
      red: "Yes, this could possibly be a yellow flag behavior, and while we can't see it as red, you did. Clearly, it depends on the circumstances, frequency and person involved. Most importanly, is you listening to your inner voice, your feelings about this type of behavior.",
      yellow:
        "Yes, this could possibly be a yellow flag behavior, and while we can't see it as red, you did. Clearly, it depends on the circumstances, frequency and person involved. Most importanly, is you listening to your inner voice, your feelings about this type of behavior.",
      green:
        " Comment is a broad word. It can include both compliments and insults. Compliments may be flattering or inppropriate. If a comment made about your clothes did not feel 'green' you have the right to set a boundary.  Like we said before, how another reacts to you setting that boundary teaches you something about whether they respect you or not.",
    },
    scene_3: {
      next_scene: {round: 'round_5', scene: 'scene_1'},

      sure: 'yellow',
      text: 'Is always asking me to stay late after work',
      red: " If the picture in your head, and the feeling in your heart is that this is red flag behavior, then listen to that. While irritating and possibly even illegal, asking you to stay late isn't the problem. How you feel working there might be. So, it could be green, or yellow, or red. It really is up to the circumstance, reason and person involved.",
      yellow:
        "While this is clearly irritating, and if they are asking you to stay without pay, could be illegal, we wouldn't call it a red flag. Good to keep an eye on. Good to set some boundaries. And maybe, start looking for a new job.",
      green:
        " If the picture in your head, and the feeling in your heart is that this is red flag behavior, then listen to that. While irritating and possibly even illegal, asking you to stay late isn't the problem. How you feel working there might be. So, it could be green, or yellow, or red. It really is up to the circumstance, reason and person involved.",
    },
  },
  round_5: {
    scene_1: {
      next_scene: {round: 'round_5', scene: 'scene_2'},

      sure: 'yellow',
      text: 'Grabbed my butt',
      red: 'There could be additional factors that make this feel more dangerous. We picked yellow though, because even though it is a really jerky, misogynistic and priviledged thing to do, knocking someone out over this would be a bit extreme.',
      yellow:
        "Yes, we also picked yellow for this. Is it really jerky thing to do? Yup. Misogynistic? Yup. Privileged? Yup, yup. Yet, not behavior that deserves getting knocked out for. Though, I can't promise their wouldn't be a flying elbow that he might need to contend with.",
      green:
        'It could be green if this was your partner and you wanted them to grab your butt.  It depends. In any situation where the butt grab is without consent we would call it yellow. Is it really jerky thing to do? Yup. Misogynistic? Yup. Privileged? Yup, yup. Yet, not behavior that deserves getting knocked out for',
    },
    scene_2: {
      next_scene: {round: 'round_5', scene: 'scene_3'},

      sure: 'yellow',
      text: 'Keeps a hand on me when giving me instructions.',
      red: 'We see this more as yellow. There are certainly a lot of factors. Who is the person? What part of your body is their hand on? While we wouldn’t break someone\'s nose over this, you can certainly ask them to remove their hand. Think about a letter that has come to the wrong address. Stamp it with "return to sender" and send it back. "This body part is yours, and I really don\'t want it on me."',
      yellow:
        'There are a lot of factors. Who is the person? What part of your body is their hand on? While we wouldn’t break someone\'s nose over this, you can certainly ask them to remove their hand. Think about a letter that has come to the wrong address. Stamp it with "return to sender" and send it back. "This body part is yours, and I really don\'t want it on me."',
      green:
        'We see this more as yellow. There are certainly a lot of factors. Who is the person? What part of your body is their hand on? While we wouldn’t break someone\'s nose over this, it is still a boundary violation. This person is touching you without consent. You have the right to ask them to remove their hand. Think about a letter that has come to the wrong address. Stamp it with "return to sender" and send it back. "This body part is yours, and I really don\'t want it on me."',
    },
    scene_3: {
      sure: 'yellow',
      text: 'Gets angry if things aren’t “just right.”',
      red: ' If this is the type of behavior that happens on a regular basis, and this person is doing it to maintain control through fear and intimidation, then this could absoloutely be a Red situation. If you fear that this is happening in your life, you can use the app to help you figure out what you need to do.',
      yellow:
        " As you are seeing, some situations are not always clear. How angry does the other person get? What do they do when they get angry? How often are things 'just not right' to them? Answering these questions will help you decide how to react and whether or not this is a safe or healthy relationship.",
      green:
        " Once again, this is an issue of context. For example, my grandparents would get upset every time one of the kids didn't finish the food on their plate. They came from deep poverty and just couldn't handle seeing food wasted. While they didn't always express themselves in an appropriate manner, and sometimes would even yell at us, we understood that their feelings about wasting food were based on their beliefs and their trauma. So, yes, it wasn't nice, or pleasant, but we understood where it was coming from.",
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
