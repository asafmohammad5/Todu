import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, removeMember, deleteBoard } from '../../actions/board_actions';
import { boardCollaborators } from '../../reducers/selectors';
import { createList } from '../../actions/list_actions';

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
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  createList: (boardId, list) => dispatch(createList(boardId, list))
})

export default connect(msp, mdp)(BoardShow)