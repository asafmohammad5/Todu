import * as ChecklistUtil from '../util/checklist_util';

export const RECEIVE_CHECKLIST = 'RECEIVE_CHECKLIST';
export const REMOVE_CHECKLIST = 'REMOVE_CHECKLIST';


const receiveChecklist = payload => ({
  type: RECEIVE_CHECKLIST,
  payload
})

const removeChecklist = payload => ({
  type: REMOVE_CHECKLIST,
  payload
})

// export const fetchChecklists = (boardId, listId, cardId) => dispatch => (
//   ChecklistUtil.fetchChecklists(boardId, listId, cardId).then(checklists => dispatch(receiveAllChecklists(checklists)))
// )

// export const fetchChecklist = (boardId, listId, cardId, checklistId) => dispatch => (
//   ChecklistUtil.fetchChecklist(boardId, listId, cardId, checklistId).then(payload => dispatch(receiveChecklist(payload)))
// )

export const createChecklist = (boardId, listId, cardId, checklist) => dispatch => (
  ChecklistUtil.createChecklist(boardId, listId, cardId, checklist).then(payload => dispatch(receiveChecklist(payload)))
)

export const updateChecklist = (boardId, listId, cardId, checklist) => dispatch => (
  ChecklistUtil.updateChecklist(boardId, listId, cardId, checklist).then(payload => dispatch(receiveChecklist(payload)))
)

export const deleteChecklist = (boardId, listId, cardId, checklistId) => dispatch => (
  ChecklistUtil.deleteChecklist(boardId, listId, cardId, checklistId).then(payload => dispatch(removeChecklist(payload)))
)