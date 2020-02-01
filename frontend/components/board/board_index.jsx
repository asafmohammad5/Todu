import React from 'react';
import {Link} from 'react-router-dom';
import {BoardIndexItem}  from './board_index_item';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { loading: true }
  }

  componentDidMount () {
    this.props.fetchBoards().then(() => this.setState({loading: false}))
  }

  render () {
    if (this.state.loading) {
      return null
    }
    const createdBoards = this.props.createdBoards.map( (board) => 
      <div className="created-boards-index-show">
        <Link className="board-index-link" to={`/boards/${board.id}`} key={board.id}> <BoardIndexItem board={board} /> </Link>
        <button className="board-index-edit-button" onClick={() => this.props.openModal({ modal: 'update', boardId: board.id })}>Edit</button>
      </div>
    )

    const joinedBoards = this.props.joinedBoards.map((board) => 
      <div className="created-boards-index-show">
        <Link className="board-index-link" to={`/boards/${board.id}`} key={board.id}> <BoardIndexItem board={board} /> </Link>
      </div>
    )

    return (
        <div className="board-index">
        <div className="board-index-t"></div>
          <div className="board-create">
            <button className="board-index-create" onClick={() => this.props.openModal({modal: 'create'})}>Create board</button>
          </div>

          <div className="created-boards">
            <h2 className="board-heading">My Boards</h2>
              <ul className="board-index-list">
               {createdBoards}
              </ul>
          </div>
        
          <div className="joined-boards">
            <h2 className="board-heading">Joined Boards</h2>
            <ul className="board-index-list-1">
              {joinedBoards}
            </ul>
          </div>
       
        </div>
    )
  }
}


export default BoardIndex;