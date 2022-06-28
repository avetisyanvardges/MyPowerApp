import {SET_INTRO_SLIDES} from '../../../types/actionsTypes';

const INITIAL_STATE = {
  slides: [
    {
      key: 1,
      title:
        'MyPwrApp\n  Your journey to personal power! Meet your most powerful self!',
      image: require('../../../assets/Image/intro/1.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Your community, a safe and supportive place.',
      image: require('../../../assets/Image/intro/2.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Reconnect to self and set new and powerful personal boundaries',
      image: require('../../../assets/Image/intro/3.png'),
      backgroundColor: '#22bcb5',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INTRO_SLIDES:
      return {
        ...state,
        slides: action.payload,
      };
    default:
      return state;
  }
};
