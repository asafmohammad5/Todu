import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_BOARD:
      let {user, users} = action.payload;
      if (user) {
        return Object.assign({}, state, { [user.id]: user });
      } 
      if (users) {
        return Object.assign({}, state, users)
      }
      return state;
    case REMOVE_BOARD:
      return Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
    default:
      return state;
  }
}

export default usersReducer;