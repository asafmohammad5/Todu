import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';
import { closeModal } from "../../actions/modal_actions";
import CreateCard from './create_card_form';


const msp = (state, ownProps) => ({
  boardId: ownProps.boardId,
  listId: ownProps.listId
})

const mdp = dispatch => ({
  createCard: (boardId, listId, card) => dispatch(createCard(boardId, listId, card)),
  closeModal: () => dispatch(closeModal()) 
})

export default connect(msp, mdp)(CreateCard)