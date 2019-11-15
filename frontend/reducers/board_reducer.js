import {
  RECEIVE_ALL_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from "../actions/board_actions"


const boardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOARDS:
      return Object.assign({}, action.boards)
    case RECEIVE_BOARD:
      return Object.assign({}, state, { [action.board.id]: action.board })
    case REMOVE_BOARD:
      let newS = Object.assign({}, state)
      delete newS[action.boardId]
      return newS
    default:
      return state;
  }
}

export default boardReducer;