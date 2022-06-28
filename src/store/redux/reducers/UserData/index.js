import {
  SET_LESSON_PER_DAY,
  SET_LESSON_START_TIME,
  SET_SUPPORT_CYCLE,
  SET_USER_AGE,
  SET_USER_DATA,
  SET_USER_FULLNAME,
} from '../../../../types/USER_ACTIONS';

const INITIAL_STATE = {
  full_name: '',
  age: '',
  email: 'test@gmail.com',
  lessonPerDay: false,
  lessonStartTime: '',
  supportCycle: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_FULLNAME:
      return {
        ...state,
        full_name: action.payload,
      };
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case SET_LESSON_PER_DAY:
      return {
        ...state,
        lessonPerDay: action.payload,
      };
    case SET_LESSON_START_TIME:
      return {
        ...state,
        lessonStartTime: action.payload,
      };
    case SET_SUPPORT_CYCLE:
      return {
        ...state,
        supportCycle: action.payload,
      };
    default:
      return state;
  }
};
