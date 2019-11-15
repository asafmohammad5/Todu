import Modal from './modal'
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);