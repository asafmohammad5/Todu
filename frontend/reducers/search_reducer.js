import { RECEIVE_SEARCH_RESULTS, CLEAR_RESULTS} from '../actions/user_actions'


const searchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.users
    case CLEAR_RESULTS:
      return {};
    default:
      return state;
  }
}

export default searchReducer;