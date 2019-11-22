import { connect } from 'react-redux';
import ChecklistIndex from './checklist_index';
import {createChecklist, deleteChecklist, updateChecklist } from '../../actions/checklist_actions';

const msp = (state, ownProps) => {
  let boardId = ownProps.boardId
  let board = state.entities.boards[ownProps.boardId]
  let user = state.entities.users[state.session.id]
  let listId = ownProps.listId
  let cardId = ownProps.cardId
  let card = state.entities.cards[ownProps.cardId];
  let checklists;
  if (card.checklists) {
    checklists = Object.values(card.checklists)
  }
  return {
    checklists,
    boardId,
    listId,
    cardId,
    board,
    user
  }
}

const mdp = dispatch => ({
  createChecklist: (boardId, listId, cardId, checklist) => dispatch(createChecklist(boardId, listId, cardId, checklist)),
  updateChecklist: (boardId, listId, cardId, checklist) => dispatch(updateChecklist(boardId, listId, cardId, checklist)),
  deleteChecklist: (boardId, listId, cardId, checklistId) => dispatch(deleteChecklist(boardId, listId, cardId, checklistId))
})

export default connect(msp, mdp)(ChecklistIndex);