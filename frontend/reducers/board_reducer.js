import {
  RECEIVE_ALL_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from "../actions/board_actions";

import {
  RECEIVE_LIST,
  REMOVE_LIST
} from "../actions/list_actions";


const boardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOARDS:
      return Object.assign({}, action.boards.boards)
    case RECEIVE_BOARD:
      let board = action.payload.board;
      return Object.assign({}, state, { [board.id]: board })
    case REMOVE_BOARD:
      return Object.assign({}, action.payload.boards)
    case RECEIVE_LIST:
      let board2 = action.payload.board;
      return Object.assign({}, state, { [board2.id]: board2 })
    case REMOVE_LIST:
      let board3 = action.payload.board;
      return Object.assign({}, state, { [board3.id]: board3 })
    default:
      return state;
  }
}

export default boardReducer;