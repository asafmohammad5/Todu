export const fetchBoards = () => (
  $.ajax({
    method: 'GET',
    url: '/api/boards'
  })
);

export const fetchBoard = boardId => (
  $.ajax({
    method: 'GET',
    url: `/api/boards/${boardId}`
  })
);

export const createBoard = board => (
  $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: { board }
  })
);

export const updateBoard = board => (
  $.ajax({
    method: 'PATCH',
    url: `/api/boards/${board.id}`,
    data: { board }
  })
);

export const deleteBoard = boardId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/boards/${boardId}`
  })
);

export const addMember = (boardId, userId) => (
  $.ajax({
    method: 'post',
    url: `/api/boards/${boardId}/add_member`,
    data: {userId}
  })
);

export const removeMember = (boardId, userId) => (
  $.ajax({
    method: 'delete',
    url: `/api/boards/${boardId}/remove_member`,
    data: {userId}
  })
);
