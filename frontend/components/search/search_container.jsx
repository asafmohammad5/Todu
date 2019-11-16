import { connect } from 'react-redux';
import Search from './search';
import {  searchUsers, clearSearchResults} from '../../actions/user_actions';
import { addMember } from '../../actions/board_actions'

const msp = (state) => ({
  users: Object.values(state.ui.search)
})

const mdp = dispatch => ({
  searchUsers: searchTerm => dispatch(searchUsers(searchTerm)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  addMember: (boardId, userId) => dispatch(addMember(boardId, userId))
})

export default connect(msp, mdp)(Search)