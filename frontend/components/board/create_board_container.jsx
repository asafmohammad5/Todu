import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from "../../actions/modal_actions";
import CreateBoard from './create_board_form';

const msp = state => ({
  ownerId: state.session.id
})

const mdp = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)),
  closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(CreateBoard)