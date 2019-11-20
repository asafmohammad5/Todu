import { connect } from 'react-redux';
import CardIndex from './card_index';
import { deleteCard, fetchCards } from '../../actions/card_actions';
import { cardLists} from '../../reducers/selectors';


const msp = (state, ownProps) => {
  let list = state.entities.lists[ownProps.listId];
  let user = state.entities.users[state.session.id]
  let cards;
  if (list && Object.values(state.entities.cards).length > 0) {
    cards = cardLists(state, list)
  }
  return {
    cards,
    list,
    user
  }
};


const mdp = dispatch => ({
  deleteCard: (boardId, listId, cardId) => dispatch(deleteCard(boardId, listId, cardId)),
  fetchCards: (boardId, listId) => dispatch(fetchCards(boardId, listId))
});

export default connect(msp, mdp)(CardIndex)