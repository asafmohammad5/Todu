import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = { modalType: null, boardId: null, listId: null, cardId: null }, action) {
  Object.freeze(state)
  
  switch (action.type) {
    case OPEN_MODAL:
      return { modalType: action.modal.modal,
              boardId: action.modal.boardId,
              listId: action.modal.listId,
              cardId: action.modal.cardId }
    case CLOSE_MODAL:
      return {modalType: null};
    default:
      return state;
  }
}
