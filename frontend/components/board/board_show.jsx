import React from 'react';
import Search from '../search/search_container';
import {Redirect} from 'react-router-dom';

class BoardShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {loading: true}
  }

  componentDidMount () {
    this.props.fetchBoard(this.props.match.params.boardId).then(() => this.setState({loading: false}))
  }

  deleteOwnBoard (boardId) {
    this.props.deleteBoard(boardId)
  }

  render () {
    if (this.state.loading) {
      return null
    };

    if (!this.props.board) {
      return <Redirect to='/boards' />
    };

    if (this.props.board.owner_id === this.props.state.session.id) {
      const usersUl = this.props.users.map(user => 
        <li className="board-show-members"
          key={user.id}>{user.username} 
          <button className="board-member-delete" onClick={() => this.props.removeMember(this.props.match.params.boardId, user.id)}>remove member</button>
        </li> )
      return (
        
        <div className="board-show-main">
          <div className="board-show-side">
            <h2 className="collaborators">Collaborators</h2>
            <Search boardId={this.props.match.params.boardId} />
            <ul className="search-result-item">
              {usersUl}
            </ul>
          </div>

           <div className="board-show-lists">
              <button className="board-button-delete" onClick={() => this.deleteOwnBoard(this.props.match.params.boardId)}>Delete board</button>
              <h2 className="board-show-heading">{this.props.board.project_name}</h2>
           </div>

        </div>
      )
    } else {
      const usersUl = this.props.users.map(user => <li key={user.id}>{user.username}</li>)
      return (
        <div className="board-show-main">
          <div className="board-show-side">
            <h2 className="collaborators">Collaborators</h2>
            <ul className="board-show-members-2">
              {usersUl}
            </ul>
          </div>

          <div className="board-show-lists">
            <button className="board-button-delete" 
            onClick={() => this.props.removeMember(this.props.match.params.boardId, this.props.state.session.id)
            .then(() => this.props.history.push('/boards'))}>Leave board</button>
            
            <h2 className="board-show-heading">{this.props.board.project_name}</h2>
          </div>

        </div>
      )
    }
  }
}

export default BoardShow;