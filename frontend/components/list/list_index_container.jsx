import { connect } from 'react-redux';
import ListIndex from './list_index';
import { deleteList  } from '../../actions/list_actions';
import { boardLists} from '../../reducers/selectors';
import { openModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => {
  let board = state.entities.boards[ownProps.boardId];
  let user = state.entities.users[state.session.id]
  let lists;
  if (board) {
    lists = boardLists(state, board)
  }
  return {
    lists,
    board,
    user
  }
};


const mdp = dispatch => ({
  deleteList: (boardId, listId) => dispatch(deleteList(boardId, listId)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(msp, mdp)(ListIndex)