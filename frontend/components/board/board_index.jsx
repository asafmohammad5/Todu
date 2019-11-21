import React from 'react';
import {Link} from 'react-router-dom';
import {BoardIndexItem}  from './board_index_item';
import Modal from './modal_container';

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
    const createdBoards = this.props.createdBoards.map( (board) => <Link className="board-index-link" to={`/boards/${board.id}`} key={board.id}> <BoardIndexItem board={board} /> </Link>)
    const joinedBoards = this.props.joinedBoards.map((board) => <Link className="board-index-link" to={`/boards/${board.id}`} key={board.id}> <BoardIndexItem board={board} /> </Link>)
    return (
        <div className="board-index">

          <div className="board-create">
            <button className="board-index-create" onClick={() => this.props.openModal({modal: 'create'})}>Create board</button>
          </div>

          <Modal />

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