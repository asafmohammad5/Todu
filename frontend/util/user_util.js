export const searchUsers = (searchTerm) => (
  $.ajax({
    method: 'get',
    url: '/api/users',
    data: {searchTerm}
  })
)