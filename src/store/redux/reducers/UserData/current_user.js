import {SET_USER_DATA} from '../../../../types/USER_ACTIONS';

const INITIAL_STATE = {
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
