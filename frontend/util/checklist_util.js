// export const fetchChecklists = (boardId, listId, cardId) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/boards/${boardId}/lists/${listId}/cards/${cardId}`
//   })
// );

// export const fetchChecklist = (boardId, listId, cardId, checklistId) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/boards/${boardId}/lists/${listId}/cards/${cardId}/checklists/${checklistId}`
//   })
// );

export const createChecklist = (boardId, listId, cardId, checklist) => (
  $.ajax({
    method: 'POST',
    url: `/api/boards/${boardId}/lists/${listId}/cards/${cardId}/checklists`,
    data: { checklist }
  })
);

export const updateChecklist = (boardId, listId, cardId, checklist) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/boards/${boardId}/lists/${listId}/cards/${cardId}/checklists/${checklist.id}`,
    data: { checklist }
  })
);

export const deleteChecklist = (boardId, listId, cardId, checklistId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/boards/${boardId}/lists/${listId}/cards/${cardId}/checklists/${checklistId}`
  })
);
