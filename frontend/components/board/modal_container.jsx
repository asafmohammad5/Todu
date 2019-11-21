import Modal from './modal'
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    modal: state.ui.modal.modalType,
    boardId: state.ui.modal.boardId,
    listId: state.ui.modal.listId,
    cardId: state.ui.modal.cardId
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);