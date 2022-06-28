import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import Intro from './reducers/Intro';
import lesson_1 from './reducers/lessons/lesson_1';
import lesson_2 from './reducers/lessons/lesson_2';
import lesson_3 from './reducers/lessons/lesson_3';
import lesson_4 from './reducers/lessons/lesson_4';
import lesson_5 from './reducers/lessons/lesson_5';
import lesson_6 from './reducers/lessons/lesson_6';
import clothes_game from './reducers/games/clothes_game';
import UserData from './reducers/UserData';
import Onboarding from './reducers/Onboarding';
import lesson_7 from './reducers/lessons/lesson_7';
import lesson_8 from './reducers/lessons/lesson_8';
import lesson_9 from './reducers/lessons/lesson_9';
import lesson_10 from './reducers/lessons/lesson_10';
import Current_user from './reducers/UserData/current_user';

let reducers = combineReducers({
  onBoarding: Onboarding,
  user_data: UserData,
  current_user: Current_user,
  intro: Intro,
  lesson_1: lesson_1,
  lesson_2: lesson_2,
  lesson_3: lesson_3,
  lesson_4: lesson_4,
  lesson_5: lesson_5,
  clothes_game: clothes_game,
  lesson_6: lesson_6,
  lesson_7: lesson_7,
  lesson_8: lesson_8,
  lesson_9: lesson_9,
  lesson_10: lesson_10,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
