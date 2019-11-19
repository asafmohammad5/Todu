import { connect } from 'react-redux';
import {fetchBoards, createBoard} from '../../actions/board_actions';
import {openModal} from "../../actions/modal_actions";
import BoardIndex from './board_index';
import { createdBoardSelector, joinedBoardSelector } from '../../reducers/selectors'

const msp = state => {
  let user = state.entities.users[state.session.id]
  let createdBoards, joinedBoards;
  if (user) {
    createdBoards = createdBoardSelector(state, user);
    joinedBoards = joinedBoardSelector(state, user)
  }
  return {
    createdBoards,
    joinedBoards
  }
}

const mdp = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(BoardIndex)