import {
  RECEIVE_ALL_LISTS,
  RECEIVE_LIST,
  REMOVE_LIST
} from "../actions/list_actions";

import {
  RECEIVE_BOARD
} from "../actions/board_actions";


const listReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_LISTS:
      return Object.assign({}, action.lists.lists)
    case RECEIVE_LIST:
      let list = action.payload.list;
      return Object.assign({}, state, { [list.id]: list })
    case REMOVE_LIST:
      return Object.assign({}, action.payload.lists)
    case RECEIVE_BOARD:
      return Object.assign({}, state, action.payload.lists)
    default:
      return state;
  }
}

export default listReducer;