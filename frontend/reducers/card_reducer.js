import {
  RECEIVE_ALL_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD
} from "../actions/card_actions";

import {
  RECEIVE_LIST
} from "../actions/list_actions";


const cardReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CARDS:
      return Object.assign({}, action.cards.cards)
    case RECEIVE_CARD:
      let card = action.payload.card;
      return Object.assign({}, state, { [card.id]: card })
    case REMOVE_CARD:
      return Object.assign({}, action.payload.cards)
    case RECEIVE_LIST:
      return Object.assign({}, state, action.payload.cards)
    default:
      return state;
  }
}

export default cardReducer;