import {
  RECEIVE_ALL_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from "../actions/board_actions"


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
    default:
      return state;
  }
}

export default boardReducer;