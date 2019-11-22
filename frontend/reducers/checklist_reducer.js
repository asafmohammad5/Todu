import {
  RECEIVE_CARD
} from "../actions/card_actions";

import {
  RECEIVE_CHECKLIST,
  REMOVE_CHECKLIST
} from "../actions/checklist_actions";

const checklistReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CARD:
      return Object.assign({}, action.payload.card.checklists)
    case RECEIVE_CHECKLIST:
      let checklist = action.payload.checklist;
      return Object.assign({}, state, { [checklist.id]: checklist })
    case REMOVE_CHECKLIST:
      return Object.assign({}, action.payload.card.checklists)
    default:
      return state;
  }
}

export default checklistReducer;