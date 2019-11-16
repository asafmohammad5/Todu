import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, removeMember } from '../../actions/board_actions';
import { boardCollaborators } from '../../reducers/selectors'

const msp = (state, ownProps) => {
  let board = state.entities.boards[ownProps.match.params.boardId]
  let users;
  if (board) {
    users = boardCollaborators(state, board);
  }
  return {
    board,
    users,
    state
  }
}

const mdp = dispatch => ({
  fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
  removeMember: (boardId, userId) => dispatch(removeMember(boardId, userId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(BoardShow)