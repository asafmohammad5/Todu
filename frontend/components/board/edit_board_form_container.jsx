import { connect } from 'react-redux';
import { updateBoard } from '../../actions/board_actions';
import { closeModal } from "../../actions/modal_actions";
import EditBoard from './edit_board_form';
import { clearErrors } from '../../actions/board_actions';

const msp = (state, ownProps) => ({
  ownerId: state.session.id,
  errors: state.errors.board,
  board: state.entities.boards[ownProps.boardId]
})

const mdp = dispatch => ({
  updateBoard: (board) => dispatch(updateBoard(board)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(EditBoard)