import { combineReducers } from 'redux';


import usersReducer from './users_reducer';
import boardReducer from './board_reducer';
import listReducer from './list_reducer';

export default combineReducers({
  users: usersReducer,
  boards: boardReducer,
  lists: listReducer
});
