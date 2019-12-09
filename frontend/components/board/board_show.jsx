import React from 'react';
import Search from '../search/search_container';
import {Redirect} from 'react-router-dom';
import ListIndex from '../list/list_index_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      listName: ""
    }
    this.submit = this.submit.bind(this);
  }

  componentDidMount () {
    this.props.fetchBoard(this.props.match.params.boardId).then(() => this.setState({loading: false}))
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  clearState () {
    this.setState({listName: ""})
  }

  submit(e) {
    e.preventDefault();
    let boardId = this.props.board.id;
    let list = {list_name: this.state.listName, board_id: boardId}
    this.props.createList(boardId, list).then(this.clearState())
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
          <button className="board-member-delete" onClick={() => this.props.removeMember(this.props.match.params.boardId, user.id)}>remove</button>
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
              <div className="board-show-return" onClick={() => this.props.history.push("/boards")}>&#60;</div>
              <div className="board-show-outer">
                <div className="board-show-form">
                  <form onSubmit={this.submit}>
                    <button className="add-list">Add list</button>
                    <input 
                    className="board-show-list-input"
                    type="text" 
                    value={this.state.listName}
                    onChange={this.update('listName')}
                    placeholder="Enter list name"
                    />
                  </form>
              </div>

                <h2 className="board-show-heading">{this.props.board.project_name}</h2>
                <div className="board-show-empty"></div>
            </div>
               <ul>
                 <ListIndex boardId={this.props.match.params.boardId} />
               </ul>
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
            <div className="board-show-return" onClick={() => this.props.history.push("/boards")}>&#60;</div>
            <button className="board-button-delete-1" 
            onClick={() => this.props.removeMember(this.props.match.params.boardId, this.props.state.session.id)
            .then(() => this.props.history.push('/boards'))}>Leave board</button>
            
            <div className="board-show-outer">
              <div className="board-show-form">

              </div>

              <h2 className="board-show-heading">{this.props.board.project_name}</h2>
              <div className="board-show-empty"></div>
            </div>
            <ul>
              <ListIndex boardId={this.props.match.params.boardId} />
            </ul>
          </div>
          </div>
      )
    }
  }
}

export default BoardShow;