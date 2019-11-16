import React from 'react'
import Search from '../search/search_container'

class BoardShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {loading: true}
  }
  componentDidMount () {
    this.props.fetchBoard(this.props.match.params.boardId).then(() => this.setState({loading: false}))
  }

  render () {
    if (this.state.loading) {
      return null
    }
    const usersUl = this.props.users.map(user => <li>{user.username}</li>)
    if (this.props.board.owner_id === this.props.state.session.id) {
      return (
        <div className="board-show-main">
          <div className="board-show-side">
            <h2>Collaborators</h2>
            <Search boardId={this.props.match.params.boardId} />
            <ul>
              {usersUl}
            </ul>
          </div>
          
            <div className="board-show-lists">
              <h2 className="board-show-heading">{this.props.board.project_name}</h2>
            </div>
        </div>
      )
    } else {
      return (
        <div className="board-show-main">
          <div className="board-show-side">
            <h2>Collaborators</h2>
            <ul>
              {usersUl}
            </ul>
          </div>

          <div className="board-show-lists">
            <h2 className="board-show-heading">{this.props.board.project_name}</h2>
          </div>

        </div>
      )
    }
  }
}

export default BoardShow;