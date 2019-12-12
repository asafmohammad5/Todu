import {
  RECEIVE_ALL_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD
} from "../actions/card_actions";

import {
  RECEIVE_LIST
} from "../actions/list_actions";

import {
  RECEIVE_BOARD
} from "../actions/board_actions";

import {
  RECEIVE_CHECKLIST
} from '../actions/checklist_actions'


const cardReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CARDS:
      return Object.assign({}, action.cards.cards)
    case RECEIVE_CARD:
      let card = action.payload.card;
      return Object.assign({}, state, { [card.id]: card })
    case REMOVE_CARD:
      let newState = Object.assign({}, state)
      delete newState[action.cardId]
      return newState
    case RECEIVE_LIST:
      return Object.assign({}, state, action.payload.cards)
    case RECEIVE_BOARD:
      return Object.assign({}, state, action.payload.cards)
    case RECEIVE_CHECKLIST:
      let newcard = action.payload.card;
      return Object.assign({}, state, { [newcard.id]: newcard })
    default:
      return state;
  }
}

export default cardReducer;