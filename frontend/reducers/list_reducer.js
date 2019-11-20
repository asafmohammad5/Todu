import {
  RECEIVE_ALL_LISTS,
  RECEIVE_LIST,
  REMOVE_LIST
} from "../actions/list_actions";

import {
  RECEIVE_BOARD
} from "../actions/board_actions";

import {
  RECEIVE_CARD,
  REMOVE_CARD
} from '../actions/card_actions'


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
    case RECEIVE_CARD:
      let list2 = action.payload.list
      return Object.assign({}, state, { [list2.id]: list2 })
    case REMOVE_CARD:
      let list3 = action.payload.list
      return Object.assign({}, state, { [list3.id]: list3 })
    default:
      return state;
  }
}

export default listReducer;