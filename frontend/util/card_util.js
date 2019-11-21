export const fetchCards = (boardId, listId) => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/lists/${listId}/cards`
  })
);

export const fetchCard = (boardId, listId, cardId) => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/lists/${listId}/cards/${cardId}`
  })
);

export const createCard = (boardId, listId, card) => (
  $.ajax({
    method: 'POST',
    url: `/api/boards/${boardId}/lists/${listId}/cards`,
    data: { card }
  })
);

export const updateCard = (boardId, listId, card) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/boards/${boardId}/lists/${listId}/cards/${card.id}`,
    data: { card }
  })
);

export const deleteCard = (boardId, listId, cardId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/boards/${boardId}/lists/${listId}/cards/${cardId}`
  })
);

export const addMember = (boardId, listId, cardId, userId) => (
  $.ajax({
    method: 'post',
    url: `/api/boards/${boardId}/lists/${listId}/cards/${cardId}/add_member`,
    data: { userId }
  })
);

export const removeMember = (boardId, listId, cardId, userId) => (
  $.ajax({
    method: 'delete',
    url: `/api/boards/${boardId}/lists/${listId}/cards/${cardId}/remove_member`,
    data: { userId }
  })
);
