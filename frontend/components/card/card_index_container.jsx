import { connect } from 'react-redux';
import CardIndex from './card_index';
import { deleteCard, fetchCards, addMember, removeMember } from '../../actions/card_actions';
import { cardLists} from '../../reducers/selectors';
import { openModal } from "../../actions/modal_actions";


const msp = (state, ownProps) => {
  let list = state.entities.lists[ownProps.listId];
  let user = state.entities.users[state.session.id]
  let cards;
  if (list && Object.values(state.entities.cards).length > 0) {
    cards = cardLists(state, list)
  }
  let board;
  board = state.entities.boards[ownProps.boardId]
  return {
    cards,
    list,
    user,
    board,
    state
  }
};


const mdp = dispatch => ({
  deleteCard: (boardId, listId, cardId) => dispatch(deleteCard(boardId, listId, cardId)),
  fetchCards: (boardId, listId) => dispatch(fetchCards(boardId, listId)),
  openModal: modal => dispatch(openModal(modal)),
  addMember: (boardId, listId, cardId, userId) => dispatch(addMember(boardId, listId, cardId, userId)),
  removeMember: (boardId, listId, cardId, userId) => dispatch(removeMember(boardId, listId, cardId, userId))
});

export default connect(msp, mdp)(CardIndex)