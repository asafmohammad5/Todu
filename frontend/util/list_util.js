export const fetchLists = (boardId) => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/lists`
  })
);

export const fetchList = (boardId, listId) => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}/lists/${listId}`
  })
);

export const createList = (boardId, list) => (
  $.ajax({
    method: 'POST',
    url: `/api/boards/${boardId}/lists`,
    data: { list }
  })
);

export const updateList = (boardId, list) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/boards/${boardId}/lists/${list.id}`,
    data: { list }
  })
);

export const deleteList = (boardId, listId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/boards/${boardId}/lists/${listId}`
  })
);