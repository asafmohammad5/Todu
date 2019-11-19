import * as BoardUtil from '../util/board_util';


export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const CLEAR_BOARD_ERRORS = 'CLEAR_BOARD_ERRORS';

const receiveAllBoards = boards => ({
  type: RECEIVE_ALL_BOARDS,
  boards
})

const receiveBoard = payload => ({
  type: RECEIVE_BOARD,
  payload
})

const removeBoard = payload => ({
  type: REMOVE_BOARD,
  payload
})

const receiveErrors = (errors) => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_BOARD_ERRORS
})

export const addMember = (boardId, userId) => dispatch => (
  BoardUtil.addMember(boardId, userId).then(payload => dispatch(receiveBoard(payload)))
)

export const removeMember = (boardId, userId) => dispatch => (
  BoardUtil.removeMember(boardId, userId).then((payload) => dispatch(receiveBoard(payload)))
)

export const fetchBoards = () => dispatch => (
  BoardUtil.fetchBoards().then(boards => dispatch(receiveAllBoards(boards)))
)

export const fetchBoard = (boardId) => dispatch => (
  BoardUtil.fetchBoard(boardId).then(board => dispatch(receiveBoard(board)))
)

export const createBoard = (board) => dispatch => (
  BoardUtil.createBoard(board).then(payload => (dispatch(receiveBoard(payload))),
  errors => (dispatch(receiveErrors(errors.responseJSON))
  ))
)

export const updateBoard = (board) => dispatch => (
  BoardUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)))
)

export const deleteBoard = (boardId) => dispatch => (
  BoardUtil.deleteBoard(boardId).then((payload) => dispatch(removeBoard(payload)))
)