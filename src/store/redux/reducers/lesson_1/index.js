import {SET_THINK_TEXT} from '../../../../types/LESSON_1';

const INITIAL_STATE = {
  THINK: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_THINK_TEXT:
      return {
        ...state,
        THINK: action.payload,
      };
    default:
      return state;
  }
};
