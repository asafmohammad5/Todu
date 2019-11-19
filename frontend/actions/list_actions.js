import * as ListUtil from '../util/list_util';

export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

const receiveAllLists = lists => ({
  type: RECEIVE_ALL_LISTS,
  lists
})

const receiveList = payload => ({
  type: RECEIVE_LIST,
  payload
})

const removeList = payload => ({
  type: REMOVE_LIST,
  payload
})


export const fetchLists = (boardId) => dispatch => (
  ListUtil.fetchLists(boardId).then(lists => dispatch(receiveAllLists(lists)))
)

export const fetchList = (boardId, listId) => dispatch => (
  ListUtil.fetchList(boardId, listId).then(payload => dispatch(receiveList(payload)))
)

export const createList = (boardId, list) => dispatch => (
  ListUtil.createList(boardId, list).then(payload => dispatch(receiveList(payload)))
)

export const updateList = (boardId, list) => dispatch => (
  ListUtil.updateList(boardId, list).then(payload => dispatch(receiveList(payload)))
)

export const deleteList = (boardId, listId) => dispatch => (
  ListUtil.deleteList(boardId, listId).then(payload => dispatch(removeList(payload)))
)