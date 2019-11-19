export const createdBoardSelector = (state, user) => {
  let boards = [];
  if (user && user.createdBoardIds) {
    user.createdBoardIds.forEach(id => {
      boards.push(state.entities.boards[id])
    })
  }
  return boards
}

export const joinedBoardSelector = (state, user) => {
  let boards = [];
  if (user && user.joinedBoardIds) {
    user.joinedBoardIds.forEach(id => {
      boards.push(state.entities.boards[id])
    })
  }
  return boards
}

export const boardCollaborators = (state, board) => {
  let users = [];
  if (board && board.memberIds) {
    board.memberIds.forEach(id => {
      users.push(state.entities.users[id])
    })
  }
  return users;
}

export const boardLists = (state, board) => {
  let lists = [];
  if (board && board.listIds) {
    board.listIds.forEach(id => {
      lists.push(state.entities.lists[id])
    })
  }
  return lists;
}


