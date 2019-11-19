import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from "../../actions/modal_actions";
import CreateBoard from './create_board_form';
import { clearErrors } from '../../actions/board_actions';

const msp = state => ({
  ownerId: state.session.id,
  errors: state.errors.board,
})

const mdp = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(CreateBoard)