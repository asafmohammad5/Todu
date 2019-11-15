import * as BoardUtil from '../util/board_util';

export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS'
export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const REMOVE_BOARD = 'REMOVE_BOARD'

const receiveAllBoards = boards => ({
  type: RECEIVE_ALL_BOARDS,
  boards
})

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
})

const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
})

export const fetchBoards = () => dispatch => (
  BoardUtil.fetchBoards().then(boards => dispatch(receiveAllBoards(boards)))
)

export const fetchBoard = (boardId) => dispatch => (
  BoardUtil.fetchBoard(boardId).then(board => dispatch(receiveBoard(board)))
)

export const createBoard = (board) => dispatch => (
  BoardUtil.createBoard(board).then(board => dispatch(receiveBoard(board)))
)

export const updateBoard = (board) => dispatch => (
  BoardUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)))
)

export const deleteBoard = (boardId) => dispatch => (
  EventAPIUtil.deleteBoard(boardId).then(() => dispatch(removeBoard(boardId)))
)