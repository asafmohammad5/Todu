import * as UserUtil from '../util/user_util';

export const RECEIVE_BOARD_USER = 'RECEIVE_BOARD_USER';
export const REMOVE_BOARD_USER = 'REMOVE_BOARD_USER';
export const RECEIVE_BOARD_USERS = 'RECEIVE_BOARD_USERS';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_RESULTS = 'CLEAR_RESULTS';



const receiveSearchResults = (users) => ({
  type: RECEIVE_SEARCH_RESULTS,
  users
})


export const clearSearchResults = () => ({
  type: CLEAR_RESULTS
})


export const searchUsers = (searchTerm) => dispatch => (
  UserUtil.searchUsers(searchTerm).then(users => dispatch(receiveSearchResults(users)))
)

