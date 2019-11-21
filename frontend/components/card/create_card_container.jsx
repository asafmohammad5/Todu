import { connect } from 'react-redux';
import { createCard } from '../../actions/card_actions';
import { closeModal } from "../../actions/modal_actions";
import CreateCard from './create_card_form';


const msp = (state, ownProps) => ({
  boardId: ownProps.boardId,
  listId: ownProps.listId,
  card: {
    card_name: '',
    description: '',
    comments: '',
    due_date: ''
  },
  formType: 'Create card',
  state,
  board: state.entities.boards[ownProps.boardId],
  users: []
})

const mdp = dispatch => ({
  action: (boardId, listId, card) => dispatch(createCard(boardId, listId, card)),
  closeModal: () => dispatch(closeModal()) 
})

export default connect(msp, mdp)(CreateCard)