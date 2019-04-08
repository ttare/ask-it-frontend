import { combineReducers } from 'redux';

import QuestionReducer from './questionsReducer';
import UserReducer from './userReducer';

export default combineReducers({
  home: QuestionReducer,
  user: UserReducer,
});

